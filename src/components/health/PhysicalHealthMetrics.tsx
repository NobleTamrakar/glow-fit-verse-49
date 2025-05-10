
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartPulse, Moon, Droplet } from "lucide-react";

export const PhysicalHealthMetrics = () => {
  const [heartRate, setHeartRate] = useState("--");
  const [sleepScore, setSleepScore] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [bodyFat, setBodyFat] = useState("--");
  const [muscleRatio, setMuscleRatio] = useState("--");
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching real-time data
    const timer = setTimeout(() => {
      setHeartRate("72");
      setSleepScore(78);
      setHydration(65);
      setBodyFat("18.5");
      setMuscleRatio("42.3");
      setIsDataLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Get color based on hydration level
  const getHydrationColor = (level: number) => {
    if (level < 40) return "glow-red";
    if (level < 60) return "yellow-400";
    return "glow-green";
  };

  const hydrationColor = getHydrationColor(hydration);

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HeartPulse size={20} className="text-glow-red" />
          Body & Physical Health
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Heart Rate */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Resting Heart Rate</h3>
            <HeartPulse size={18} className="text-glow-red animate-pulse" />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-glow-red">
                {isDataLoading ? (
                  <span className="flex gap-1">
                    <span className="h-2 w-2 bg-glow-red rounded-full animate-pulse"></span>
                    <span className="h-2 w-2 bg-glow-red rounded-full animate-pulse delay-100"></span>
                    <span className="h-2 w-2 bg-glow-red rounded-full animate-pulse delay-200"></span>
                  </span>
                ) : (
                  <span>{heartRate} <span className="text-sm">bpm</span></span>
                )}
              </div>
              <div className="text-xs text-gray-400 mt-1">Live from Smart Band</div>
            </div>
          </div>
        </div>

        {/* Sleep Quality */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Sleep Quality Index</h3>
            <Moon size={18} className="text-blue-400" />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
              <div 
                className="h-2.5 rounded-full bg-blue-400"
                style={{ width: `${sleepScore}%`, transition: "width 1s ease-in-out" }}
              ></div>
            </div>
            <div className="text-xl font-bold text-blue-400 mb-1">{sleepScore}/100</div>
            <div className="text-xs text-gray-400">7h 15m total sleep time</div>
          </div>
        </div>

        {/* Hydration Status */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Hydration Status</h3>
            <Droplet size={18} className={`text-${hydrationColor}`} />
          </div>
          <div className="flex justify-center">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle 
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke={hydrationColor === "glow-green" ? "#39FF14" : 
                          hydrationColor === "yellow-400" ? "#FBBF24" : "#FF3B3B"}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * hydration / 100)}
                  transform="rotate(-90 50 50)"
                  className={`drop-shadow-[0_0_5px_${
                    hydrationColor === "glow-green" ? "#39FF14" : 
                    hydrationColor === "yellow-400" ? "#FBBF24" : "#FF3B3B"
                  }]`}
                />
                <text
                  x="50%" 
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                >
                  {hydration}%
                </text>
              </svg>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">
            Drink 1.2L more water today
          </div>
        </div>

        {/* Body Composition */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-sm font-medium text-gray-200 mb-2">Body Fat %</h3>
            <div className="text-center">
              <div className="text-2xl font-bold">{bodyFat}%</div>
              <div className="text-xs text-gray-400">Normal Range</div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <h3 className="text-sm font-medium text-gray-200 mb-2">Muscle Ratio</h3>
            <div className="text-center">
              <div className="text-2xl font-bold">{muscleRatio}%</div>
              <div className="text-xs text-gray-400">Above Average</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
