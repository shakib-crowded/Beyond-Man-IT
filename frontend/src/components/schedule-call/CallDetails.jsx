import {
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  User,
  Video,
} from "lucide-react";
import { useContext } from "react";
import { ScheduleCallContext } from "../../pages/ScheduleCall";

const CallDetails = () => {
  const {
    callTypeDetails,
    monthNameFull,
    currentMonth,
    selectedTime,
    selectedDate,
    formData,
  } = useContext(ScheduleCallContext);

  return (
    <div className="p-8 space-y-6">
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Video className="w-6 h-6 text-green-400" />
          Meeting Details
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl">{callTypeDetails.icon}</div>
            <div>
              <div className="text-white font-semibold">
                {callTypeDetails.title}
              </div>
              <div className="text-slate-400 text-sm">
                {callTypeDetails.duration}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Calendar className="w-5 h-5 text-green-400" />
            <span>
              {monthNameFull} {selectedDate}, {currentMonth.getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <Clock className="w-5 h-5 text-green-400" />
            <span>{selectedTime}</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <User className="w-6 h-6 text-green-400" />
          Your Information
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-slate-300">
            <User className="w-5 h-5 text-green-400" />
            <span>{formData.name}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Mail className="w-5 h-5 text-green-400" />
            <span>{formData.email}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <Phone className="w-5 h-5 text-green-400" />
            <span>{formData.phone}</span>
          </div>
          {formData.company && (
            <div className="flex items-center gap-3 text-slate-300">
              <Briefcase className="w-5 h-5 text-green-400" />
              <span>{formData.company}</span>
            </div>
          )}
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
        <div className="flex gap-3">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-green-300">
            <p className="font-semibold mb-1">What to expect:</p>
            <ul className="space-y-1 text-green-200">
              <li>• Calendar invite sent to your email</li>
              <li>• Meeting link will be provided 24 hours before</li>
              <li>• Our team will reach out if any questions</li>
              <li>• You can reschedule anytime by contacting us</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="cursor-pointer w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition shadow-lg"
      >
        Schedule Another Call
      </button>
    </div>
  );
};

export default CallDetails;
