import { HashLink as Link } from "react-router-hash-link";

const Hero = ({ heading, keyword, description, btnText, path, gradient }) => {
  return (
    <div
      className="
        bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900
        min-h-[60vh]
        md:min-h-[80vh]
        lg:min-h-screen
        pt-20
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {heading}
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {keyword}
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <Link
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-2xl cursor-pointer hover:border-2 border-white hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 hover:text-white"
            smooth
            to={path}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
