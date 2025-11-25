const Process = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      desc: "Understand your business, challenges, and objectives",
    },
    {
      step: "02",
      title: "Strategy Development",
      desc: "Create customized IT strategy and roadmap",
    },
    {
      step: "03",
      title: "Solution Design",
      desc: "Design optimal technology architecture",
    },
    {
      step: "04",
      title: "Implementation Planning",
      desc: "Develop detailed execution plan",
    },
    {
      step: "05",
      title: "Execution Support",
      desc: "Guide implementation and change management",
    },
    {
      step: "06",
      title: "Optimization & Review",
      desc: "Continuous improvement and monitoring",
    },
  ];

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Consulting Process
          </h2>
          <p className="text-lg text-slate-400">
            A proven methodology for successful IT transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="text-5xl font-bold text-emerald-500/20 mb-4">
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
    </div>
  );
};

export default Process;
