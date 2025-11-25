import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Clean Code Standards",
    "Scalable Architecture",
    "Security Best Practices",
    "API Documentation",
    "Automated Testing",
    "Code Reviews",
    "Performance Optimization",
    "Database Optimization",
    "Version Control",
    "CI/CD Pipeline",
    "Monitoring & Logging",
    "Technical Documentation",
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">What You Get</h2>
        <p className="text-lg text-slate-400">
          Quality standards we follow in every project
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-purple-500/50 transition"
          >
            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
