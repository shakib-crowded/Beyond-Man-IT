import { Calendar, CheckCircle } from "lucide-react";
import React, { useContext } from "react";
import { ScheduleCallContext } from "../../pages/ScheduleCall";

const Hero = () => {
  const { currentStep } = useContext(ScheduleCallContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Calendar className="w-4 h-4" />
            <span>Book Your Free Consultation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-white">
            Schedule a Call
          </h1>
          <p className="text-xl text-blue-100">
            Let's discuss your project and explore how we can help you achieve
            your goals
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`flex items-center gap-2 ${
                    currentStep >= step ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      currentStep >= step
                        ? "bg-white text-indigo-600"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className="hidden md:block text-white text-sm font-medium">
                    {step === 1 && "Call Type"}
                    {step === 2 && "Date & Time"}
                    {step === 3 && "Your Info"}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`w-12 h-1 rounded ${
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
