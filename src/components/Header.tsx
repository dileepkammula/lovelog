import React from 'react';
import { Heart, Plus, Shield, Archive, Calendar, BookOpen } from 'lucide-react';
import { PrivacySettings } from '../types';

interface HeaderProps {
  onAddMemory: () => void;
  onOpenPrivacy: () => void;
  onOpenLoveLogs: () => void;
  privacySettings: PrivacySettings;
}

export const Header: React.FC<HeaderProps> = ({ onAddMemory, onOpenPrivacy, onOpenLoveLogs, privacySettings }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-rose-200/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl shadow-lg">
              <Heart className="h-6 w-6 text-white" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Memory Timeline
              </h1>
              <p className="text-sm text-gray-600">Cherish every moment together</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenPrivacy}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <Shield className={`h-4 w-4 ${privacySettings.isLocked ? 'text-green-600' : 'text-gray-600'}`} />
              <span className="text-sm font-medium text-gray-700">Privacy</span>
            </button>

            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200">
              <Archive className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Archive</span>
            </button>

            <button
              onClick={onOpenLoveLogs}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Love Logs</span>
            </button>

            <button
              onClick={onAddMemory}
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              <span className="font-medium">Add Memory</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};