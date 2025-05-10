
import { useEffect, useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { MindMoodMetrics } from "../components/health/MindMoodMetrics";
import { PhysicalHealthMetrics } from "../components/health/PhysicalHealthMetrics";
import { RecoveryReadiness } from "../components/health/RecoveryReadiness"; 
import { ProgressTrackers } from "../components/health/ProgressTrackers";
import { AiAssistant } from "../components/ui/AiAssistant";
import { NovaAvatar } from "../components/health/NovaAvatar";

const Health = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of health data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Health Stack</h1>
          <p className="text-gray-400">Track your physical and mental wellness metrics</p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[60vh] place-items-center">
            <div className="col-span-full animate-pulse flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-4 border-t-glow-green border-r-transparent border-b-transparent border-l-transparent animate-spin mb-4"></div>
              <p className="text-glow-green">Loading your health data...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MindMoodMetrics />
            <PhysicalHealthMetrics />
            <RecoveryReadiness />
            <ProgressTrackers />
          </div>
        )}
      </main>
      <Footer />
      <AiAssistant />
      <NovaAvatar />
    </div>
  );
};

export default Health;
