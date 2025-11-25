import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Shield className="w-4 h-4" />
            <span>Protecting Your Digital Assets 24/7</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Cyber Security Services
          </h1>
          <p className="text-xl text-red-100 mb-8">
            Defend your organization against evolving cyber threats. We provide
            comprehensive security solutions to protect your data,
            infrastructure, and reputation.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to={"/get-started"}
              className="cursor-pointer bg-white black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:text-white hover:border-2 border-white"
            >
              Get Security Audit
            </Link>
            <button className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition hover:border-2 hover:border-red-600">
              View Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
