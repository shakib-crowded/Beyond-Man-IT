import { CheckCircle } from "lucide-react";

const SuccessCard = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">
        Call Scheduled Successfully!
      </h2>
      <p className="text-green-100">
        We have sent a confirmation email with meeting details
      </p>
    </div>
  );
};
export default SuccessCard;
