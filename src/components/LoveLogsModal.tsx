import React, { useState } from 'react';
import { X, BookOpen, Heart, Calendar, MapPin, Plus, Edit3, Trash2 } from 'lucide-react';

interface LoveLog {
  id: string;
  title: string;
  content: string;
  date: string;
  mood: string;
  location?: string;
  tags: string[];
}

interface LoveLogsModalProps {
  onClose: () => void;
}

const defaultLoveLogs: LoveLog[] = [
  {
    id: '1',
    title: 'The Way You Smile',
    content: 'Today I noticed how your eyes light up when you smile at me. It\'s like the whole world becomes brighter in that moment. I love how genuine and warm your smile is, especially in the morning when you first wake up.',
    date: '2024-01-15',
    mood: '😍',
    location: 'Home',
    tags: ['smile', 'morning', 'love']
  },
  {
    id: '2',
    title: 'Coffee Shop Conversations',
    content: 'We spent three hours at our favorite coffee shop today, just talking about everything and nothing. I love how we can discuss our dreams, fears, and silly thoughts without any judgment. These moments of connection mean everything to me.',
    date: '2024-01-10',
    mood: '☕',
    location: 'Corner Café',
    tags: ['conversation', 'dreams', 'connection']
  },
  {
    id: '3',
    title: 'Your Cooking Adventures',
    content: 'You tried making pasta from scratch today and it was absolutely delicious! I love watching you cook - the way you concentrate, taste everything, and get so excited when it turns out well. Even when things don\'t go as planned, you laugh it off.',
    date: '2024-01-08',
    mood: '👨‍🍳',
    location: 'Kitchen',
    tags: ['cooking', 'pasta', 'laughter']
  },
  {
    id: '4',
    title: 'Rainy Day Cuddles',
    content: 'It rained all day today, so we stayed in bed watching movies and cuddling. I love how safe and content I feel in your arms. We didn\'t need to do anything special - just being together was perfect.',
    date: '2024-01-05',
    mood: '🌧️',
    location: 'Bedroom',
    tags: ['cuddles', 'movies', 'rainy-day']
  },
  {
    id: '5',
    title: 'Your Terrible Jokes',
    content: 'You told me the worst dad joke today and I couldn\'t stop laughing - not because it was funny, but because of how proud you looked when you delivered the punchline. I love your sense of humor and how you always try to make me smile.',
    date: '2024-01-03',
    mood: '😂',
    tags: ['jokes', 'humor', 'laughter']
  },
  {
    id: '6',
    title: 'Supporting My Dreams',
    content: 'When I told you about my crazy idea for a new project, you didn\'t laugh or tell me it was impossible. Instead, you asked thoughtful questions and offered to help however you could. Having your support means the world to me.',
    date: '2024-01-01',
    mood: '💪',
    tags: ['support', 'dreams', 'encouragement']
  }
];

export const LoveLogsModal: React.FC<LoveLogsModalProps> = ({ onClose }) => {
  const [logs, setLogs] = useState<LoveLog[]>(defaultLoveLogs);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newLog, setNewLog] = useState({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    mood: '😊',
    location: '',
    tags: ''
  });

  const moods = ['😊', '😍', '🥰', '😂', '😎', '🤗', '🥺', '😌', '🎉', '💕', '☕', '🌧️', '💪', '👨‍🍳'];

  const handleAddLog = () => {
    if (newLog.title.trim() && newLog.content.trim()) {
      const log: LoveLog = {
        id: Date.now().toString(),
        title: newLog.title,
        content: newLog.content,
        date: newLog.date,
        mood: newLog.mood,
        location: newLog.location || undefined,
        tags: newLog.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      };
      setLogs(prev => [log, ...prev]);
      setNewLog({
        title: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
        mood: '😊',
        location: '',
        tags: ''
      });
      setIsAddingNew(false);
    }
  };

  const handleDeleteLog = (id: string) => {
    if (window.confirm('Are you sure you want to delete this love log?')) {
      setLogs(prev => prev.filter(log => log.id !== id));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-rose-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Love Logs
                </h2>
                <p className="text-sm text-gray-600">Daily moments and thoughts about your relationship</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Plus className="h-4 w-4" />
                <span>New Log</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {isAddingNew && (
            <div className="mb-6 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
              <h3 className="font-semibold text-pink-800 mb-4">Add New Love Log</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Log title..."
                    value={newLog.title}
                    onChange={(e) => setNewLog(prev => ({ ...prev, title: e.target.value }))}
                    className="px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="date"
                    value={newLog.date}
                    onChange={(e) => setNewLog(prev => ({ ...prev, date: e.target.value }))}
                    className="px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Write about this moment..."
                  value={newLog.content}
                  onChange={(e) => setNewLog(prev => ({ ...prev, content: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Location (optional)"
                    value={newLog.location}
                    onChange={(e) => setNewLog(prev => ({ ...prev, location: e.target.value }))}
                    className="px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    value={newLog.tags}
                    onChange={(e) => setNewLog(prev => ({ ...prev, tags: e.target.value }))}
                    className="px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Mood:</span>
                    <div className="flex flex-wrap gap-1">
                      {moods.slice(0, 6).map((mood) => (
                        <button
                          key={mood}
                          type="button"
                          onClick={() => setNewLog(prev => ({ ...prev, mood }))}
                          className={`p-1 rounded transition-all duration-200 ${
                            newLog.mood === mood ? 'bg-pink-100 ring-2 ring-pink-500' : 'hover:bg-gray-100'
                          }`}
                        >
                          {mood}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setIsAddingNew(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddLog}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Add Log
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {logs.map((log) => (
              <div key={log.id} className="bg-gradient-to-br from-white to-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-pink-500 to-rose-600"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{log.mood}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{log.title}</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(log.date)}</span>
                          </div>
                          {log.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{log.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => setEditingId(log.id)}
                        className="p-1 text-gray-400 hover:text-pink-600 transition-colors duration-200"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteLog(log.id)}
                        className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {log.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {log.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {logs.length === 0 && (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No love logs yet</h3>
              <p className="text-gray-500 mb-4">Start documenting your daily moments and thoughts</p>
              <button
                onClick={() => setIsAddingNew(true)}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Create Your First Log
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};