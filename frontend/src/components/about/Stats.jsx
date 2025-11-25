import { Award, Users, Briefcase, TrendingUp, Globe } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Briefcase, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Industry Awards" },
    { icon: Globe, value: "25+", label: "Countries Served" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 text-center group"
            >
              <div className="inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stats;
