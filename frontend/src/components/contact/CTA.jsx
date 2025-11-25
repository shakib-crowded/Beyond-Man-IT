import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Have Questions?
      </h3>
      <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
        Our team is ready to help you. Reach out to us through any of the
        channels above or schedule a free consultation.
      </p>
      <Link
        to={"/schedule-call"}
        className="cursor-pointer  bg-white text-black hover:border-2 border-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Schedule a Consultation
      </Link>
    </div>
  );
};

export default CTA;
