import { CheckCircle, Sparkles } from "lucide-react";
import React, { useContext } from "react";
import { GetStartedContext } from "../../pages/GetStarted";

const Hero = () => {
  const { currentStep } = useContext(GetStartedContext);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 relative">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-white mb-4 sm:mb-6">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Start Your Project Journey</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            Get Started
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-purple-100 px-2">
            Tell us about your project and we will create a custom solution for
            you.
          </p>
        </div>

        {/* Step Progress */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto px-2 pb-2 scrollbar-none">
            {[1, 2, 3, 4].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`flex items-center gap-1 sm:gap-2 ${
                    currentStep >= step ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                      currentStep >= step
                        ? "bg-white text-purple-600"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className="hidden md:block text-white text-xs sm:text-sm font-medium">
                    {step === 1 && "Service"}
                    {step === 2 && "Features"}
                    {step === 3 && "Details"}
                    {step === 4 && "Review"}
                  </span>
                </div>

                {step < 4 && (
                  <div
                    className={`h-1 rounded w-8 sm:w-12 ${
                      currentStep > step ? "bg-white" : "bg-white/20"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
