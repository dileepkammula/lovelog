import React from 'react';
import { Calendar, MapPin, Heart, Music, Image, Clock, Archive, FileText } from 'lucide-react';
import { MemoryData } from '../types';

interface MemoryCardProps {
  memory: MemoryData;
  onClick: () => void;
  isEven: boolean;
}

const typeIcons = {
  note: FileText,
  playlist: Music,
  collage: Image,
  countdown: Clock,
  jar: Archive,
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

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onClick, isEven }) => {
  const Icon = typeIcons[memory.type];
  const colorGradient = typeColors[memory.type];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        isEven ? 'hover:translate-x-2' : 'hover:-translate-x-2'
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
        <div className={`h-2 bg-gradient-to-r ${colorGradient}`}></div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className={`p-2 bg-gradient-to-r ${colorGradient} rounded-lg`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-200">
                  {memory.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(memory.date)}</span>
                  </div>
                  {memory.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{memory.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {memory.content.description && (
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
              {memory.content.description}
            </p>
          )}

          {memory.content.images && memory.content.images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {memory.content.images.slice(0, 3).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {memory.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="text-xs text-gray-500 flex items-center space-x-1">
              <span className={`w-2 h-2 rounded-full ${
                memory.privacy === 'private' ? 'bg-red-400' :
                memory.privacy === 'shared' ? 'bg-yellow-400' : 'bg-green-400'
              }`}></span>
              <span className="capitalize">{memory.privacy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};