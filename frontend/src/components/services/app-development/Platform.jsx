import { CheckCircle } from "lucide-react";

const Platform = () => {
  const platforms = [
    {
      name: "iOS Development",
      desc: "Native apps for iPhone, iPad, Apple Watch, and Apple TV",
      features: [
        "Swift & SwiftUI",
        "App Store Optimization",
        "iOS 15+ Support",
        "Apple Guidelines",
      ],
      gradient: "from-gray-700 to-gray-900",
    },
    {
      name: "Android Development",
      desc: "Native apps for Android phones, tablets, and wearables",
      features: [
        "Kotlin & Jetpack",
        "Material Design 3",
        "Google Play Store",
        "Multi-device",
      ],
      gradient: "from-green-600 to-green-800",
    },
    {
      name: "Cross-Platform",
      desc: "Single codebase for both iOS and Android platforms",
      features: ["React Native", "Flutter", "Shared Logic", "Fast Development"],
      gradient: "from-purple-600 to-indigo-600",
    },
  ];

  <div className="bg-slate-800/50 py-20 border-y border-slate-700">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Platforms We Master
        </h2>
        <p className="text-lg text-slate-400">
          Expert development across all major mobile platforms
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {platforms.map((platform, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${platform.gradient} p-8 rounded-xl text-white relative overflow-hidden group hover:scale-105 transition`}
          >
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
              <p className="text-white/80 mb-6">{platform.desc}</p>
              <div className="space-y-2">
                {platform.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Platform;
