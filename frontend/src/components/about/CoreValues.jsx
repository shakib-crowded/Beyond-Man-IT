import { Heart, Lightbulb, Rocket, Shield } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously pushing boundaries with cutting-edge technology solutions",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority, always putting clients first",
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Delivering quality that exceeds expectations every time",
    },
  ];
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Our Core{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Values
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-slate-400">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValues;
