const Process = () => {
  const process = [
    {
      step: "01",
      title: "Risk Assessment",
      desc: "Identify assets, threats, and vulnerabilities in your environment",
    },
    {
      step: "02",
      title: "Security Strategy",
      desc: "Develop comprehensive security policies and procedures",
    },
    {
      step: "03",
      title: "Implementation",
      desc: "Deploy security controls and monitoring solutions",
    },
    {
      step: "04",
      title: "Testing & Validation",
      desc: "Conduct penetration tests and security audits",
    },
    {
      step: "05",
      title: "Monitoring",
      desc: "24/7 threat detection and incident response",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      desc: "Regular updates and security posture enhancement",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Security Implementation Process
        </h2>
        <p className="text-lg text-slate-400">
          A systematic approach to building robust security defenses
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {process.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition hover:shadow-2xl hover:shadow-red-500/10">
              <div className="text-5xl font-bold text-red-500/20 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
