
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

// AI Bot messages for demo
const botMessages = [
  "Welcome to GlowFitVerse! I'm Nova, your AI fitness companion.",
  "Remember to stay hydrated during your workouts today.",
  "You're making great progress! Keep pushing your limits.",
  "Try adding some HIIT to your routine for maximum calorie burn.",
  "Rest days are important too. Listen to your body.",
  "Your current streak is 5 days. Don't break it now!",
  "Protein intake is crucial after strength training.",
  "There's a new yoga session available. Want to try it?",
  "Your sleep patterns affect your fitness goals. Aim for 7-8 hours.",
  "Let me help you build a custom workout plan. Just ask!"
];

export const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(botMessages[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [botMood, setBotMood] = useState<'neutral' | 'happy' | 'sad'>('neutral');

  // Change bot message periodically
  useEffect(() => {
    const messageInterval = setInterval(() => {
      if (!isOpen) {
        const randomIndex = Math.floor(Math.random() * botMessages.length);
        setIsTyping(true);
        
        // Random mood for bot expressions
        const moods: Array<'neutral' | 'happy' | 'sad'> = ['neutral', 'happy', 'sad'];
        setBotMood(moods[Math.floor(Math.random() * moods.length)]);
        
        setTimeout(() => {
          setCurrentMessage(botMessages[randomIndex]);
          setIsTyping(false);
        }, 1000);
      }
    }, 15000);
    
    return () => clearInterval(messageInterval);
  }, [isOpen]);

  const renderBotFace = () => {
    // Simple ASCII-style face expressions for the bot
    switch (botMood) {
      case 'happy':
        return (
          <div className="text-glow-green text-2xl font-bold">
            ^◡^
          </div>
        );
      case 'sad':
        return (
          <div className="text-glow-red text-2xl font-bold">
            ಥ_ಥ
          </div>
        );
      default:
        return (
          <div className="text-glow-green text-2xl font-bold">
            ◕_◕
          </div>
        );
    }
  };

  return (
    <>
      {/* Fixed AI assistant button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
            isOpen 
              ? 'bg-glow-red text-white rotate-90'
              : 'bg-black border-2 border-glow-green text-glow-green hover:shadow-[0_0_15px_#39FF14]'
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
      
      {/* AI assistant popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-black/90 backdrop-blur-md border border-glow-green/50 rounded-lg shadow-lg z-40 animate-fade-in">
          <div className="p-4 border-b border-glow-green/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border-2 border-glow-green flex items-center justify-center overflow-hidden animate-float">
              {renderBotFace()}
            </div>
            <div>
              <h3 className="font-orbitron font-bold text-white">NOVA</h3>
              <p className="text-xs text-gray-400">AI Fitness Assistant</p>
            </div>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {/* AI Message */}
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-black border-2 border-glow-green flex items-center justify-center text-xs">
                  AI
                </div>
                <div className="bg-glow-green/10 border border-glow-green/30 rounded-lg p-3 max-w-[80%]">
                  <p className="text-white text-sm">{isTyping ? "..." : currentMessage}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-glow-green/30">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask your AI assistant..."
                className="flex-1 bg-black/50 border border-glow-green/30 text-white rounded px-3 py-2 text-sm"
              />
              <button className="btn-glow text-sm py-2">Send</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Minimized message bubble */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 max-w-xs bg-black/90 backdrop-blur-md border border-glow-green/50 rounded-lg p-3 text-white text-sm animate-fade-in">
          <p className="text-xs">{isTyping ? "..." : currentMessage}</p>
        </div>
      )}
    </>
  );
};
