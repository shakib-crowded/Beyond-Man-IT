const DevelopmentProcess = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We analyze your requirements and create a strategic roadmap",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "Craft intuitive UI/UX designs and interactive prototypes",
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile development with regular updates and iterations",
    },
    {
      step: "04",
      title: "Testing & QA",
      desc: "Rigorous testing to ensure quality and performance",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Smooth launch with zero downtime and monitoring",
    },
    {
      step: "06",
      title: "Support & Maintenance",
      desc: "Ongoing support, updates, and optimization",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Development Process
        </h2>
        <p className="text-lg text-slate-400">
          A proven methodology that delivers results
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

export default DevelopmentProcess;
