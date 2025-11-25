import React, { useState } from "react";

export default function Sitemap() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const routes = [
    {
      section: "Main Pages",
      icon: "🏠",
      links: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
        { path: "/schedule-call", label: "Schedule Call" },
      ],
    },
    {
      section: "Services",
      icon: "⚙️",
      links: [
        { path: "/solutions", label: "Solutions" },
        { path: "/website-development", label: "Website Development" },
        { path: "/app-development", label: "App Development" },
        { path: "/software-development", label: "Software Development" },
        { path: "/cyber-security", label: "Cyber Security" },
        { path: "/IT-consulting", label: "IT Consulting" },
      ],
    },
    {
      section: "User Actions",
      icon: "👤",
      links: [
        { path: "/get-started", label: "Get Started" },
        { path: "/schedule-call", label: "Schedule a Call" },
        { path: "/careers", label: "Careers" },
      ],
    },
    {
      section: "Legal & Compliance",
      icon: "📋",
      links: [
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/terms-and-conditions", label: "Terms & Conditions" },
        { path: "/sitemap", label: "Sitemap" },
      ],
    },
    {
      section: "Admin",
      icon: "🔐",
      links: [
        { path: "/admin/login", label: "Admin Login" },
        { path: "/admin/dashboard", label: "Admin Dashboard (Protected)" },
      ],
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
            BeyondMan IT Solutions
          </div>
          <div className="text-sm text-slate-400 hidden sm:block">Sitemap</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl sm:text-7xl font-black text-white mb-6 leading-tight">
            Site
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              map
            </span>
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"></div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur">
            <p className="text-slate-300 leading-relaxed text-lg">
              Navigate all pages and services available on{" "}
              <span className="text-white font-bold">
                BeyondMan IT Solutions
              </span>
              . Use this comprehensive sitemap to find exactly what you're
              looking for.
            </p>
          </div>
        </div>

        {/* Sitemap Sections */}
        <div className="space-y-4 mb-20">
          {routes.map((section, index) => {
            const isExpanded = expandedSections[section.section];

            return (
              <div key={section.section} className="group">
                <button
                  onClick={() => toggleSection(section.section)}
                  className="w-full bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-cyan-500/40 rounded-xl p-6 transition-all duration-300 text-left backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all text-2xl">
                        {section.icon}
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400/70 font-semibold">
                          {section.links.length}{" "}
                          {section.links.length === 1 ? "Link" : "Links"}
                        </div>
                        <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {section.section}
                        </h2>
                      </div>
                    </div>
                    <span
                      className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 text-2xl ${
                        isExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ▲
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-8 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    <ul className="space-y-3">
                      {section.links.map((link, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex-shrink-0"></div>
                          <a
                            href={link.path}
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-lg font-medium flex items-center justify-between w-full group/link"
                          >
                            <span>{link.label}</span>
                            <span className="text-slate-500 group-hover/link:text-cyan-400 transition-colors text-sm font-mono">
                              {link.path}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {routes.reduce((acc, section) => acc + section.links.length, 0)}
            </div>
            <p className="text-slate-300">Total Pages & Routes</p>
          </div>
          <div className="bg-gradient-to-br from-blue-400/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {routes.length}
            </div>
            <p className="text-slate-300">Main Categories</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <p className="text-slate-300">Coverage</p>
          </div>
        </div>

        {/* Quick Access Card */}
        <div className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl p-10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href="/"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              🏠 Home
            </a>
            <a
              href="/get-started"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              ✅ Get Started
            </a>
            <a
              href="/solutions"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              ⚙️ Solutions
            </a>
            <a
              href="/about"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              ℹ️ About
            </a>

            <a
              href="/contact"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              💬 Contact
            </a>
            <a
              href="/schedule-call"
              className="bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/50 rounded-lg p-4 transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              📞 Schedule Call
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
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
