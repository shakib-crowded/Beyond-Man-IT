import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Strategic Technology Guidance</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            IT Consulting Services
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Transform your business with expert IT consulting. We provide
            strategic guidance to optimize technology investments, improve
            efficiency, and drive digital innovation.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to={"/get-started"}
              className="cursor-pointer bg-white black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:text-white hover:border-2 border-white"
            >
              Schedule Consultation
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition cursor-pointer">
              Our Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
