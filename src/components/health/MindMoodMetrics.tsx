
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Clock, Brain } from "lucide-react";
import { 
  ChartContainer, 
  ChartLegend, 
  ChartLegendContent,
  ChartTooltip, 
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const moodEmojis = ["😔", "😐", "🙂", "😊", "😁"];

// Mock data for stress vs focus chart
const weeklyData = [
  { day: "Mon", stress: 65, focus: 45 },
  { day: "Tue", stress: 59, focus: 50 },
  { day: "Wed", stress: 80, focus: 30 },
  { day: "Thu", stress: 55, focus: 60 },
  { day: "Fri", stress: 40, focus: 70 },
  { day: "Sat", stress: 35, focus: 85 },
  { day: "Sun", stress: 30, focus: 75 },
];

export const MindMoodMetrics = () => {
  const [mood, setMood] = useState(3);
  const [stressScore, setStressScore] = useState(0);
  const [focusScore, setFocusScore] = useState(0);

  useEffect(() => {
    // Simulate fetching real-time data
    const stressValue = Math.floor(Math.random() * 30) + 40; // 40-70 range
    const focusValue = Math.floor(Math.random() * 40) + 50; // 50-90 range
    
    setStressScore(stressValue);
    setFocusScore(focusValue);
  }, []);

  // Calculate colors for stress and focus
  const getStressColor = (score: number) => {
    if (score > 70) return "text-glow-red";
    if (score > 50) return "text-yellow-500";
    return "text-glow-green";
  };
  
  const getFocusColor = (score: number) => {
    if (score < 40) return "text-glow-red";
    if (score < 60) return "text-yellow-500";
    return "text-glow-green";
  };

  const chartConfig = {
    stress: {
      label: "Stress",
      color: "#FF3B3B"
    },
    focus: {
      label: "Focus",
      color: "#39FF14"
    }
  };

  return (
    <Card className="glass-card col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain size={20} className="text-glow-green" />
          Mind & Mood Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Mood Tracker */}
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-200">AI Mood Tracker</h3>
              <Smile size={18} className="text-yellow-400" />
            </div>
            <div className="flex justify-between items-center my-3">
              {moodEmojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setMood(index)}
                  className={`text-2xl transition-all ${
                    mood === index 
                      ? "transform scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
                      : "opacity-50"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <div className="text-xs text-center mt-2 text-gray-300">
              {mood === 0 && "Feeling down today"}
              {mood === 1 && "Just okay"}
              {mood === 2 && "Doing well"}
              {mood === 3 && "Feeling good!"}
              {mood === 4 && "Feeling fantastic!"}
            </div>
          </div>

          {/* Stress Score */}
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-200">Stress Score</h3>
              <Clock size={18} className="text-glow-red" />
            </div>
            <div className="flex flex-col items-center justify-center h-[80px]">
              <div className={`text-3xl font-bold ${getStressColor(stressScore)}`}>
                {stressScore}
              </div>
              <div className="text-xs text-gray-400 mt-1">Smart Band Sync</div>
            </div>
          </div>

          {/* Focus Score */}
          <div className="bg-black/30 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-200">Focus Score</h3>
              <Brain size={18} className="text-glow-green" />
            </div>
            <div className="flex flex-col items-center justify-center h-[80px]">
              <div className={`text-3xl font-bold ${getFocusColor(focusScore)}`}>
                {focusScore}
              </div>
              <div className="text-xs text-gray-400 mt-1">Based on workout & rest</div>
            </div>
          </div>
        </div>

        {/* Weekly Graph */}
        <div className="rounded-lg border border-white/10 p-4 bg-black/30">
          <h3 className="text-sm font-medium mb-4 text-gray-200">Weekly Stress vs Focus</h3>
          <div className="h-[200px]">
            <ChartContainer config={chartConfig}>
              <AreaChart data={weeklyData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF3B3B" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FF3B3B" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#39FF14" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#39FF14" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area 
                  type="monotone" 
                  dataKey="stress" 
                  stroke="#FF3B3B" 
                  fillOpacity={1} 
                  fill="url(#colorStress)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="focus" 
                  stroke="#39FF14" 
                  fillOpacity={1} 
                  fill="url(#colorFocus)" 
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
