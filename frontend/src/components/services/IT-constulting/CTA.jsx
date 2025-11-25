import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-emerald-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10">
          <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your IT challenges and create a strategy for success.
            Get a free consultation with our experts.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to={"/schedule-call"}
              className="cursor-pointer bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:text-white hover:border-2 border-white"
            >
              Book Free Consultation
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition"
            >
              Request IT Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
