import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            🚀 Building the Future of Mobile
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Mobile App Development Services
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Create exceptional mobile experiences that users love. We develop
            innovative iOS and Android applications that drive engagement and
            business growth.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to={"/get-started"}
              className="cursor-pointer bg-white black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:text-white hover:border-2 border-white"
            >
              Start Your App
            </Link>

            <button className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition hover:border-2 hover:border-blue-600">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
