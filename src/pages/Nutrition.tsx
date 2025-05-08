
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AiAssistant } from "../components/ui/AiAssistant";
import { Utensils, Calculator, PlusCircle, Activity } from "lucide-react";
import { useState } from "react";

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('weight-loss');
  
  const mealPlans = {
    'weight-loss': [
      { name: 'Lean Protein Breakfast', calories: 320, protein: 25, carbs: 15, fats: 12 },
      { name: 'Green Smoothie Snack', calories: 180, protein: 5, carbs: 20, fats: 5 },
      { name: 'Grilled Chicken Salad', calories: 350, protein: 30, carbs: 12, fats: 10 },
      { name: 'Protein Bar', calories: 220, protein: 15, carbs: 22, fats: 8 },
      { name: 'Baked Salmon with Veggies', calories: 420, protein: 32, carbs: 25, fats: 15 }
    ],
    'muscle-gain': [
      { name: 'Protein Oats with Banana', calories: 520, protein: 35, carbs: 60, fats: 12 },
      { name: 'Greek Yogurt with Berries', calories: 280, protein: 20, carbs: 30, fats: 8 },
      { name: 'Chicken Rice Bowl', calories: 650, protein: 45, carbs: 70, fats: 15 },
      { name: 'Protein Shake', calories: 320, protein: 30, carbs: 25, fats: 5 },
      { name: 'Steak with Sweet Potato', calories: 720, protein: 50, carbs: 65, fats: 25 }
    ],
    'athletic-performance': [
      { name: 'Avocado Toast with Eggs', calories: 420, protein: 22, carbs: 35, fats: 18 },
      { name: 'Trail Mix', calories: 240, protein: 8, carbs: 26, fats: 12 },
      { name: 'Mediterranean Bowl', calories: 580, protein: 28, carbs: 65, fats: 20 },
      { name: 'Banana with Nut Butter', calories: 250, protein: 8, carbs: 30, fats: 12 },
      { name: 'Fish Tacos', calories: 480, protein: 32, carbs: 45, fats: 15 }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-3">
            <span className="text-white">FUEL THE </span>
            <span className="text-glow-green">MACHINE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Optimize your nutrition with customized meal plans based on your goals
            and preferences. Track your intake and fuel your performance.
          </p>
        </div>

        {/* Meal Plan Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-2xl font-orbitron mb-4 sm:mb-0">
              <Utensils className="inline-block mr-2 text-glow-green" size={24} />
              Meal Plans
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setActiveTab('weight-loss')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'weight-loss' 
                    ? 'bg-glow-green/20 text-glow-green border border-glow-green/50' 
                    : 'bg-secondary/50 text-gray-300 hover:bg-secondary/70'
                }`}
              >
                Weight Loss
              </button>
              <button 
                onClick={() => setActiveTab('muscle-gain')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'muscle-gain' 
                    ? 'bg-glow-green/20 text-glow-green border border-glow-green/50' 
                    : 'bg-secondary/50 text-gray-300 hover:bg-secondary/70'
                }`}
              >
                Muscle Gain
              </button>
              <button 
                onClick={() => setActiveTab('athletic-performance')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'athletic-performance' 
                    ? 'bg-glow-green/20 text-glow-green border border-glow-green/50' 
                    : 'bg-secondary/50 text-gray-300 hover:bg-secondary/70'
                }`}
              >
                Athletic
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealPlans[activeTab as keyof typeof mealPlans].map((meal, index) => (
              <div 
                key={index} 
                className="glow-card p-6 group hover:border-glow-green transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-black/30 p-2 rounded-md">
                    <p className="text-xs text-gray-400">Calories</p>
                    <p className="text-lg font-bold">{meal.calories}</p>
                  </div>
                  <div className="bg-black/30 p-2 rounded-md">
                    <p className="text-xs text-gray-400">Protein</p>
                    <p className="text-lg font-bold">{meal.protein}g</p>
                  </div>
                  <div className="bg-black/30 p-2 rounded-md">
                    <p className="text-xs text-gray-400">Carbs</p>
                    <p className="text-lg font-bold">{meal.carbs}g</p>
                  </div>
                  <div className="bg-black/30 p-2 rounded-md">
                    <p className="text-xs text-gray-400">Fats</p>
                    <p className="text-lg font-bold">{meal.fats}g</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="text-sm text-gray-300 hover:text-white">Edit</button>
                  <button className="text-sm text-gray-300 hover:text-white">Details</button>
                </div>
              </div>
            ))}
            <div className="glow-card flex items-center justify-center p-6 cursor-pointer hover:border-glow-green">
              <div className="text-center">
                <PlusCircle size={40} className="mx-auto mb-2 text-glow-green opacity-70" />
                <p className="text-gray-400">Add Custom Meal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calorie Calculator Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-orbitron mb-6">
            <Calculator className="inline-block mr-2 text-glow-green" size={24} />
            Calorie Calculator
          </h2>
          
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Age</label>
                  <input type="number" className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Gender</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Height (cm)</label>
                  <input type="number" className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2" />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Weight (kg)</label>
                  <input type="number" className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Activity Level</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2">
                    <option>Sedentary</option>
                    <option>Lightly Active</option>
                    <option>Moderately Active</option>
                    <option>Very Active</option>
                    <option>Extremely Active</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-1 text-gray-400">Goal</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-md px-3 py-2">
                    <option>Lose Weight</option>
                    <option>Maintain Weight</option>
                    <option>Gain Weight</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button className="btn-glow px-8 py-3">Calculate</button>
            </div>
            <div className="mt-6 p-4 bg-glow-green/5 border border-glow-green/30 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Daily Calories Needed:</p>
                  <p className="text-3xl font-bold text-white">2,340</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Protein Target:</p>
                  <p className="text-xl font-bold text-white">140g</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Carbs Target:</p>
                  <p className="text-xl font-bold text-white">250g</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Fats Target:</p>
                  <p className="text-xl font-bold text-white">65g</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-orbitron">
              <Activity className="inline-block mr-2 text-glow-green" size={24} />
              Food Tracker
            </h2>
            <div>
              <button className="btn-red mr-3">
                <PlusCircle size={16} className="mr-1 inline-block" /> Track Intake
              </button>
              <button className="btn-glow">
                <PlusCircle size={16} className="mr-1 inline-block" /> Add Meal
              </button>
            </div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <p className="text-gray-400 mb-4">Track your daily food intake and monitor your nutrition goals</p>
            <button className="btn-glow">Start Tracking Today</button>
          </div>
        </div>
      </main>
      
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default Nutrition;
