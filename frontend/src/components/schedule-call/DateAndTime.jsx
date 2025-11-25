import { useContext } from "react";
import { ScheduleCallContext } from "../../pages/ScheduleCall";
import { Calendar, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const DateAndTime = () => {
  const {
    currentStep,
    timeSlots,
    canProceedToStep3,
    calendarDays,
    monthName,
    selectedDate,
    selectedTime,
    setSelectedTime,
    isDateAvailable,
    setCurrentStep,
    handleDateSelect,
    handlePrevMonth,
    handleNextMonth,
  } = useContext(ScheduleCallContext);

  return (
    <>
      {currentStep === 2 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Date & Time
            </h2>
            <p className="text-lg text-slate-400">
              Select a convenient date and time for your call
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-slate-700 rounded-lg transition"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <h3 className="text-xl font-bold text-white">{monthName}</h3>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-slate-700 rounded-lg transition"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-slate-400 text-sm font-semibold py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day && handleDateSelect(day)}
                    disabled={!isDateAvailable(day)}
                    className={`cursor-pointer aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition ${
                      !day
                        ? "invisible"
                        : selectedDate === day
                        ? "bg-indigo-600 text-white"
                        : isDateAvailable(day)
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-slate-900 text-slate-600 cursor-not-allowed"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-indigo-400" />
                Available Time Slots
              </h3>

              {!selectedDate ? (
                <div className="text-center py-12 text-slate-400">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Please select a date first</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`cursor-pointer p-3 rounded-lg text-sm font-medium transition ${
                        selectedTime === time
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-700 text-white hover:bg-slate-600"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => setCurrentStep(1)}
              className="cursor-pointer px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition"
            >
              Back
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              disabled={!canProceedToStep3}
              className={`cursor-pointer px-12 py-4 rounded-lg font-semibold transition ${
                canProceedToStep3
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

export default DateAndTime;
