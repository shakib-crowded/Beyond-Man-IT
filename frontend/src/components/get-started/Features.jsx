import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { GetStartedContext } from "../../pages/GetStarted";

const Features = () => {
  const {
    currentStep,
    selectedService,
    selectedFeatures,
    handleFeatureToggle,
    handleBack,
    handleNext,
  } = useContext(GetStartedContext);

  return (
    <>
      {currentStep === 2 && selectedService && (
        <div id={selectedService}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Select Features
            </h2>
            <p className="text-lg text-slate-400">
              Choose the features you need for your {selectedService.title}{" "}
              project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-gradient-to-br ${selectedService.gradient} p-6 rounded-xl mb-8 flex items-center gap-4`}
            >
              <div className="text-white">{selectedService.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedService.title}
                </h3>
                <p className="text-white/80">{selectedService.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {selectedService.features.map((feature) => (
                <div
                  key={feature}
                  onClick={() => handleFeatureToggle(feature)}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                    selectedFeatures.includes(feature)
                      ? "bg-purple-500/20 border-purple-500"
                      : "bg-slate-800 border-slate-700 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedFeatures.includes(feature) ? (
                        <CheckCircle className="w-6 h-6 text-purple-400" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-slate-600"></div>
                      )}
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="cursor-pointer px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={selectedFeatures.length === 0}
                className={`cursor-pointer flex-1 px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  selectedFeatures.length > 0
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {selectedFeatures.length > 0 && (
              <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-purple-300 text-sm">
                  ✓ {selectedFeatures.length} feature
                  {selectedFeatures.length !== 1 ? "s" : ""} selected
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
