
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Flame, FootprintsIcon } from "lucide-react";

export const ProgressTrackers = () => {
  const [xpLevel, setXpLevel] = useState(0);
  const [streakDays, setStreakDays] = useState(0);
  const [steps, setSteps] = useState(0);
  const [workouts, setWorkouts] = useState(0);
  const [calories, setCalories] = useState(0);
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setXpLevel(67);
      setStreakDays(12);
      setSteps(8456);
      setWorkouts(4);
      setCalories(2340);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Card className="glass-card col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy size={20} className="text-yellow-400" />
          Progress Trackers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* XP Progress Bar */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Level Progress</h3>
            <div className="flex items-center">
              <Star size={16} className="text-yellow-400 mr-1" />
              <span className="text-sm font-bold">Level 12</span>
            </div>
          </div>
          
          <div className="mt-2 space-y-2">
            <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ 
                  width: `${xpLevel}%`,
                  transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <div>{xpLevel}% Complete</div>
              <div>{1200 - Math.round((xpLevel / 100) * 1200)} XP to Level 13</div>
            </div>
          </div>
        </div>
        
        {/* Streak Counter */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-500 to-red-500 p-3 rounded-lg flex items-center justify-center">
              <Flame size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{streakDays} Day Streak</h3>
              <p className="text-xs text-gray-400">Keep your momentum going!</p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div 
                    key={day}
                    className={`w-2 h-6 rounded-sm ${
                      day <= Math.min(5, streakDays % 6 || 6) 
                        ? 'bg-gradient-to-t from-amber-500 to-red-500' 
                        : 'bg-gray-700'
                    }`}
                  ></div>
                ))}
                <div 
                  className={`w-2 h-8 rounded-sm ${
                    streakDays % 6 === 0 && streakDays > 0
                      ? 'bg-gradient-to-t from-amber-500 to-red-500 animate-pulse' 
                      : 'bg-gray-700'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Weekly Summary */}
        <div className="rounded-lg border border-white/10 p-4 bg-black/30">
          <h3 className="text-sm font-medium mb-4 text-gray-200">Weekly Progress Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Steps */}
            <div className="rounded-lg bg-black/50 p-3 border border-white/5">
              <div className="flex flex-col items-center">
                <FootprintsIcon size={18} className="text-blue-400 mb-1" />
                <div className="font-bold text-xl">{steps.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Steps</div>
              </div>
            </div>
            
            {/* Workouts */}
            <div className="rounded-lg bg-black/50 p-3 border border-white/5">
              <div className="flex flex-col items-center">
                <Trophy size={18} className="text-glow-green mb-1" />
                <div className="font-bold text-xl">{workouts}</div>
                <div className="text-xs text-gray-400">Workouts</div>
              </div>
            </div>
            
            {/* Calories */}
            <div className="rounded-lg bg-black/50 p-3 border border-white/5">
              <div className="flex flex-col items-center">
                <Flame size={18} className="text-glow-red mb-1" />
                <div className="font-bold text-xl">{calories}</div>
                <div className="text-xs text-gray-400">Calories</div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="text-xs text-gray-400">Week of May 6 - May 12</div>
            <div className="text-sm mt-1 text-glow-green">+12% from last week</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
