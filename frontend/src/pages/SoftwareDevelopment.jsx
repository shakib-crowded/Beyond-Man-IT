import Hero from "../components/services/software-development/Hero";
import Stats from "../components/services/software-development/Stats";
import Services from "../components/services/software-development/Services";
import Methodologies from "../components/services/software-development/Methodologies";
import SoftwareTypes from "../components/services/software-development/SoftwareTypes";
import TechStack from "../components/services/software-development/TechStack";
import Process from "../components/services/software-development/Process";
import Project from "../components/services/software-development/Project";
import Features from "../components/services/software-development/Features";
import CTA from "../components/services/software-development/CTA";

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      {/* <Stats /> */}

      {/* Services Section */}
      <Services />

      {/* Methodologies Section */}
      <Methodologies />

      {/* Software Types Section */}
      <SoftwareTypes />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Process Section */}
      <Process />

      {/* Project Examples */}
      <Project />

      {/* Features */}
      <Features />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default SoftwareDevelopment;
