import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Push Notifications",
    "In-App Purchases",
    "Offline Mode Support",
    "Social Media Integration",
    "Real-time Chat",
    "Location Services",
    "Payment Gateway",
    "Analytics Dashboard",
    "Biometric Authentication",
    "Cloud Synchronization",
    "Multi-language Support",
    "Dark Mode",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Features We Build
        </h2>
        <p className="text-lg text-slate-400">
          Comprehensive features to make your app stand out
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition"
          >
            <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
