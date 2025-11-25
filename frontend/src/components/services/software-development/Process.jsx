const Process = () => {
  const process = [
    {
      step: "01",
      title: "Requirements Gathering",
      desc: "Define scope, features, and technical specifications",
    },
    {
      step: "02",
      title: "Architecture Design",
      desc: "Create system architecture and technology stack",
    },
    {
      step: "03",
      title: "Development Sprints",
      desc: "Agile development with regular demos and feedback",
    },
    {
      step: "04",
      title: "Quality Assurance",
      desc: "Automated and manual testing across all scenarios",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Production release with monitoring and rollback plans",
    },
    {
      step: "06",
      title: "Support & Evolution",
      desc: "Maintenance, updates, and continuous improvement",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Development Process
        </h2>
        <p className="text-lg text-slate-400">
          A structured approach from idea to production
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {process.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="text-5xl font-bold text-purple-500/20 mb-4">
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
