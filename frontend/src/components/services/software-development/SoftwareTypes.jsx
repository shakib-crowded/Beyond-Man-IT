const SoftwareTypes = () => {
  const softwareTypes = [
    { name: "Web Applications", icon: "🌐", desc: "Cloud-based web platforms" },
    {
      name: "Desktop Software",
      icon: "💻",
      desc: "Cross-platform desktop apps",
    },
    { name: "Mobile Backend", icon: "📱", desc: "APIs for mobile apps" },
    { name: "Microservices", icon: "🔧", desc: "Distributed architectures" },
    { name: "CRM Systems", icon: "👥", desc: "Customer management" },
    { name: "ERP Solutions", icon: "🏭", desc: "Enterprise resource planning" },
    { name: "E-commerce", icon: "🛒", desc: "Online shopping platforms" },
    {
      name: "Analytics Tools",
      icon: "📊",
      desc: "Data visualization software",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Types of Software We Build
        </h2>
        <p className="text-lg text-slate-400">
          Diverse software solutions across multiple domains
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {softwareTypes.map((type, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition text-center group hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="text-4xl mb-3">{type.icon}</div>
            <h4 className="font-bold text-white mb-1">{type.name}</h4>
            <p className="text-xs text-slate-400">{type.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareTypes;
