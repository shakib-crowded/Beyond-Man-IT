import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="text-center">
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Join Us on Our Journey
        </h3>
        <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Be part of our success story and let's create something extraordinary
          together
        </p>
        <Link
          to={"/contact"}
          className="cursor-pointer bg-white text-black border-2 border-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default CTA;
