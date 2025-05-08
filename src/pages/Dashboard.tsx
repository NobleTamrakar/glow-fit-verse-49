
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { AiAssistant } from "../components/ui/AiAssistant";
import { 
  Activity, TrendingUp, BarChart2, Droplet, Moon, 
  Calendar, Award, Target, Plus, BarChart 
} from "lucide-react";
import { useState } from "react";
import { 
  LineChart, Line, AreaChart, Area, BarChart as RechartBar, 
  Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  // Mock data for charts
  const activityData = [
    { day: 'Mon', calories: 450, steps: 8200, time: 45 },
    { day: 'Tue', calories: 580, steps: 10500, time: 60 },
    { day: 'Wed', calories: 320, steps: 6000, time: 30 },
    { day: 'Thu', calories: 620, steps: 12000, time: 65 },
    { day: 'Fri', calories: 540, steps: 9800, time: 55 },
    { day: 'Sat', calories: 720, steps: 14000, time: 80 },
    { day: 'Sun', calories: 480, steps: 8500, time: 50 }
  ];
  
  const weightData = [
    { week: 1, weight: 82.5 },
    { week: 2, weight: 81.8 },
    { week: 3, weight: 81.2 },
    { week: 4, weight: 80.7 },
    { week: 5, weight: 80.0 },
    { week: 6, weight: 79.5 },
    { week: 7, weight: 78.9 },
    { week: 8, weight: 78.4 }
  ];
  
  const waterData = [
    { day: 'Mon', amount: 1.8 },
    { day: 'Tue', amount: 2.2 },
    { day: 'Wed', amount: 1.5 },
    { day: 'Thu', amount: 2.4 },
    { day: 'Fri', amount: 2.0 },
    { day: 'Sat', amount: 2.8 },
    { day: 'Sun', amount: 2.5 }
  ];
  
  const sleepData = [
    { day: 'Mon', hours: 6.5 },
    { day: 'Tue', hours: 7.2 },
    { day: 'Wed', hours: 8.0 },
    { day: 'Thu', hours: 7.5 },
    { day: 'Fri', hours: 6.8 },
    { day: 'Sat', hours: 8.5 },
    { day: 'Sun', hours: 7.8 }
  ];

  // Calculate user progress metrics
  const weeklyActivityIncrease = '12%';
  const weeklyGoalProgress = 68;
  const streakDays = 15;
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-orbitron font-bold mb-1">
              <span className="text-white">YOUR GRIND IN </span>
              <span className="text-glow-green">GRAPHS</span>
            </h1>
            <p className="text-gray-400">
              Track your progress and monitor your fitness journey
            </p>
          </div>
          
          <div className="flex mt-4 md:mt-0 bg-black/50 rounded-md border border-white/10 p-1">
            <button 
              onClick={() => setSelectedPeriod('week')}
              className={`px-4 py-2 rounded ${
                selectedPeriod === 'week' 
                  ? 'bg-glow-green/20 text-glow-green' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Week
            </button>
            <button 
              onClick={() => setSelectedPeriod('month')}
              className={`px-4 py-2 rounded ${
                selectedPeriod === 'month' 
                  ? 'bg-glow-green/20 text-glow-green' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Month
            </button>
            <button 
              onClick={() => setSelectedPeriod('year')}
              className={`px-4 py-2 rounded ${
                selectedPeriod === 'year' 
                  ? 'bg-glow-green/20 text-glow-green' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Year
            </button>
          </div>
        </div>
        
        {/* AI Summary Card */}
        <div className="glow-card p-6 mb-8 border-glow-green/50">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-glow-green/20 flex items-center justify-center mr-4">
              <Activity size={24} className="text-glow-green" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Your Progress Summary</h2>
              <p className="text-gray-400">You've improved {weeklyActivityIncrease} this week!</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-black/30 rounded-md p-4">
              <p className="text-sm text-gray-400">Weekly Activity</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">+{weeklyActivityIncrease}</span>
                <TrendingUp size={18} className="text-glow-green" />
              </div>
            </div>
            
            <div className="bg-black/30 rounded-md p-4">
              <p className="text-sm text-gray-400">Goal Progress</p>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-700 h-2 rounded-full mr-3">
                  <div 
                    className="bg-glow-green h-2 rounded-full" 
                    style={{ width: `${weeklyGoalProgress}%` }}
                  ></div>
                </div>
                <span className="font-bold">{weeklyGoalProgress}%</span>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-md p-4">
              <p className="text-sm text-gray-400">Current Streak</p>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">{streakDays} days</span>
                <Award size={18} className="text-glow-green" />
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            You're making great progress! Your activity level has increased compared to last week, 
            and you're well on your way to achieving your monthly fitness goals. Keep up the streak!
          </p>
        </div>
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Activity Chart */}
          <div className="glow-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <BarChart2 size={20} className="mr-2 text-glow-green" />
                Weekly Activity
              </h3>
              <button className="text-gray-400 hover:text-white">
                <Target size={16} />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activityData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#39FF14', borderRadius: '0.5rem' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#39FF14' }}
                  />
                  <Bar dataKey="calories" name="Calories Burned" fill="#39FF14" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Weight Trend Chart */}
          <div className="glow-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <TrendingUp size={20} className="mr-2 text-glow-green" />
                Weight Trend
              </h3>
              <button className="text-gray-400 hover:text-white">
                <Target size={16} />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weightData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="week" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#39FF14', borderRadius: '0.5rem' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#39FF14' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    name="Weight (kg)"
                    stroke="#39FF14" 
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#39FF14" }}
                    activeDot={{ r: 6, fill: "#fff", stroke: "#39FF14" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Water Intake Chart */}
          <div className="glow-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <Droplet size={20} className="mr-2 text-glow-green" />
                Water Intake
              </h3>
              <button className="text-gray-400 hover:text-white">
                <Plus size={16} />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={waterData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#39FF14', borderRadius: '0.5rem' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#39FF14' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="amount" 
                    name="Water (L)"
                    stroke="#39FF14" 
                    fill="url(#waterGradient)" 
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FF14" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#39FF14" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Sleep Chart */}
          <div className="glow-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold flex items-center">
                <Moon size={20} className="mr-2 text-glow-green" />
                Sleep Log
              </h3>
              <button className="text-gray-400 hover:text-white">
                <Plus size={16} />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={sleepData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="day" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#39FF14', borderRadius: '0.5rem' }} 
                    itemStyle={{ color: '#fff' }}
                    labelStyle={{ color: '#39FF14' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="hours" 
                    name="Sleep (hours)"
                    stroke="#39FF14" 
                    fill="url(#sleepGradient)" 
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39FF14" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#39FF14" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Goals Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-orbitron">
              <Target size={24} className="inline-block mr-2 text-glow-green" />
              Current Goals
            </h2>
            <button className="btn-glow px-4 py-2">
              <Plus size={16} className="mr-1 inline-block" /> New Goal
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glow-card p-6">
              <h3 className="text-lg font-bold mb-2">Lose 5kg</h3>
              <div className="flex items-center mb-2">
                <div className="flex-1 bg-gray-700 h-2 rounded-full mr-3">
                  <div className="bg-glow-green h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="font-bold">45%</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Target: 78kg • Current: 80.7kg</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Started: April 1</span>
                <span className="text-gray-400">Ends: July 1</span>
              </div>
            </div>
            
            <div className="glow-card p-6">
              <h3 className="text-lg font-bold mb-2">20 Workouts This Month</h3>
              <div className="flex items-center mb-2">
                <div className="flex-1 bg-gray-700 h-2 rounded-full mr-3">
                  <div className="bg-glow-green h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="font-bold">70%</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">14 of 20 workouts completed</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">16 days remaining</span>
                <span className="text-glow-green">On track</span>
              </div>
            </div>
            
            <div className="glow-card p-6">
              <h3 className="text-lg font-bold mb-2">Run 5K Under 25 Minutes</h3>
              <div className="flex items-center mb-2">
                <div className="flex-1 bg-gray-700 h-2 rounded-full mr-3">
                  <div className="bg-glow-green h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="font-bold">85%</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Current best: 25:42</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">42 seconds to goal</span>
                <span className="text-glow-green">Almost there!</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-orbitron">
              <Calendar size={24} className="inline-block mr-2 text-glow-green" />
              Upcoming Activities
            </h2>
            <button className="btn-glow px-4 py-2">View Calendar</button>
          </div>
          
          <div className="glow-card">
            <div className="p-6 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <div className="mb-1 flex items-center">
                    <span className="bg-glow-green w-2 h-2 rounded-full mr-2"></span>
                    <h3 className="font-bold">Morning HIIT Session</h3>
                  </div>
                  <p className="text-sm text-gray-400">30 min • High intensity</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Tomorrow</p>
                  <p className="text-sm text-gray-400">6:30 AM</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <div className="mb-1 flex items-center">
                    <span className="bg-glow-red w-2 h-2 rounded-full mr-2"></span>
                    <h3 className="font-bold">Virtual Yoga Class</h3>
                  </div>
                  <p className="text-sm text-gray-400">45 min • Intermediate</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Friday</p>
                  <p className="text-sm text-gray-400">7:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="mb-1 flex items-center">
                    <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                    <h3 className="font-bold">Long Run</h3>
                  </div>
                  <p className="text-sm text-gray-400">60 min • Endurance</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Saturday</p>
                  <p className="text-sm text-gray-400">8:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default Dashboard;
