
import { useState } from 'react';
import { Play, Clock, Flame, Trophy } from 'lucide-react';

// Types
type VideoProps = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  calories: number;
  intensity: 'easy' | 'medium' | 'hard';
  equipment: 'none' | 'minimal' | 'full';
  category: string;
  aiRecommended?: boolean;
};

type VideoGridProps = {
  activeCategory: string;
  filters: {
    time: string;
    intensity: string;
    equipment: string;
  };
};

export const VideoGrid = ({ activeCategory, filters }: VideoGridProps) => {
  // Sample video data
  const [videos] = useState<VideoProps[]>([
    {
      id: 'v1',
      title: 'Full Body HIIT - No Equipment Needed',
      thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '28:45',
      calories: 320,
      intensity: 'hard',
      equipment: 'none',
      category: 'cardio',
      aiRecommended: true,
    },
    {
      id: 'v2',
      title: 'Strength Training for Beginners',
      thumbnail: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '15:30',
      calories: 220,
      intensity: 'medium',
      equipment: 'minimal',
      category: 'strength',
    },
    {
      id: 'v3',
      title: 'Dynamic Stretching Routine',
      thumbnail: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '12:15',
      calories: 120,
      intensity: 'easy',
      equipment: 'none',
      category: 'mobility',
      aiRecommended: true,
    },
    {
      id: 'v4',
      title: 'Advanced Kettlebell Workout',
      thumbnail: 'https://images.unsplash.com/photo-1517344884509-240c41fa58a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '35:10',
      calories: 450,
      intensity: 'hard',
      equipment: 'minimal',
      category: 'strength',
    },
    {
      id: 'v5',
      title: 'Recovery Yoga for Athletes',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '18:20',
      calories: 150,
      intensity: 'easy',
      equipment: 'none',
      category: 'recovery',
    },
    {
      id: 'v6',
      title: 'Basketball Skills Training',
      thumbnail: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      duration: '25:45',
      calories: 280,
      intensity: 'medium',
      equipment: 'minimal',
      category: 'sport',
    },
  ]);

  // Filter videos based on selected category and filters
  const filteredVideos = videos.filter(video => {
    // Category filter
    if (activeCategory !== 'all' && video.category !== activeCategory) {
      return false;
    }

    // Time filter
    if (filters.time !== 'all') {
      const duration = parseInt(video.duration.split(':')[0]);
      if (filters.time === 'short' && duration >= 15) return false;
      if (filters.time === 'medium' && (duration < 15 || duration > 30)) return false;
      if (filters.time === 'long' && duration <= 30) return false;
    }

    // Intensity filter
    if (filters.intensity !== 'all' && video.intensity !== filters.intensity) {
      return false;
    }

    // Equipment filter
    if (filters.equipment !== 'all' && video.equipment !== filters.equipment) {
      return false;
    }

    return true;
  });

  // Function to render difficulty indicator
  const renderDifficulty = (intensity: 'easy' | 'medium' | 'hard') => {
    const colors = {
      easy: 'bg-green-500',
      medium: 'bg-yellow-500',
      hard: 'bg-glow-red',
    };

    return (
      <div className="flex items-center gap-1">
        <div className={`w-2 h-2 rounded-full ${colors[intensity]}`}></div>
        <span className="text-xs capitalize">{intensity}</span>
      </div>
    );
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold glow-text">Available Videos</h2>
          <div className="text-gray-400">
            {filteredVideos.length} videos found
          </div>
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-400">No videos match your filters</p>
            <button className="mt-4 btn-glow">Reset Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div 
                key={video.id} 
                className="glass-card overflow-hidden group hover:border-glow-green/50 hover:shadow-glow-green/20 transition-all duration-300"
              >
                <div className="relative">
                  {/* Thumbnail */}
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center border-2 border-glow-red hover:border-glow-green hover:scale-110 transition-all duration-300">
                      <Play size={28} className="text-white ml-1" />
                    </button>
                  </div>
                  
                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock size={12} />
                    {video.duration}
                  </div>
                  
                  {/* AI Recommended badge */}
                  {video.aiRecommended && (
                    <div className="absolute top-3 left-3 bg-glow-green/90 text-black px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                      <Trophy size={12} />
                      AI Pick
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                  
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Flame size={14} className="text-glow-red" />
                      <span>{video.calories} cal</span>
                    </div>
                    
                    {renderDifficulty(video.intensity)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
