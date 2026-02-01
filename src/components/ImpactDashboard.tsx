import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const sectorGrowthData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 55 },
  { month: "May", value: 70 },
  { month: "Jun", value: 85 },
  { month: "Jul", value: 100 },
];

const aiImpactData = [
  { name: "Traditional", speed: 45 },
  { name: "AI-Assisted", speed: 95 },
];

const successRateData = [
  { name: "Before Course", value: 25, color: "hsl(var(--muted-foreground))" },
  { name: "After Course", value: 75, color: "hsl(var(--accent))" },
];

const ImpactDashboard = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Impact Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sector Growth - Line Chart */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-foreground/60 mb-1 uppercase tracking-wider">Sector Growth</h3>
          <p className="text-foreground/40 text-xs mb-4">Industry trend over time</p>
          <div className="h-48">
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
          <h3 className="text-sm font-semibold text-foreground/60 mb-1 uppercase tracking-wider">AI Impact</h3>
          <p className="text-foreground/40 text-xs mb-4">Speed comparison</p>
          <div className="h-48">
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
          <p className="text-foreground/40 text-xs mb-4">Before vs After course</p>
          <div className="h-48 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={successRateData}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
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
