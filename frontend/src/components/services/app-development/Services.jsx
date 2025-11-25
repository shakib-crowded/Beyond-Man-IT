import {
  ArrowRight,
  Cloud,
  MonitorSmartphone,
  Smartphone,
  Tablet,
  TrendingUp,
  Lock,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Native Mobile Apps",
      desc: "High-performance iOS and Android apps built with native technologies for optimal user experience.",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Cross-Platform Apps",
      desc: "Single codebase solutions using React Native or Flutter to reach both platforms efficiently.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Based Apps",
      desc: "Scalable applications with real-time sync, cloud storage, and serverless architecture.",
    },
    {
      icon: <Tablet className="w-8 h-8" />,
      title: "Tablet Applications",
      desc: "Optimized experiences for iPad and Android tablets with responsive layouts.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Enterprise Apps",
      desc: "Secure business applications for workforce management, CRM, and internal operations.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "App Modernization",
      desc: "Upgrade legacy apps with modern tech stack, enhanced UI/UX, and new features.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our App Development Services
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          End-to-end mobile app development solutions for every platform and use
          case
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition group hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="text-cyan-400 mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-400 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-cyan-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-cyan-300"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
