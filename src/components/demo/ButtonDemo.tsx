
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Check, X, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ButtonDemo = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<{[key: string]: boolean}>({
    default: false,
    glow: false,
    red: false,
    success: false,
    error: false,
  });

  const handleClick = (buttonType: string) => {
    setIsLoading(prev => ({ ...prev, [buttonType]: true }));
    
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, [buttonType]: false }));
      
      // Show toast notification
      toast({
        title: `${buttonType.charAt(0).toUpperCase() + buttonType.slice(1)} action completed`,
        description: "This button action was successful.",
        duration: 3000,
      });
    }, 1500);
  };

  return (
    <div className="glass-card p-8 mb-12">
      <h2 className="text-2xl font-orbitron mb-6">
        <span className="dark:text-white text-gray-900">INTERACTIVE </span>
        <span className="text-glow-green">BUTTONS</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Primary Actions</h3>
          
          <div className="space-y-2">
            <Button 
              onClick={() => handleClick('default')}
              isLoading={isLoading.default}
              loadingText="Processing..."
            >
              Default Button
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="glow"
              onClick={() => handleClick('glow')}
              isLoading={isLoading.glow}
              loadingText="Starting..."
            >
              <Play className="w-4 h-4" />
              Start Workout
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="red" 
              onClick={() => handleClick('red')}
              isLoading={isLoading.red}
              loadingText="Canceling..."
            >
              <X className="w-4 h-4" />
              Cancel Plan
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Button States</h3>
          
          <div className="space-y-2">
            <Button 
              variant="glow"
              onClick={() => handleClick('success')}
              isLoading={isLoading.success}
            >
              <Check className="w-4 h-4" />
              Active State
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button variant="glow" disabled>
              Disabled State
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="outline"
              onClick={() => handleClick('error')}
              isLoading={isLoading.error}
            >
              Outline Button
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
          
          <div className="space-y-2">
            <Button variant="glow" size="sm">
              Small Button
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button variant="glow">
              Default Size
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button variant="glow" size="lg">
              <ArrowRight className="w-4 h-4" />
              Large Button
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Navigation Example</h3>
          <p className="text-sm text-muted-foreground mb-3">
            These buttons demonstrate routing functionality with React Router.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="glow" asChild>
              <a href="/fitness">Go to Fitness</a>
            </Button>
            <Button variant="red" asChild>
              <a href="/nutrition">Go to Nutrition</a>
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-3">Form Actions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            These buttons demonstrate form submission with loading states.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button 
              variant="glow" 
              type="submit" 
              onClick={() => handleClick('glow')}
              isLoading={isLoading.glow}
              loadingText="Submitting..."
            >
              Submit Form
            </Button>
            <Button 
              variant="outline" 
              type="reset"
            >
              Reset Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
