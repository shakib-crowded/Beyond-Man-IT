import { Users } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-purple-500/30">
        <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Website?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create something amazing together. Get
          a free consultation today.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to={"/schedule-call"}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold cursor-pointer hover:bg-purple-50 hover:border-2 border-white transition shadow-lg hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white"
          >
            Schedule a Call
          </Link>
          <Link
            to={"/contact"}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
