const Stats = () => {
  const stats = [
    { number: "200+", label: "Team Members" },
    { number: "30+", label: "Countries" },
    { number: "4.8/5", label: "Glassdoor Rating" },
    { number: "95%", label: "Employee Satisfaction" },
  ];

  return (
    <div className="bg-slate-800/50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
