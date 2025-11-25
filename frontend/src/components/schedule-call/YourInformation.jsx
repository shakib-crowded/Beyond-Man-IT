import { useContext } from "react";
import { ScheduleCallContext } from "../../pages/ScheduleCall";
import { Calendar, Clock } from "lucide-react";

const YourInformation = () => {
  const {
    currentStep,
    callTypes,
    selectedCallType,
    selectedDate,
    selectedTime,
    formData,
    currentMonth,
    handleInputChange,
    setCurrentStep,
    canSubmit,
    handleSubmit,
  } = useContext(ScheduleCallContext);

  return (
    <>
      {currentStep === 3 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Information
            </h2>
            <p className="text-lg text-slate-400">
              Please provide your details to confirm the call
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Call Summary
              </h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {callTypes.find((ct) => ct.id === selectedCallType)?.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-white">
                      {
                        callTypes.find((ct) => ct.id === selectedCallType)
                          ?.title
                      }
                    </div>
                    <div className="text-sm text-slate-400">
                      {
                        callTypes.find((ct) => ct.id === selectedCallType)
                          ?.duration
                      }
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                  <span>
                    {currentMonth.toLocaleString("default", {
                      month: "long",
                    })}{" "}
                    {selectedDate}, {currentMonth.getFullYear()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-indigo-400" />
                  <span>{selectedTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="Amit Kumar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="amitkumar@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="+91 9899XXXX54"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    What would you like to discuss? (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none resize-none"
                    placeholder="Brief description of your project or questions..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="cursor-pointer px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`cursor-pointer flex-1 px-8 py-4 rounded-lg font-semibold transition ${
                  canSubmit
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Confirm & Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YourInformation;
