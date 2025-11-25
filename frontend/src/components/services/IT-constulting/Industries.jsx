const Industries = () => {
  const industries = [
    { name: "Healthcare", icon: "🏥", desc: "HIPAA-compliant solutions" },
    { name: "Finance", icon: "💰", desc: "Secure banking systems" },
    { name: "Retail", icon: "🛒", desc: "E-commerce optimization" },
    { name: "Manufacturing", icon: "🏭", desc: "Industry 4.0 solutions" },
    { name: "Education", icon: "🎓", desc: "EdTech platforms" },
    { name: "Government", icon: "🏛️", desc: "Public sector IT" },
    { name: "Logistics", icon: "🚚", desc: "Supply chain tech" },
    { name: "Telecommunications", icon: "📱", desc: "Network solutions" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg text-slate-400">
          Specialized consulting across diverse industry verticals
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-emerald-500 transition text-center group hover:shadow-lg hover:shadow-emerald-500/20"
          >
            <div className="text-4xl mb-3">{industry.icon}</div>
            <h4 className="font-bold text-white mb-1">{industry.name}</h4>
            <p className="text-xs text-slate-400">{industry.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
