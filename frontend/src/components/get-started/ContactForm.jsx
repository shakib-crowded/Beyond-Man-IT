import { X, CheckCircle, Loader, AlertCircle } from "lucide-react";
import { useState, useContext } from "react";
import { GetStartedContext } from "../../pages/GetStarted";

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

const ContactForm = ({ verified }) => {
  const { handleSubmit } = useContext(GetStartedContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const [showOTPField, setShowOTPField] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [otpAttempts, setOtpAttempts] = useState(0);
  const [otpExpiry, setOtpExpiry] = useState(null);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const MAX_OTP_ATTEMPTS = 3;
  const OTP_RESEND_TIMEOUT = 30; // 30 seconds

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (apiError) {
      setApiError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const startResendTimer = () => {
    setCanResendOtp(false);
    setResendTimer(OTP_RESEND_TIMEOUT);

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResendOtp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleGetOTP = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setApiError("");
    setOtpAttempts(0);

    try {
      const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send OTP");
      }

      // Set OTP expiry time (typically 10 minutes)
      const expiryTime = new Date(Date.now() + 10 * 60 * 1000);
      setOtpExpiry(expiryTime);

      setShowOTPField(true);
      startResendTimer();
    } catch (error) {
      console.error("OTP Error:", error);
      setApiError(
        error.message || "Failed to send OTP. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      setErrors((prev) => ({
        ...prev,
        otp: "OTP is required",
      }));
      return;
    }

    if (otp.length !== 6 || isNaN(otp)) {
      setErrors((prev) => ({
        ...prev,
        otp: "OTP must be 6 digits",
      }));
      return;
    }

    if (otpAttempts >= MAX_OTP_ATTEMPTS) {
      setApiError("Maximum OTP attempts exceeded. Please request a new OTP.");
      return;
    }

    setLoading(true);
    setApiError("");

    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setOtpAttempts((prev) => prev + 1);
        throw new Error(data.message || "Invalid OTP. Please try again.");
      }

      // OTP verified successfully
      setShowForm(false);
      await handleSubmit(formData);
    } catch (error) {
      console.error("OTP Verification Error:", error);
      setApiError(error.message);
      setOtp("");
      setErrors((prev) => ({
        ...prev,
        otp: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResendOtp) return;
    await handleGetOTP();
  };

  if (!showForm && verified) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
          <p className="text-slate-400 mb-6">
            Your project details have been verified successfully, our team will
            contact you shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition"
          >
            Done
          </button>
        </div>
      </div>
    );
  } else if (!showForm && !verified) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full p-8 text-center">
          <X className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Failed!</h3>
          <p className="text-slate-400 mb-6">
            Project details verification failed. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl border border-slate-700 max-w-3xl w-full max-h-[95vh] flex flex-col">
        {/* Fixed Header */}
        <div className="p-6 border-b border-slate-700 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {showOTPField ? "Verify Your Email" : "Share Your Details"}
            </h3>
            <p className="text-slate-400 text-sm">
              {showOTPField
                ? "Enter the 6-digit OTP sent to your email"
                : "Enter Your Basic Details"}
            </p>
          </div>
          <button
            onClick={() => setShowForm(false)}
            className="cursor-pointer text-slate-400 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* API Error Alert */}
            {apiError && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm">{apiError}</p>
              </div>
            )}

            {showOTPField ? (
              // OTP Section
              <div className="space-y-4">
                <div className="bg-slate-700/30 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-300 text-sm mb-2">OTP sent to:</p>
                  <p className="text-white font-semibold">{formData.email}</p>
                  {otpExpiry && (
                    <p className="text-slate-400 text-xs mt-2">
                      OTP expires at: {otpExpiry.toLocaleTimeString()}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Enter OTP (6 digits)
                  </label>
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setOtp(value);
                      if (errors.otp) {
                        setErrors((prev) => ({
                          ...prev,
                          otp: "",
                        }));
                      }
                    }}
                    placeholder="000000"
                    disabled={loading}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white text-center text-2xl tracking-widest focus:border-orange-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition"
                  />
                  {errors.otp && (
                    <p className="text-red-400 text-sm mt-2">{errors.otp}</p>
                  )}
                  <p className="text-slate-400 text-xs mt-2">
                    Attempts remaining: {MAX_OTP_ATTEMPTS - otpAttempts}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      setShowOTPField(false);
                      setOtp("");
                      setOtpAttempts(0);
                      setApiError("");
                      setErrors({});
                    }}
                    className="text-sm text-orange-500 hover:text-orange-400 transition disabled:opacity-50"
                    disabled={loading}
                  >
                    ← Back to details
                  </button>

                  {!canResendOtp ? (
                    <p className="text-slate-400 text-xs">
                      Resend OTP in {resendTimer}s
                    </p>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      disabled={loading}
                      className="text-sm text-orange-500 hover:text-orange-400 transition disabled:opacity-50"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              </div>
            ) : (
              // Personal Information Section
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Personal Information
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={loading}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.fullName
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-700 focus:border-orange-500"
                      }`}
                      placeholder="Amit Sharma"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={loading}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-700 focus:border-orange-500"
                      }`}
                      placeholder="amitsharma@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={loading}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-700 focus:border-orange-500"
                      }`}
                      placeholder="+91 9820XXXX60"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Current Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={loading}
                      className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.location
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-700 focus:border-orange-500"
                      }`}
                      placeholder="Delhi, India"
                    />
                    {errors.location && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="border-t border-slate-700 p-6 flex gap-4 flex-shrink-0">
          {showOTPField ? (
            <>
              {!verified ? (
                <button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading && <Loader className="w-5 h-5 animate-spin" />}
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              ) : (
                <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Verified
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={handleGetOTP}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader className="w-5 h-5 animate-spin" />}
                {loading ? "Sending OTP..." : "Get OTP"}
              </button>
              <button
                onClick={() => setShowForm(false)}
                disabled={loading}
                className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
