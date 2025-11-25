import React, { useState } from "react";
import {
  Code,
  Smartphone,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { HashLink } from "react-router-hash-link";
import CTA from "./CTA";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Website Development",
      description:
        "Create stunning, responsive websites that drive engagement and conversions.",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "CMS Integration",
        "SEO Optimization",
      ],
      color: "from-blue-500 to-cyan-500",
      path: "/website-development",
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Build powerful native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS & Android",
        "Cross-platform Development",
        "UI/UX Design",
        "App Maintenance",
      ],
      color: "from-purple-500 to-pink-500",
      path: "/app-development",
    },
    {
      id: 3,
      icon: Shield,
      title: "Cybersecurity & IT Consulting",
      description:
        "Protect your business with comprehensive security solutions and expert IT guidance.",
      features: [
        "Security Audits",
        "Risk Assessment",
        "IT Strategy Planning",
        "Compliance Management",
      ],
      color: "from-red-500 to-orange-500",
      path: "/cyber-security",
    },
    {
      id: 4,
      icon: Cpu,
      title: "Software Development",
      description:
        "Develop custom software solutions tailored to your unique business needs.",
      features: [
        "Enterprise Software",
        "API Development",
        "Cloud Solutions",
        "System Integration",
      ],
      color: "from-green-500 to-emerald-500",
      path: "/software-development",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-full mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Comprehensive IT solutions designed to transform your business and
            drive digital innovation
          </p>
        </div>

        {/* Services Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-full mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 w-full h-full"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative mb-4 sm:mb-6 inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.color} transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}

                  <HashLink
                    to={service.path}
                    className={`cursor-pointer flex items-center text-xs sm:text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    Learn More
                    <ArrowRight
                      className={`w-3 h-3 sm:w-4 sm:h-4 ml-2 bg-gradient-to-r ${service.color} text-white rounded-full p-0.5`}
                    />
                  </HashLink>
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${service.color} opacity-10 blur-3xl rounded-full transform translate-x-12 -translate-y-12 sm:translate-x-16 sm:-translate-y-16 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <CTA />
      </div>
    </section>
  );
};

export default Services;
