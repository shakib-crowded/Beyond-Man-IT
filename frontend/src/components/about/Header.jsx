const Header = () => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
        About{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Us
        </span>
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
        Empowering businesses through innovative technology solutions since 2018
      </p>
    </div>
  );
};

export default Header;
