const Process = () => {
  const process = [
    {
      step: "01",
      title: "Ideation & Strategy",
      desc: "Define app goals, target audience, and competitive analysis",
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Create wireframes, prototypes, and pixel-perfect designs",
    },
    {
      step: "03",
      title: "Development",
      desc: "Sprint-based agile development with regular demos",
    },
    {
      step: "04",
      title: "Testing & QA",
      desc: "Automated and manual testing across devices and OS versions",
    },
    {
      step: "05",
      title: "App Store Launch",
      desc: "Submit to App Store and Google Play with ASO optimization",
    },
    {
      step: "06",
      title: "Post-Launch Support",
      desc: "Monitoring, updates, bug fixes, and feature enhancements",
    },
  ];
  <div className="bg-slate-800/50 py-20 border-y border-slate-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Development Process
        </h2>
        <p className="text-lg text-slate-400">
          A streamlined approach from concept to app store launch
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {process.map((item, idx) => (
          <div key={idx} className="relative">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="text-5xl font-bold text-cyan-500/20 mb-4">
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
  </div>;
};

export default Process;
