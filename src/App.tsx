import React, { useState, useEffect } from 'react';
import { Timeline } from './components/Timeline';
import { Header } from './components/Header';
import { AddMemoryModal } from './components/AddMemoryModal';
import { MemoryDetailModal } from './components/MemoryDetailModal';
import { PrivacyPanel } from './components/PrivacyPanel';
import { LoveLogsModal } from './components/LoveLogsModal';
import { MemoryData, PrivacySettings } from './types';
import { sampleMemories } from './data/sampleData';

function App() {
  const [memories, setMemories] = useState<MemoryData[]>(sampleMemories);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<MemoryData | null>(null);
  const [isPrivacyPanelOpen, setIsPrivacyPanelOpen] = useState(false);
  const [isLoveLogsOpen, setIsLoveLogsOpen] = useState(false);
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    isLocked: false,
    password: '',
    hideFromSearch: false,
    limitedSharing: true
  });

  const handleAddMemory = (memory: MemoryData) => {
    setMemories(prev => [...prev, memory].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));
  };

  const handleUpdateMemory = (updatedMemory: MemoryData) => {
    setMemories(prev => prev.map(memory => 
      memory.id === updatedMemory.id ? updatedMemory : memory
    ));
  };

  const handleDeleteMemory = (memoryId: string) => {
    setMemories(prev => prev.filter(memory => memory.id !== memoryId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50">
      <Header 
        onAddMemory={() => setIsAddModalOpen(true)}
        onOpenPrivacy={() => setIsPrivacyPanelOpen(true)}
        onOpenLoveLogs={() => setIsLoveLogsOpen(true)}
        privacySettings={privacySettings}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Timeline 
          memories={memories}
          onMemoryClick={setSelectedMemory}
        />
      </main>

      {isAddModalOpen && (
        <AddMemoryModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddMemory}
        />
      )}

      {selectedMemory && (
        <MemoryDetailModal
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
          onUpdate={handleUpdateMemory}
          onDelete={handleDeleteMemory}
        />
      )}

      {isPrivacyPanelOpen && (
        <PrivacyPanel
          settings={privacySettings}
          onClose={() => setIsPrivacyPanelOpen(false)}
          onUpdate={setPrivacySettings}
        />
      )}

      {isLoveLogsOpen && (
        <LoveLogsModal
          onClose={() => setIsLoveLogsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;