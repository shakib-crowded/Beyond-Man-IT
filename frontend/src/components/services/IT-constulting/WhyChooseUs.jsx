import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const whyChooseUs = [
    "Certified IT Consultants",
    "Industry Best Practices",
    "Vendor-Neutral Advice",
    "Proven Methodologies",
    "Fortune 500 Experience",
    "Technology Agnostic",
    "Risk Mitigation",
    "Knowledge Transfer",
    "Scalable Solutions",
    "Cost-Effective Strategies",
    "24/7 Support Available",
    "Long-term Partnership",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
        <p className="text-lg text-slate-400">
          Your trusted partner for IT consulting excellence
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />

            <span className="text-slate-300 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
