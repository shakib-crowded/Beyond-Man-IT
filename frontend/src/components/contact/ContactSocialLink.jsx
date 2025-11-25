import { Link } from "react-router-dom";

const ContactSocialLink = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      gradient: "from-blue-600 to-blue-700",
      url: "https://linkedin.com/in/shakibansarideveloper",
    },
    {
      name: "Instagram",
      gradient: "from-purple-600 to-pink-600",
      url: "https://instagram.com/shakib-crowded",
    },
  ];
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social, index) => (
          <Link
            to={social.url}
            key={index}
            target="_blank"
            className={`bg-gradient-to-r ${social.gradient} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm text-center`}
          >
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactSocialLink;
