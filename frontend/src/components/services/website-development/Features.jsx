import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Responsive & Mobile-First Design",
    "SEO Optimized Architecture",
    "High Performance & Fast Loading",
    "Secure & GDPR Compliant",
    "Scalable Infrastructure",
    "Cross-Browser Compatible",
    "CI/CD Integration",
    "Analytics & Monitoring",
  ];
  return (
    <div className="bg-gradient-to-br from-slate-950 to-slate-900 py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What You Get</h2>
          <p className="text-lg text-slate-400">
            Every project includes these essential features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700"
            >
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
