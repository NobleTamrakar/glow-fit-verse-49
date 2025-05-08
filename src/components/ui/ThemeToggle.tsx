
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

export const ThemeToggle = () => {
  const { toast } = useToast();
  // Check for dark mode preference
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
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    toast({
      title: `Theme changed to ${!isDark ? 'dark' : 'light'} mode`,
      description: "Your preference has been saved.",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
        isDark 
          ? 'bg-secondary/30 text-gray-300 hover:text-glow-green'
          : 'bg-secondary text-gray-700 hover:text-glow-red'
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
