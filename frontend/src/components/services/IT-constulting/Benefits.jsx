import { Clock, TrendingUp } from "lucide-react";
import { FaRupeeSign } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaRupeeSign className="w-12 h-12" />,
      title: "Cost Reduction",
      stat: "Up to 40%",
      desc: "Reduce IT operational costs through optimization",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Faster Delivery",
      stat: "2-3x Faster",
      desc: "Accelerate time-to-market for projects",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "ROI Increase",
      stat: "150%+",
      desc: "Average return on IT investments",
    },
  ];

  return (
    <div className="bg-slate-800/50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Measurable Business Impact
          </h2>
          <p className="text-slate-400">
            Real results from our IT consulting engagements
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-xl text-white relative overflow-hidden group hover:scale-105 transition"
            >
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                {benefit.icon}
              </div>
              <div className="relative z-10">
                <div className="mb-4">{benefit.icon}</div>
                <div className="text-3xl font-bold mb-2">{benefit.stat}</div>
                <div className="text-lg font-semibold mb-2">
                  {benefit.title}
                </div>
                <div className="text-white/80 text-sm">{benefit.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
