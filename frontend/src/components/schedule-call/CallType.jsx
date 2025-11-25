import { useContext } from "react";
import { ScheduleCallContext } from "../../pages/ScheduleCall";
import { Clock } from "lucide-react";

const CallType = () => {
  const {
    currentStep,
    callTypes,
    selectedCallType,
    setSelectedCallType,
    setCurrentStep,
    canProceedToStep2,
  } = useContext(ScheduleCallContext);

  return (
    <>
      {currentStep === 1 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Select Call Type
            </h2>
            <p className="text-lg text-slate-400">
              Choose the type of consultation that fits your needs
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {callTypes.map((callType) => (
              <div
                key={callType.id}
                onClick={() => setSelectedCallType(callType.id)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                  selectedCallType === callType.id
                    ? "bg-indigo-500/20 border-indigo-500"
                    : "bg-slate-800 border-slate-700 hover:border-slate-600"
                }`}
              >
                <div className="text-4xl mb-4">{callType.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {callType.title}
                </h3>
                <div className="flex items-center gap-2 text-indigo-400 mb-3">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {callType.duration}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{callType.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentStep(2)}
              disabled={!canProceedToStep2}
              className={`${
                canProceedToStep2 ? "cursor-pointer" : ""
              }  px-12 py-4 rounded-lg font-semibold transition ${
                canProceedToStep2
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                  : "bg-slate-700 text-slate-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CallType;
