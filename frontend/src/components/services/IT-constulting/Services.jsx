import {
  ArrowRight,
  BarChart3,
  Cog,
  Cpu,
  Globe2,
  Target,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "IT Strategy & Planning",
      desc: "Develop comprehensive IT strategies aligned with your business goals and objectives.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Technology Consulting",
      desc: "Expert guidance on technology selection, implementation, and optimization.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      desc: "Transform data into actionable insights for better decision-making.",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Digital Transformation",
      desc: "Guide your organization through the digital transformation journey.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Infrastructure Consulting",
      desc: "Design and optimize IT infrastructure for performance and scalability.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "IT Training & Support",
      desc: "Empower your team with knowledge and ongoing technical support.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Consulting Services
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive IT consulting solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition group hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div className="text-emerald-400 mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-400 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-emerald-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-emerald-300"
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
