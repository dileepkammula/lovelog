import React from 'react';
import { MemoryCard } from './MemoryCard';
import { MemoryData } from '../types';

interface TimelineProps {
  memories: MemoryData[];
  onMemoryClick: (memory: MemoryData) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ memories, onMemoryClick }) => {
  const groupedMemories = memories.reduce((acc, memory) => {
    const year = new Date(memory.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(memory);
    return acc;
  }, {} as Record<number, MemoryData[]>);

  const years = Object.keys(groupedMemories).map(Number).sort((a, b) => b - a);

  return (
    <div className="max-w-4xl mx-auto">
      {years.map(year => (
        <div key={year} className="mb-12">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
              {year}
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-rose-300 to-transparent ml-6"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-purple-300 to-pink-300"></div>

            <div className="space-y-8">
              {groupedMemories[year].map((memory, index) => (
                <div key={memory.id} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`relative ${index % 2 === 0 ? 'ml-16' : 'mr-16'} max-w-lg`}>
                    {/* Timeline dot */}
                    <div className={`absolute ${index % 2 === 0 ? '-left-20' : '-right-20'} top-6 w-4 h-4 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10`}></div>
                    
                    <MemoryCard
                      memory={memory}
                      onClick={() => onMemoryClick(memory)}
                      isEven={index % 2 === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};