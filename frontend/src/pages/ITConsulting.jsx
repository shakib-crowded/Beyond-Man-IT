import Hero from "../components/services/IT-constulting/Hero";
import Benefits from "../components/services/IT-constulting/Benefits";
import Services from "../components/services/IT-constulting/Services";
import Expertise from "../components/services/IT-constulting/Experties";
import Industries from "../components/services/IT-constulting/Industries";
import Process from "../components/services/IT-constulting/Process";
import Testimonials from "../components/services/IT-constulting/Testimonials";
import WhyChooseUs from "../components/services/IT-constulting/WhyChooseUs";
import CTA from "../components/services/IT-constulting/CTA";

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Benefits Section */}
      <Benefits />

      {/* Services Section */}
      <Services />

      {/* Expertise Areas Section */}
      <Expertise />

      {/* Industries Section */}
      <Industries />

      {/* Process Section */}
      <Process />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default ITConsulting;
