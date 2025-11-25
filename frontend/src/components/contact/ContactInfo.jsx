import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 8287757460"],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["beyondman.dev@gmail.com"],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Garima Garden Ghaziabad - 201005 UP India"],
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
      {contactInfo.map((info, index) => {
        const Icon = info.icon;
        return (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
          >
            <div
              className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-sm text-slate-400 mb-1">
                {detail}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default ContactInfo;
