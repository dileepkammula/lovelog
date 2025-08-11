import React, { useState } from 'react';
import { X, Calendar, MapPin, Tag, Image, Music, FileText, Clock, Car as Jar, Heart, Upload } from 'lucide-react';
import { MemoryData } from '../types';

interface AddMemoryModalProps {
  onClose: () => void;
  onAdd: (memory: MemoryData) => void;
}

export const AddMemoryModal: React.FC<AddMemoryModalProps> = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    type: 'note' as MemoryData['type'],
    description: '',
    location: '',
    tags: '',
    privacy: 'private' as MemoryData['privacy'],
    mood: '😊',
    images: [] as string[],
    playlistTitle: '',
    playlistUrl: '',
    notes: [] as string[],
    countdownTarget: '',
    jarItems: [] as string[]
  });

  const [newNote, setNewNote] = useState('');
  const [newJarItem, setNewJarItem] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const typeOptions = [
    { value: 'note', label: 'Note', icon: FileText },
    { value: 'playlist', label: 'Playlist', icon: Music },
    { value: 'collage', label: 'Photo Collage', icon: Image },
    { value: 'countdown', label: 'Countdown', icon: Clock },
    { value: 'jar', label: 'Memory Jar', icon: Jar },
    { value: 'milestone', label: 'Milestone', icon: Heart }
  ];

  const moods = ['😊', '😍', '🥰', '😂', '😎', '🤗', '🥺', '😌', '🎉', '💕'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const memory: MemoryData = {
      id: Date.now().toString(),
      title: formData.title,
      date: formData.date,
      type: formData.type,
      content: {
        description: formData.description || undefined,
        images: formData.images.length > 0 ? formData.images : undefined,
        playlist: formData.type === 'playlist' && formData.playlistUrl ? {
          title: formData.playlistTitle || formData.title,
          url: formData.playlistUrl,
          thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
        } : undefined,
        notes: formData.notes.length > 0 ? formData.notes : undefined,
        countdownTarget: formData.type === 'countdown' ? formData.countdownTarget : undefined,
        jarItems: formData.jarItems.length > 0 ? formData.jarItems : undefined
      },
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      privacy: formData.privacy,
      location: formData.location || undefined,
      mood: formData.mood
    };

    onAdd(memory);
    onClose();
  };

  const addNote = () => {
    if (newNote.trim()) {
      setFormData(prev => ({
        ...prev,
        notes: [...prev.notes, newNote.trim()]
      }));
      setNewNote('');
    }
  };

  const addJarItem = () => {
    if (newJarItem.trim()) {
      setFormData(prev => ({
        ...prev,
        jarItems: [...prev.jarItems, newJarItem.trim()]
      }));
      setNewJarItem('');
    }
  };

  const addImage = () => {
    if (imageUrl.trim()) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()]
      }));
      setImageUrl('');
    }
  };

  const removeItem = (type: 'notes' | 'jarItems' | 'images', index: number) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Create New Memory</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="h-4 w-4 inline mr-1" />
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Give your memory a title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Date *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Memory Type</label>
            <div className="grid grid-cols-3 gap-2">
              {typeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: option.value as MemoryData['type'] }))}
                    className={`p-3 border rounded-lg transition-all duration-200 ${
                      formData.type === option.value
                        ? 'border-rose-500 bg-rose-50 text-rose-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Icon className="h-4 w-4 mx-auto mb-1" />
                    <span className="text-xs">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              placeholder="Describe this memory..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 inline mr-1" />
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Where did this happen?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mood</label>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, mood }))}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      formData.mood === mood
                        ? 'bg-rose-100 ring-2 ring-rose-500'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Type-specific content */}
          {formData.type === 'playlist' && (
            <div className="space-y-4 p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-800">Playlist Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formData.playlistTitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, playlistTitle: e.target.value }))}
                  placeholder="Playlist title (optional)"
                  className="px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="url"
                  value={formData.playlistUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, playlistUrl: e.target.value }))}
                  placeholder="Spotify/YouTube URL"
                  className="px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {formData.type === 'collage' && (
            <div className="space-y-4 p-4 bg-pink-50 rounded-lg">
              <h3 className="font-medium text-pink-800">Photo Collage</h3>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Image URL"
                  className="flex-1 px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={addImage}
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200"
                >
                  <Upload className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {formData.images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img src={img} alt={`Upload ${index + 1}`} className="w-full h-16 object-cover rounded-lg" />
                    <button
                      type="button"
                      onClick={() => removeItem('images', index)}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {formData.type === 'countdown' && (
            <div className="space-y-4 p-4 bg-orange-50 rounded-lg">
              <h3 className="font-medium text-orange-800">Countdown Timer</h3>
              <input
                type="datetime-local"
                value={formData.countdownTarget}
                onChange={(e) => setFormData(prev => ({ ...prev, countdownTarget: e.target.value }))}
                className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          )}

          {formData.type === 'jar' && (
            <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-800">Memory Jar Items</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newJarItem}
                  onChange={(e) => setNewJarItem(e.target.value)}
                  placeholder="Add a memory to the jar..."
                  className="flex-1 px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addJarItem())}
                />
                <button
                  type="button"
                  onClick={addJarItem}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  Add
                </button>
              </div>
              <div className="space-y-2">
                {formData.jarItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-2 rounded-lg border border-purple-200">
                    <span className="text-sm">{item}</span>
                    <button
                      type="button"
                      onClick={() => removeItem('jarItems', index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {formData.type === 'note' && (
            <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-800">Notes</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note..."
                  className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addNote())}
                />
                <button
                  type="button"
                  onClick={addNote}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Add
                </button>
              </div>
              <div className="space-y-2">
                {formData.notes.map((note, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-2 rounded-lg border border-blue-200">
                    <span className="text-sm">{note}</span>
                    <button
                      type="button"
                      onClick={() => removeItem('notes', index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Tag className="h-4 w-4 inline mr-1" />
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="love, anniversary, special (comma separated)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Privacy</label>
              <select
                value={formData.privacy}
                onChange={(e) => setFormData(prev => ({ ...prev, privacy: e.target.value as MemoryData['privacy'] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="private">Private (Only you)</option>
                <option value="shared">Shared (Selected people)</option>
                <option value="public">Public (Everyone)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Memory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};