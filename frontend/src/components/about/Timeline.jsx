const TimeLine = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences",
    },
    {
      year: "2020",
      title: "100+ Clients",
      description: "Reached significant milestone in client partnerships",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in 5 countries across 3 continents",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as top IT solutions provider",
    },
  ];
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Journey
        </span>
      </h3>
      <div className="max-w-4xl mx-auto">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex gap-4 sm:gap-6 mb-8 last:mb-0">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0">
                {milestone.year}
              </div>
              {index !== milestones.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 mt-2"></div>
              )}
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-700 flex-1 mb-8">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                {milestone.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-400">
                {milestone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
