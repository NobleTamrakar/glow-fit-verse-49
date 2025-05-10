
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const ThemeToggle = () => {
  const { toast } = useToast();
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode
    return true;
  });

  useEffect(() => {
    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    toast({
      title: `Theme changed to ${newIsDark ? 'dark' : 'light'} mode`,
      description: "Your preference has been saved.",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
        isDark 
          ? 'bg-secondary/30 text-gray-300 hover:text-glow-green hover:bg-secondary/50'
          : 'bg-secondary/80 text-gray-700 hover:text-glow-red/90 hover:bg-secondary'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
