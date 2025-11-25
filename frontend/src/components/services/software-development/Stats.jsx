const Stats = () => {
  const stats = [
    { number: "1000+", label: "Projects Delivered" },
    { number: "50+", label: "Expert Developers" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <div className="bg-slate-800/50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
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
