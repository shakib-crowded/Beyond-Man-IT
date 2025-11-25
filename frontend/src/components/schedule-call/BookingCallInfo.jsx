import CallDetails from "./CallDetails";
import SuccessCard from "./SuccessCard";

const BookingCallInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <SuccessCard />
          <CallDetails />
        </div>
      </div>
    </div>
  );
};

export default BookingCallInfo;
