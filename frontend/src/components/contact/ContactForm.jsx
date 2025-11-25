import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare,
  User,
  Building,
  X,
} from "lucide-react";
import { useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:5000";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notIsSubmitted, setNotIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate individual field on blur
    validateField(name, formData[name]);
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(value)) {
          error = "Please enter a valid phone number";
        }
        break;
      case "service":
        if (!value.trim()) {
          error = "Service is required";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return !error;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
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
    if (!formData.service.trim()) {
      newErrors.service = "Service is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Mark all fields as touched when submitting
    const allFields = ["name", "email", "phone", "service", "message"];
    const touchedFields = {};
    allFields.forEach((field) => {
      touchedFields[field] = true;
    });
    setTouched(touchedFields);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: formData }),
      });

      if (response.ok && response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setTouched({});
      } else {
        setNotIsSubmitted(true);
        setTouched({});
      }
    }
  };

  const services = [
    "Website Development",
    "Mobile App Development",
    "Cybersecurity & IT Consulting",
    "Software Development",
    "Cloud Solutions",
    "Other",
  ];

  // Helper function to check if field has error and should show it
  const shouldShowError = (fieldName) => {
    return touched[fieldName] && errors[fieldName];
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Send us a Message
        </h3>
        <p className="text-sm sm:text-base text-slate-400">
          Fill out the details below and we'll get back to you within 24 hours
        </p>
      </div>

      {notIsSubmitted && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-8 text-center">
          <X className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">
            Message Failed to Send!
          </h4>
          <p className="text-slate-300">
            Your message couldn’t be submitted due to an internal error. Please
            try again in a moment.{" "}
          </p>
        </div>
      )}

      {isSubmitted ? (
        <div className="bg-green-500/10 border border-green-500/50 rounded-2xl p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">
            Message Sent Successfully!
          </h4>
          <p className="text-slate-300">We'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-slate-700/50 border rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all ${
                  shouldShowError("name")
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-600 focus:border-purple-500"
                }`}
                placeholder="Amit Kumar"
              />
            </div>
            {shouldShowError("name") && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-700/50 border rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all ${
                    shouldShowError("email")
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600 focus:border-purple-500"
                  }`}
                  placeholder="amitkumar@example.com"
                />
              </div>
              {shouldShowError("email") && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Phone *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-700/50 border rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all ${
                    shouldShowError("phone")
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-600 focus:border-purple-500"
                  }`}
                  placeholder="+91 9888XXXX60"
                />
              </div>
              {shouldShowError("phone") && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Company
            </label>
            <div className="relative">
              <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="Your Company Name"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Service Interested In *
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-slate-700/50 border rounded-xl px-12 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none ${
                  shouldShowError("service")
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-600 focus:border-purple-500"
                }`}
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            {shouldShowError("service") && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                {errors.service}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Message *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows={5}
                className={`w-full bg-slate-700/50 border rounded-xl px-12 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none ${
                  shouldShowError("message")
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-600 focus:border-purple-500"
                }`}
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            {shouldShowError("message") && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
