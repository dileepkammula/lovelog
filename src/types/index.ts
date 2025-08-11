export interface MemoryData {
  id: string;
  title: string;
  date: string;
  type: 'note' | 'playlist' | 'collage' | 'countdown' | 'jar' | 'milestone';
  content: {
    description?: string;
    images?: string[];
    playlist?: {
      title: string;
      url: string;
      thumbnail: string;
    };
    notes?: string[];
    countdownTarget?: string;
    jarItems?: string[];
  };
  tags: string[];
  privacy: 'private' | 'shared' | 'public';
  location?: string;
  mood: string;
}

export interface PrivacySettings {
  isLocked: boolean;
  password: string;
  hideFromSearch: boolean;
  limitedSharing: boolean;
}