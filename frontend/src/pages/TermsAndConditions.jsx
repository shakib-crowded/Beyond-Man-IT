import React, { useState } from "react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content:
        "By accessing and using our IT Solutions services, you agree to be bound by these terms and conditions. Our services include cloud infrastructure, software development, cybersecurity solutions, and IT consulting. If you do not agree with any part of these terms, you must discontinue use immediately.",
    },
    {
      id: "service",
      title: "Service Description",
      items: [
        "We provide enterprise-grade IT solutions including cloud services, custom software development, and cybersecurity.",
        "Service delivery timelines are specified in individual project agreements.",
        "Service availability is subject to planned maintenance and unforeseen circumstances.",
      ],
    },
    {
      id: "accounts",
      title: "Client Accounts",
      items: [
        "Clients must be at least 18 years old or represent a registered business entity.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "Each account holder is responsible for all activities under their account.",
        "Providing false business information may result in account termination.",
      ],
    },
    {
      id: "payments",
      title: "Payment Terms",
      items: [
        "Invoices are issued monthly or per project agreement.",
        "Payment must be received within 30 days of invoice date unless otherwise agreed.",
        "Late payments may result in service suspension.",
        "All prices are subject to applicable taxes and GST.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual Property",
      content:
        "All custom software, designs, and solutions developed for clients remain the intellectual property of the client upon full payment. Pre-existing tools, frameworks, and methodologies used remain our property. Unauthorized reproduction or distribution of our services is prohibited and may result in legal action.",
    },
    {
      id: "data",
      title: "Data Security & Privacy",
      items: [
        "We implement industry-standard security measures to protect client data.",
        "Client data is stored securely and accessed only by authorized personnel.",
        "We comply with data protection regulations including GDPR and India's data protection laws.",
        "Data breaches will be reported according to legal requirements.",
      ],
    },
    {
      id: "sla",
      title: "Service Level Agreement",
      content:
        "We guarantee 99.5% uptime for hosted services subject to maintenance windows. Support is available 24/7 for critical issues. Response times vary by severity level as outlined in your specific SLA agreement. Emergency support may incur additional charges.",
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content:
        "We are not liable for indirect, incidental, or consequential damages resulting from service use or unavailability. Our liability is limited to the amount paid for services in the preceding 12 months. Clients assume responsibility for data backups and disaster recovery planning.",
    },
    {
      id: "termination",
      title: "Termination",
      content:
        "Either party may terminate services with 30 days written notice. Immediate termination may occur for breach of terms. Upon termination, client data will be provided in standard formats within 30 days. Outstanding invoices remain payable.",
    },
    {
      id: "changes",
      title: "Changes to Services",
      content:
        "We may update our services and terms with 30 days notice. Clients will be notified of significant changes via email. Continued use after notification constitutes acceptance of changes.",
    },
    {
      id: "support",
      title: "Support & Maintenance",
      items: [
        "Technical support is available during business hours and 24/7 for critical issues.",
        "Regular maintenance windows are scheduled to ensure service stability.",
        "Software updates and security patches are applied proactively.",
        "Extended support packages are available at additional cost.",
      ],
    },
    {
      id: "law",
      title: "Governing Law",
      content:
        "These terms are governed by the laws of India. All disputes shall be resolved under the jurisdiction of Delhi courts. Any legal proceedings must be initiated within one year of the claim arising.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Beyond Man IT Solutions
          </div>
          <div className="text-sm text-slate-400 hidden sm:block">
            Terms & Conditions
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-sm font-semibold">
              Effective Date: 01/12/2025
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-black text-white mb-6 leading-tight">
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Conditions
            </span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur">
              <p className="text-slate-300 leading-relaxed text-lg">
                Welcome to{" "}
                <span className="text-white font-bold">
                  BeyondMan IT Solutions
                </span>
                ! By engaging our services, you agree to these Terms and
                Conditions for all software development, infrastructure, and IT
                consulting services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed text-sm">
                🔒 Please read these terms carefully before engaging our
                services. If you do not agree with any part, please do not
                proceed.
              </p>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="space-y-4 mb-20">
          {sections.map((section, index) => {
            const isOpen = activeSection === section.id;

            return (
              <div key={section.id} className="group">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-cyan-500/40 rounded-xl p-6 transition-all duration-300 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all">
                        <span className="text-cyan-400 font-bold">#</span>
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400/70 font-semibold">
                          Section {index + 1}
                        </div>
                        <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                    <span
                      className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 text-2xl ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▲
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-8 space-y-4 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    {section.content && (
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    )}

                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-slate-300 text-lg leading-relaxed pt-0.5">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-10 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
              <span className="text-cyan-400 text-xl">✉</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Have Questions?
              </h3>
              <p className="text-slate-300">
                Contact our legal and business teams for clarifications on our
                service terms.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:beyondman.dev"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              ✉ Contact Us →
            </a>
            <a
              href="https://agency.beyondman.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700/80 text-white font-semibold rounded-lg border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300"
            >
              Visit Website →
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-slate-700/50">
          <p className="text-slate-400 text-sm mb-2">
            © 2025{" "}
            <span className="text-white font-semibold">
              BeyondMan IT Solutions
            </span>
            . All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            These terms are governed by the laws of India. Disputes subject to
            Delhi jurisdiction.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-cyan-400/50 hover:scale-110 transition-all duration-300 text-white z-40 animate-in fade-in slide-in-from-bottom-4"
        >
          ▲
        </button>
      )}
    </div>
  );
}
