import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import type { CourseStats } from "@/data/mockCourses";

interface ImpactDashboardProps {
  stats?: CourseStats;
}

const ImpactDashboard = ({ stats }: ImpactDashboardProps) => {
  // Dynamic growth data based on course stats
  const growthPercentage = stats?.growth?.includes('%') 
    ? parseInt(stats.growth) 
    : stats?.growth?.includes('CAGR') 
      ? parseInt(stats.growth) 
      : 15;

  const sectorGrowthData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 20 + (growthPercentage * 0.5) },
    { month: "Mar", value: 30 + (growthPercentage * 0.8) },
    { month: "Apr", value: 40 + (growthPercentage * 1) },
    { month: "May", value: 55 + (growthPercentage * 1.2) },
    { month: "Jun", value: 70 + (growthPercentage * 1.3) },
    { month: "Jul", value: 85 + (growthPercentage * 1.5) },
  ];

  const aiImpactData = [
    { name: "Traditional", speed: 35 },
    { name: "AI-Assisted", speed: 95 },
  ];

  // Parse success rate from stats
  const successValue = stats?.success_rate?.includes('%') 
    ? parseInt(stats.success_rate) 
    : stats?.success_rate?.includes('High')
      ? 75
      : 50;

  const successRateData = [
    { name: "Before Course", value: 100 - successValue, color: "hsl(var(--muted-foreground))" },
    { name: "After Course", value: successValue, color: "hsl(var(--skill))" },
  ];

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Impact Dashboard</h2>
      <p className="text-foreground/40 text-sm mb-8">Real-time 2026 market projections</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sector Growth - Line Chart */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-foreground/60 mb-1 uppercase tracking-wider">Market Size</h3>
          <p className="text-2xl font-bold text-foreground mb-1">{stats?.market || "$514B"}</p>
          <p className="text-foreground/40 text-xs mb-4">{stats?.growth || "23% CAGR"} growth</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sectorGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                <YAxis tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10,10,10,0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--accent))', strokeWidth: 0, r: 3 }}
                  activeDot={{ r: 5, fill: 'hsl(var(--accent))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Impact - Bar Chart */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-foreground/60 mb-1 uppercase tracking-wider">AI Acceleration</h3>
          <p className="text-2xl font-bold text-foreground mb-1">10x Faster</p>
          <p className="text-foreground/40 text-xs mb-4">Traditional vs AI-Assisted</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={aiImpactData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                <YAxis dataKey="name" type="category" tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} width={80} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10,10,10,0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Bar dataKey="speed" fill="hsl(var(--skill))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Success Rate - Donut Chart */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-foreground/60 mb-1 uppercase tracking-wider">Success Rate</h3>
          <p className="text-2xl font-bold text-foreground mb-1">{stats?.success_rate || "84%"}</p>
          <p className="text-foreground/40 text-xs mb-4">After completing course</p>
          <div className="h-40 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={successRateData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {successRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(10,10,10,0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {successRateData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="text-xs text-foreground/50">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;
