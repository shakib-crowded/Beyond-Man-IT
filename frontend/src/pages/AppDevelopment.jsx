import React, { useState } from "react";
import Hero from "../components/services/app-development/Hero";
import Stats from "../components/services/app-development/Stats";
import Services from "../components/services/app-development/Services";
import Platform from "../components/services/app-development/Platform";
import TechStack from "../components/services/app-development/TechStack";
import Process from "../components/services/app-development/Process";
import Features from "../components/services/app-development/Features";
import CTA from "../components/services/app-development/CTA";

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      {/* <Stats /> */}

      {/* Services Section */}
      <Services />

      {/* Platforms Section */}
      <Platform />

      {/* Tech Stack Section */}
      <TechStack />
      {/* Development Process */}

      <Process />
      {/* Features */}
      <Features />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default AppDevelopment;
