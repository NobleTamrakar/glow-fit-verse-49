
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lock } from "lucide-react";
import { ThemeToggle } from '../ui/ThemeToggle';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Fitness', path: '/fitness' },
    { name: 'Nutrition', path: '/nutrition' },
    { name: 'Events', path: '/events' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Blog', path: '/blog' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="backdrop-blur-md bg-black/50 border-b border-glow-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Lock size={24} className="text-glow-green" />
            <span className="text-2xl font-bold font-orbitron text-white">
              LOCKED <span className="text-glow-green">IN</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-glow-green transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-glow-green transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="relative">
              <Link 
                to="/profile" 
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-glow-green/20 border border-glow-green/50 text-white hover:bg-glow-green/30 transition-colors"
              >
                <span>PL</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-glow-green"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in px-4 pb-4 pt-2 bg-black/90 border-b border-glow-green/20">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white hover:text-glow-green transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-white hover:text-glow-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
