import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-red-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10">
          <Lock className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait for a breach to happen. Get a comprehensive security
            assessment and protect your organization now.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to={"/schedule-call"}
              className="cursor-pointer bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition shadow-lg hover:bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 hover:text-white hover:border-2 border-white"
            >
              Schedule Security Audit
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
