import React, { useState } from "react";
import Hero from "../components/services/cyber-security/Hero";
import Threat from "../components/services/cyber-security/Threat";
import Services from "../components/services/cyber-security/Services";
import TechStack from "../components/services/cyber-security/TechStack";
import Certifications from "../components/services/cyber-security/Certifications";
import Features from "../components/services/cyber-security/Features";
import CTA from "../components/services/cyber-security/CTA";
import Process from "../components/services/cyber-security/Process";

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Threat Stats Section */}
      <Threat />

      {/* Services Section */}
      <Services />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Development Process */}
      <Process />

      {/* Certifications Section */}
      <Certifications />

      {/* Features */}
      <Features />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default CyberSecurity;
