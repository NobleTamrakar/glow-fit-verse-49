
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Battery, LightbulbOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const recoveryTips = [
  "Consume 20-30g of protein within 30 minutes post-workout.",
  "Try foam rolling for 10 minutes to reduce DOMS.",
  "Ensure 7-9 hours of quality sleep tonight.",
  "Consider an ice bath to reduce inflammation.",
  "Prioritize light mobility work over intense training today.",
  "Increase water intake by 16oz to aid recovery.",
  "Take 10 minutes for mindfulness meditation to reduce stress.",
  "Try contrast therapy (alternate hot and cold) for blood flow.",
];

export const RecoveryReadiness = () => {
  const [recoveryScore, setRecoveryScore] = useState(0);
  const [readinessLevel, setReadinessLevel] = useState<"Low" | "Medium" | "High">("Medium");
  const [tip, setTip] = useState("");

  useEffect(() => {
    // Simulate recovery score calculation
    const score = Math.floor(Math.random() * 60) + 40; // 40-100
    setRecoveryScore(score);
    
    // Set readiness level based on score
    if (score < 60) {
      setReadinessLevel("Low");
    } else if (score < 80) {
      setReadinessLevel("Medium");
    } else {
      setReadinessLevel("High");
    }
    
    // Select random recovery tip
    setTip(recoveryTips[Math.floor(Math.random() * recoveryTips.length)]);
  }, []);

  // Get color based on readiness level
  const getReadinessColor = () => {
    switch (readinessLevel) {
      case "Low": return "glow-red";
      case "Medium": return "yellow-400";
      case "High": return "glow-green";
      default: return "gray-400";
    }
  };

  const readinessColor = getReadinessColor();
  
  // Get a new recovery tip
  const refreshTip = () => {
    let newTip = tip;
    while (newTip === tip) {
      newTip = recoveryTips[Math.floor(Math.random() * recoveryTips.length)];
    }
    setTip(newTip);
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Battery size={20} className="text-blue-400" />
          Recovery & Readiness
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Recovery Score */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">AI Recovery Score</h3>
            <Activity size={18} className="text-blue-400" />
          </div>
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke={recoveryScore > 80 ? "#39FF14" : recoveryScore > 60 ? "#FBBF24" : "#FF3B3B"}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * recoveryScore / 100)}
                  className={`drop-shadow-[0_0_5px_${
                    recoveryScore > 80 ? "#39FF14" : recoveryScore > 60 ? "#FBBF24" : "#FF3B3B"
                  }]`}
                />
                <text
                  x="50%" 
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="bold"
                >
                  {recoveryScore}
                </text>
              </svg>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 mt-2">
            Based on HRV & sleep patterns
          </div>
        </div>
        
        {/* Readiness Level */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Today's Readiness Level</h3>
            <div className={`h-3 w-3 rounded-full bg-${readinessColor} animate-pulse`}></div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${readinessColor} ${readinessColor === "glow-green" ? "animate-glow-pulse" : ""}`}
                style={{ 
                  width: readinessLevel === "Low" ? "30%" : 
                         readinessLevel === "Medium" ? "65%" : "100%"
                }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className={`font-bold text-${readinessColor} text-xl`}>{readinessLevel}</span>
              <p className="text-xs text-gray-400 mt-1">Workout intensity recommendation</p>
            </div>
          </div>
        </div>
        
        {/* Recovery Tips */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-200">Recovery Tip</h3>
            <LightbulbOff size={18} className="text-yellow-400" />
          </div>
          <div className="p-3 bg-black/50 rounded border border-white/10 mt-2">
            <p className="text-sm text-gray-200 italic">"{tip}"</p>
          </div>
          <div className="mt-3 text-center">
            <Button variant="outline" size="sm" onClick={refreshTip} className="text-xs">
              Get New Tip
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
