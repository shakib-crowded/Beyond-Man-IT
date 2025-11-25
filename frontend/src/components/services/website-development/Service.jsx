import {
  ArrowRight,
  Database,
  Globe,
  Layers,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Custom Web Applications",
      desc: "Tailored web solutions built to match your unique business requirements and workflows.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Progressive Web Apps",
      desc: "Fast, reliable, and engaging web apps that work offline and feel like native apps.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Development",
      desc: "RESTful and GraphQL APIs designed for scalability and seamless integration.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "E-commerce Solutions",
      desc: "Full-featured online stores with payment gateways and inventory management.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Portals",
      desc: "Secure, scalable portals for internal operations and customer engagement.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Cloud Migration",
      desc: "Seamless migration of legacy systems to modern cloud infrastructure.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services
          </span>{" "}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to drive your
          business forward
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

export default Service;
