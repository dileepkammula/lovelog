import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Heart, Music, Image, Clock, Car as Jar, FileText, Edit3, Trash2, ExternalLink, Play } from 'lucide-react';
import { MemoryData } from '../types';

interface MemoryDetailModalProps {
  memory: MemoryData;
  onClose: () => void;
  onUpdate: (memory: MemoryData) => void;
  onDelete: (memoryId: string) => void;
}

export const MemoryDetailModal: React.FC<MemoryDetailModalProps> = ({ 
  memory, 
  onClose, 
  onUpdate, 
  onDelete 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMemory, setEditedMemory] = useState<MemoryData>(memory);
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  const typeIcons = {
    note: FileText,
    playlist: Music,
    collage: Image,
    countdown: Clock,
    jar: Jar,
    milestone: Heart
  };

  const typeColors = {
    note: 'from-blue-500 to-cyan-600',
    playlist: 'from-green-500 to-emerald-600',
    collage: 'from-pink-500 to-rose-600',
    countdown: 'from-orange-500 to-amber-600',
    jar: 'from-purple-500 to-violet-600',
    milestone: 'from-red-500 to-pink-600'
  };

  const Icon = typeIcons[memory.type];
  const colorGradient = typeColors[memory.type];

  useEffect(() => {
    if (memory.type === 'countdown' && memory.content.countdownTarget) {
      const updateCountdown = () => {
        const target = new Date(memory.content.countdownTarget!);
        const now = new Date();
        const diff = target.getTime() - now.getTime();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          
          setCountdown({ days, hours, minutes, seconds });
        } else {
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }
  }, [memory.type, memory.content.countdownTarget]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

  const handleSave = () => {
    onUpdate(editedMemory);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this memory?')) {
      onDelete(memory.id);
      onClose();
    }
  };

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className={`h-2 bg-gradient-to-r ${colorGradient}`}></div>
        
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 bg-gradient-to-r ${colorGradient} rounded-xl`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedMemory.title}
                    onChange={(e) => setEditedMemory(prev => ({ ...prev, title: e.target.value }))}
                    className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 focus:border-rose-500 bg-transparent outline-none"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-gray-900">{memory.title}</h2>
                )}
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(memory.date)}</span>
                  </div>
                  {memory.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{memory.location}</span>
                    </div>
                  )}
                  <div className="text-2xl">{memory.mood}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <Edit3 className="h-5 w-5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {memory.content.description && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              {isEditing ? (
                <textarea
                  value={editedMemory.content.description || ''}
                  onChange={(e) => setEditedMemory(prev => ({
                    ...prev,
                    content: { ...prev.content, description: e.target.value }
                  }))}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
              ) : (
                <p className="text-gray-700 leading-relaxed">{memory.content.description}</p>
              )}
            </div>
          )}

          {/* Type-specific content */}
          {memory.type === 'collage' && memory.content.images && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Photo Collage</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {memory.content.images.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`Memory ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {memory.type === 'playlist' && memory.content.playlist && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Playlist</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    {getYouTubeVideoId(memory.content.playlist.url) ? (
                      <img 
                        src={`https://img.youtube.com/vi/${getYouTubeVideoId(memory.content.playlist.url)}/mqdefault.jpg`}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Music className="h-8 w-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800">{memory.content.playlist.title}</h4>
                    <p className="text-green-600 text-sm">Shared playlist</p>
                    <a 
                      href={memory.content.playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-green-700 hover:text-green-900 transition-colors duration-200 mt-2"
                    >
                      <Play className="h-4 w-4" />
                      <span>Listen Now</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {memory.type === 'countdown' && memory.content.countdownTarget && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Countdown Timer</h3>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200">
                <div className="text-center">
                  <p className="text-orange-600 mb-4">
                    Counting down to: {new Date(memory.content.countdownTarget).toLocaleDateString()}
                  </p>
                  {countdown && (
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: 'Days', value: countdown.days },
                        { label: 'Hours', value: countdown.hours },
                        { label: 'Minutes', value: countdown.minutes },
                        { label: 'Seconds', value: countdown.seconds }
                      ].map((item) => (
                        <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-2xl font-bold text-orange-600">{item.value}</div>
                          <div className="text-sm text-orange-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {memory.type === 'jar' && memory.content.jarItems && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Memory Jar</h3>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {memory.content.jarItems.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-400 transform hover:scale-105 transition-transform duration-200"
                    >
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {memory.type === 'note' && memory.content.notes && (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Notes</h3>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="space-y-3">
                  {memory.content.notes.map((note, index) => (
                    <div 
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400"
                    >
                      <p className="text-gray-700">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {memory.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${
                  memory.privacy === 'private' ? 'bg-red-400' :
                  memory.privacy === 'shared' ? 'bg-yellow-400' : 'bg-green-400'
                }`}></div>
                <span className="capitalize">{memory.privacy}</span>
              </div>
              <div>Created on {formatDate(memory.date)}</div>
            </div>

            {isEditing && (
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};