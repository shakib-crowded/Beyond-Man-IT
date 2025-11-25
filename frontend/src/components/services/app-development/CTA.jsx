import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <Code2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your App?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your app idea into reality. Get a free consultation and
            project estimate today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to={"/schedule-call"}
              className="cursor-pointer bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg hover:bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:text-white hover:border-2 border-white"
            >
              Get Free Consultation
            </Link>
            <Link
              to={"/contact"}
              className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition hover:border-2 hover:border-blue-600"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
