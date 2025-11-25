import React, { useState } from "react";
import { ChevronUp, Mail, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Beyond Man IT
          </div>
          <div className="text-sm text-slate-400">Privacy Policy</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Policy
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-6">
            Last updated:{" "}
            <span className="text-cyan-400 font-semibold">
              February 01, 2025
            </span>
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
          <p className="text-slate-300 text-lg leading-relaxed">
            This Privacy Policy describes our policies and procedures on the
            collection, use and disclosure of your information when you use the
            Service. We use your personal data to provide and improve the
            Service.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-4">
          {/* Section 1: Interpretation and Definitions */}
          <div className="group">
            <button
              onClick={() => toggleSection("section1")}
              className="w-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 text-left"
            >
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                Interpretation and Definitions
                <ChevronUp
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    activeSection === "section1" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
            </button>
            {activeSection === "section1" && (
              <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Interpretation
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                    Key Definitions
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        term: "Account",
                        def: "A unique account created for you to access our Service or parts of our Service.",
                      },
                      {
                        term: "Company",
                        def: "Beyond Man IT - referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement.",
                      },
                      {
                        term: "Personal Data",
                        def: "Any information that relates to an identified or identifiable individual.",
                      },
                      {
                        term: "Service",
                        def: "The Website and all associated platforms.",
                      },
                      { term: "Country", def: "Delhi, India" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-cyan-500/20 transition-colors"
                      >
                        <p className="font-semibold text-cyan-400 mb-1">
                          {item.term}
                        </p>
                        <p className="text-slate-300 text-sm">{item.def}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Data Collection */}
          <div className="group">
            <button
              onClick={() => toggleSection("section2")}
              className="w-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 text-left"
            >
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                Collecting and Using Your Personal Data
                <ChevronUp
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    activeSection === "section2" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
            </button>
            {activeSection === "section2" && (
              <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                    Types of Data Collected
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <p className="font-semibold text-white mb-2">
                        Personal Data
                      </p>
                      <p className="text-slate-300 text-sm mb-3">
                        Personally identifiable information may include:
                      </p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          Email address
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          First name and last name
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          Usage Data
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <p className="font-semibold text-white mb-2">
                        Usage Data
                      </p>
                      <p className="text-slate-300 text-sm">
                        Collected automatically when using the Service including
                        device information, browser details, IP address, and
                        diagnostic data.
                      </p>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                      <p className="font-semibold text-white mb-2">
                        Cookies & Tracking
                      </p>
                      <p className="text-slate-300 text-sm">
                        We use cookies and tracking technologies to monitor
                        activity and improve our Service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Use of Data */}
          <div className="group">
            <button
              onClick={() => toggleSection("section3")}
              className="w-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 text-left"
            >
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                Use of Your Personal Data
                <ChevronUp
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    activeSection === "section3" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
            </button>
            {activeSection === "section3" && (
              <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Provide and maintain our Service",
                    "Manage your Account",
                    "Performance of contracts",
                    "Contact you with updates",
                    "Provide news and offers",
                    "Manage your requests",
                    "Business transfers",
                    "Data analysis and trends",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">
                            {idx + 1}
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Data Security & Rights */}
          <div className="group">
            <button
              onClick={() => toggleSection("section4")}
              className="w-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 text-left"
            >
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                Security & Your Rights
                <ChevronUp
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    activeSection === "section4" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
            </button>
            {activeSection === "section4" && (
              <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Security of Your Personal Data
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    The security of your Personal Data is important to us. While
                    we strive to use commercially acceptable means to protect
                    your Personal Data, we cannot guarantee its absolute
                    security as no method of transmission over the Internet is
                    100% secure.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Your Rights
                  </h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>
                        Right to delete or request deletion of Personal Data
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>
                        Right to update, amend, or delete your information
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>
                        Right to request access to your personal information
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>Right to correct any inaccurate data</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    Children's Privacy
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If you are a parent or
                    guardian and aware your child has provided us with Personal
                    Data, please contact us.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Contact */}
          <div className="group">
            <button
              onClick={() => toggleSection("section5")}
              className="w-full bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/30 rounded-xl p-6 transition-all duration-300 text-left"
            >
              <h2 className="text-xl font-bold text-white flex items-center justify-between">
                Contact Us
                <ChevronUp
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    activeSection === "section5" ? "rotate-180" : "rotate-0"
                  }`}
                />
              </h2>
            </button>
            {activeSection === "section5" && (
              <div className="bg-slate-800/30 border border-slate-700/50 border-t-0 rounded-b-xl p-6">
                <p className="text-slate-300 mb-6">
                  If you have any questions about this Privacy Policy, you can
                  contact us:
                </p>
                <div className="space-y-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-cyan-500/20 transition-colors flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a
                        href="mailto:beyondman.dev@gmail.com"
                        className="text-white font-semibold hover:text-cyan-400 transition-colors"
                      >
                        beyondman.dev@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 hover:border-cyan-500/20 transition-colors flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <a
                        href="tel:8287757460"
                        className="text-white font-semibold hover:text-cyan-400 transition-colors"
                      >
                        +91 8287757460
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-xl">
          <p className="text-slate-300 text-sm leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            effective when posted on this page. We will notify you of any
            significant changes via email or a prominent notice on our Service.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-white"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
