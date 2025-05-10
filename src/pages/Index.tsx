
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/home/Hero";
import { FitnessCards } from "../components/home/FitnessCards";
import { QuickAccess } from "../components/home/QuickAccess";
import { AiAssistant } from "../components/ui/AiAssistant";
import { ButtonDemo } from "../components/demo/ButtonDemo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <ButtonDemo />
        </div>
        <FitnessCards />
        <QuickAccess />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default Index;
