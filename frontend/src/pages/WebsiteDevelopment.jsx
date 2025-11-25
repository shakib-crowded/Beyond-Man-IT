import Hero from "../components/services/website-development/Hero";
import Service from "../components/services/website-development/Service";
import TechStack from "../components/services/website-development/TechStack";
import DevelopmentProcess from "../components/services/website-development/DevelopmentProcess";
import Features from "../components/services/website-development/Features";
import CTA from "../components/services/website-development/CTA";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Development Process */}
      <DevelopmentProcess />

      {/* Features */}
      <Features />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default WebsiteDevelopment;
