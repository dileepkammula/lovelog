import { MemoryData } from '../types';

export const sampleMemories: MemoryData[] = [
  {
    id: '1',
    title: 'Our First Date',
    date: '2023-02-14',
    type: 'milestone',
    content: {
      description: 'The magical evening when everything began. We talked for hours at that little café downtown, and I knew there was something special about you.',
      images: [
        'https://images.pexels.com/photos/1246877/pexels-photo-1246877.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['first-date', 'beginning', 'love', 'valentines'],
    privacy: 'shared',
    location: 'Cozy Corner Café',
    mood: '😍'
  },
  {
    id: '2',
    title: 'Our Song Collection',
    date: '2023-03-20',
    type: 'playlist',
    content: {
      description: 'All the songs that remind us of each other and our journey together.',
      playlist: {
        title: 'Songs of Us',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    tags: ['music', 'memories', 'romantic'],
    privacy: 'shared',
    mood: '🎵'
  },
  {
    id: '3',
    title: 'Weekend Adventure Collage',
    date: '2023-05-15',
    type: 'collage',
    content: {
      description: 'Our spontaneous weekend getaway to the mountains. The views were incredible, but your smile was even better.',
      images: [
        'https://images.pexels.com/photos/1769524/pexels-photo-1769524.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1582487/pexels-photo-1582487.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['adventure', 'mountains', 'weekend', 'nature'],
    privacy: 'shared',
    location: 'Blue Ridge Mountains',
    mood: '🏔️'
  },
  {
    id: '4',
    title: 'Anniversary Countdown',
    date: '2023-07-01',
    type: 'countdown',
    content: {
      description: 'Counting down to our one-year anniversary! Can\'t wait to celebrate this milestone with you.',
      countdownTarget: '2024-02-14T19:00:00'
    },
    tags: ['anniversary', 'milestone', 'celebration'],
    privacy: 'private',
    mood: '⏰'
  },
  {
    id: '5',
    title: 'Gratitude Jar',
    date: '2023-08-10',
    type: 'jar',
    content: {
      description: 'Little things I love about us that I want to remember forever.',
      jarItems: [
        'The way you laugh at my terrible jokes',
        'How you always know the perfect thing to say',
        'Your incredible cooking skills',
        'The way you hold my hand during movies',
        'Your adorable bedhead in the morning',
        'How you support my crazy dreams',
        'The little notes you leave in my lunch',
        'Your amazing hugs after a long day'
      ]
    },
    tags: ['gratitude', 'love', 'appreciation'],
    privacy: 'private',
    mood: '💕'
  },
  {
    id: '6',
    title: 'Random Thoughts & Notes',
    date: '2023-09-22',
    type: 'note',
    content: {
      description: 'Just some random thoughts and sweet memories I wanted to jot down.',
      notes: [
        'You wore that blue dress today and looked absolutely stunning',
        'We discovered that little bookshop and spent hours there',
        'You fell asleep during the movie but I didn\'t mind at all',
        'The way you get excited about small things makes me so happy',
        'Thank you for being patient with me when I\'m stressed'
      ]
    },
    tags: ['thoughts', 'daily-life', 'sweet-moments'],
    privacy: 'private',
    mood: '💭'
  },
  {
    id: '7',
    title: 'Six Months Together',
    date: '2023-08-14',
    type: 'milestone',
    content: {
      description: 'Half a year of incredible memories, laughter, and love. Here\'s to many more adventures together!',
      images: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['milestone', '6-months', 'celebration', 'love'],
    privacy: 'shared',
    location: 'Our favorite restaurant',
    mood: '🎉'
  },
  {
    id: '8',
    title: 'Holiday Memories',
    date: '2023-12-25',
    type: 'collage',
    content: {
      description: 'Our first Christmas together was magical. From decorating the tree to opening presents, every moment was perfect.',
      images: [
        'https://images.pexels.com/photos/1708088/pexels-photo-1708088.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1303088/pexels-photo-1303088.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['christmas', 'holidays', 'first-christmas', 'traditions'],
    privacy: 'shared',
    location: 'Home',
    mood: '🎄'
  },
  {
    id: '9',
    title: 'Beach Sunset Archive',
    date: '2023-07-20',
    type: 'collage',
    content: {
      description: 'A collection of beautiful sunset moments we\'ve shared at the beach. Each sunset reminds us of the beauty in simple moments together.',
      images: [
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['beach', 'sunset', 'archive', 'peaceful'],
    privacy: 'shared',
    location: 'Sunset Beach',
    mood: '🌅'
  },
  {
    id: '10',
    title: 'City Adventures Archive',
    date: '2023-09-15',
    type: 'collage',
    content: {
      description: 'Our urban exploration adventures - from rooftop views to street art discoveries. The city becomes more beautiful when we explore it together.',
      images: [
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['city', 'exploration', 'archive', 'adventure'],
    privacy: 'shared',
    location: 'Downtown',
    mood: '🏙️'
  },
  {
    id: '11',
    title: 'Cozy Home Moments Archive',
    date: '2023-11-10',
    type: 'collage',
    content: {
      description: 'The little moments at home that mean the most - cooking together, lazy Sunday mornings, and quiet evenings by the fireplace.',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    tags: ['home', 'cozy', 'archive', 'intimate'],
    privacy: 'private',
    location: 'Home',
    mood: '🏠'
  }
];