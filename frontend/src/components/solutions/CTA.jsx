import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
      <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl w-full max-w-4xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Have a Project in Mind?
        </h3>
        <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Let's collaborate and bring your vision to life with our expertise
        </p>
        <Link
          to={"/get-started"}
          className="cursor-pointer hover:border-2 border-white text-black hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white bg-white  px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default CTA;
