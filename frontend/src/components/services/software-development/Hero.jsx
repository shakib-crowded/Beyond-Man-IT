import { Code } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Code className="w-4 h-4" />
            <span>Building Tomorrow's Software Today</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Software Development Services
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Transform your ideas into powerful software solutions. We deliver
            custom, scalable, and secure applications that drive business growth
            and innovation.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to={"/get-started"}
              className="cursor-pointer bg-white black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:text-white hover:border-2 border-white"
            >
              Start Your Project
            </Link>
            <button className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
