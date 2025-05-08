
import { useState } from 'react';
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FitnessHero } from "../components/fitness/FitnessHero";
import { VideoGrid } from "../components/fitness/VideoGrid";
import { FitnessFilters } from "../components/fitness/FitnessFilters";
import { AiAssistant } from "../components/ui/AiAssistant";

const Fitness = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filters, setFilters] = useState({
    time: "all",
    intensity: "all",
    equipment: "all",
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <FitnessHero />
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
