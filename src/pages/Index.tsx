
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { FitnessCards } from "../components/home/FitnessCards";
import { QuickAccess } from "../components/home/QuickAccess";
import { AiAssistant } from "../components/ui/AiAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FitnessCards />
        <QuickAccess />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default Index;
