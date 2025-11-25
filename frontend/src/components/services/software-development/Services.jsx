import {
  ArrowRight,
  Cloud,
  Database,
  Layers,
  Monitor,
  Puzzle,
  Settings,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Custom Software Development",
      desc: "Tailored software solutions built from scratch to meet your unique business requirements.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "SaaS Development",
      desc: "Build scalable Software-as-a-Service platforms with multi-tenancy and subscription models.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Enterprise Software",
      desc: "Robust enterprise applications for large-scale operations and complex workflows.",
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "API Development",
      desc: "RESTful and GraphQL APIs for seamless integration and data exchange.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      desc: "Optimized database architecture for performance, scalability, and reliability.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Software Maintenance",
      desc: "Ongoing support, bug fixes, updates, and feature enhancements.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Software Development Services
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          End-to-end software development from concept to deployment and beyond
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition group hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="text-purple-400 mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-400 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-purple-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-purple-300"
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
