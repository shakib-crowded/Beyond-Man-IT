import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Globe className="w-4 h-4 inline mr-2" />
            Start Your Web Presence
          </div>
          <h1 className="text-5xl font-bold mb-6 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Website Development Services
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Transform your vision into powerful web solutions. We build
            scalable, secure, and high-performance websites using cutting-edge
            technologies.
          </p>
          <div className="flex gap-4">
            <Link
              to={"/get-started"}
              className="bg-white text-black cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition shadow-lg hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white"
            >
              Start Your Project
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition cursor-pointer">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
