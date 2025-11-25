import { useState } from "react";

const API_BASE_URL = import.meta.env.REACT_APP_URL || "http://localhost:5000";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleNewsLetter = async () => {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!validateEmail()) {
      setError("Invalid email format. Please enter a valid email.");
      return;
    }

    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (data.success) {
      setSuccess(data.message);
      setError("");
    } else {
      setError(data.message);
      setSuccess("");
    }
  };
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
        Get the latest articles, insights, and tech tips delivered straight to
        your inbox every week
      </p>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-all"
          value={email}
          onChange={handleChange}
        />
        <button
          onClick={handleNewsLetter}
          className="cursor-pointer bg-white text-black hover:border-2 border-white hover:bg-gradient-to-r from-blue-600 to-purple-600 hover:text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

      {success && (
        <p className="text-green-400 text-sm font-medium">{success}</p>
      )}
    </div>
  );
};

export default Newsletter;
