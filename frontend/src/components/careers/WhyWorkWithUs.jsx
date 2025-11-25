import { Clock, Code, Coffee, DollarSign, Heart, Rocket } from "lucide-react";

const WhyWorkWithUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Salary",
      desc: "Industry-leading compensation packages",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Insurance",
      desc: "Comprehensive medical coverage for you and family",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      desc: "Work-life balance with flexible scheduling",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Growth",
      desc: "Clear path for advancement and promotions",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Latest Tech",
      desc: "Work with cutting-edge technologies",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Great Culture",
      desc: "Collaborative and inclusive work environment",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We invest in our people and provide an environment where you can
          thrive
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition group hover:shadow-2xl hover:shadow-orange-500/20"
          >
            <div className="text-orange-400 mb-4 group-hover:scale-110 transition">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {benefit.title}
            </h3>
            <p className="text-slate-400">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
