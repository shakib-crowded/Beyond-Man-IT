import {
  ArrowRight,
  Bug,
  CloudLightning,
  Eye,
  FileSearch,
  Network,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Assessment",
      desc: "Comprehensive evaluation of your security posture with detailed risk analysis and recommendations.",
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Penetration Testing",
      desc: "Ethical hacking services to identify vulnerabilities before malicious actors can exploit them.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Security Monitoring",
      desc: "24/7 threat detection and incident response with real-time alerts and remediation.",
    },
    {
      icon: <FileSearch className="w-8 h-8" />,
      title: "Compliance Audits",
      desc: "Ensure adherence to industry standards like ISO 27001, GDPR, HIPAA, and PCI DSS.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Security",
      desc: "Secure your infrastructure with advanced firewall, VPN, and network segmentation.",
    },
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: "Cloud Security",
      desc: "Protect cloud environments with encryption, access controls, and security automation.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Security Services
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive cybersecurity solutions to protect your business from
          all angles
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-500 transition group hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="text-red-400 mb-4 group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-400 mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-red-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all hover:text-red-300"
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
