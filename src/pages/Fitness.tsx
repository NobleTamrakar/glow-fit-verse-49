
import { useState } from 'react';
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FitnessHero } from "../components/fitness/FitnessHero";
import { VideoGrid } from "../components/fitness/VideoGrid";
import { FitnessFilters } from "../components/fitness/FitnessFilters";
import { AiAssistant } from "../components/ui/AiAssistant";
import { AIWorkoutTracker } from "../components/fitness/AIWorkoutTracker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Play, Calendar } from "lucide-react";

const Fitness = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filters, setFilters] = useState({
    time: "all",
    intensity: "all",
    equipment: "all",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <FitnessHero />
        
        {/* AI Feature Tabs */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-orbitron mb-8 text-center">
            <span className="dark:text-white text-gray-900">AI-POWERED </span>
            <span className="text-glow-green">FITNESS</span>
          </h2>
          
          <Tabs defaultValue="tracker" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="tracker" className="flex items-center gap-2">
                <Dumbbell size={16} />
                <span className="hidden sm:inline">Workout Tracker</span>
                <span className="inline sm:hidden">Track</span>
              </TabsTrigger>
              <TabsTrigger value="generator" className="flex items-center gap-2">
                <Play size={16} />
                <span className="hidden sm:inline">Workout Generator</span>
                <span className="inline sm:hidden">Generate</span>
              </TabsTrigger>
              <TabsTrigger value="planner" className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="hidden sm:inline">Weekly Planner</span>
                <span className="inline sm:hidden">Plan</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="tracker" className="space-y-4">
              <AIWorkoutTracker />
            </TabsContent>
            
            <TabsContent value="generator" className="space-y-4">
              <div className="glass-card p-8 text-center">
                <h3 className="text-xl font-bold mb-4">AI Workout Generator</h3>
                <p className="text-gray-400 mb-6">Tell the AI what you want to focus on, how much time you have, and what equipment you have access to.</p>
                <div className="max-w-lg mx-auto">
                  <textarea 
                    className="w-full bg-black/30 border border-border rounded-md px-4 py-3 mb-4"
                    rows={3}
                    placeholder="Example: Create a 20-minute HIIT workout focused on core strength that I can do at home with no equipment"
                  ></textarea>
                  <button className="btn-glow">Generate Workout</button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="planner" className="space-y-4">
              <div className="glass-card p-8 text-center">
                <h3 className="text-xl font-bold mb-4">AI Weekly Planner</h3>
                <p className="text-gray-400 mb-6">Let the AI create a personalized weekly workout schedule based on your goals and availability.</p>
                <div className="max-w-lg mx-auto">
                  <div className="mb-4 flex flex-wrap gap-3 justify-center">
                    <button className="px-4 py-2 rounded-full border border-glow-green bg-glow-green/10 text-sm">Gain Muscle</button>
                    <button className="px-4 py-2 rounded-full border border-border bg-black/10 text-sm">Lose Weight</button>
                    <button className="px-4 py-2 rounded-full border border-border bg-black/10 text-sm">Improve Endurance</button>
                    <button className="px-4 py-2 rounded-full border border-border bg-black/10 text-sm">Increase Flexibility</button>
                  </div>
                  <button className="btn-glow">Create Weekly Plan</button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <FitnessFilters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filters={filters}
          setFilters={setFilters}
        />
        <VideoGrid 
          activeCategory={activeCategory} 
          filters={filters} 
        />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default Fitness;
