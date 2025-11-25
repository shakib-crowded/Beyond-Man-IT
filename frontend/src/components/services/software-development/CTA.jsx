import { Terminal } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-purple-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-pulse"></div>
        <div className="relative z-10">
          <Terminal className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build Your Software?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Get a free consultation and
            project estimate from our expert developers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to={"/schedule-call"}
              className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition shadow-lg hover:bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:text-white hover:border-2 border-white"
            >
              Schedule Discovery Call
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
