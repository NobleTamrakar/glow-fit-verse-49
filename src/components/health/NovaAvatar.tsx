
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const NovaAvatar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Show tooltip after a delay when component mounts
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    
    // Hide tooltip after some time
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    toast({
      title: "Nova activated!",
      description: "Redirecting to quick-starts...",
      duration: 2000,
    });
    
    // Redirect to home with anchor
    setTimeout(() => {
      navigate('/#quickstarts');
    }, 500);
  };
  
  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Tooltip */}
      {(showTooltip || isHovering) && (
        <div className="absolute bottom-full right-0 mb-2 p-3 bg-black/80 backdrop-blur-md rounded-lg border border-glow-green/30 text-white text-sm max-w-[200px] animate-fade-in">
          Hi, I'm Nova — tap me for quick-starts!
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-black/80 border-r border-b border-glow-green/30"></div>
        </div>
      )}
      
      {/* Avatar */}
      <button
        className={`relative flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 
          ${isHovering ? 'border-glow-green animate-glow-pulse' : 'border-glow-green/50'} 
          transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-glow-green/40`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleClick}
      >
        {/* Glowing circle behind the avatar */}
        <div 
          className={`absolute inset-1 rounded-full bg-glow-green/5 blur-md 
            ${isHovering ? 'opacity-100' : 'opacity-40'} 
            transition-opacity duration-300`}
        ></div>
        
        {/* Bot icon */}
        <Bot 
          size={24} 
          className={`relative z-10 ${isHovering ? 'text-glow-green' : 'text-glow-green/80'} transition-colors duration-300`}
        />
        
        {/* Orbit effect */}
        <div className={`absolute inset-0 rounded-full border border-glow-green/30 
          ${isHovering ? 'animate-spin-slow opacity-100' : 'opacity-0'} 
          transition-opacity duration-300`} 
          style={{animationDuration: '10s'}}
        ></div>
      </button>
    </div>
  );
};
