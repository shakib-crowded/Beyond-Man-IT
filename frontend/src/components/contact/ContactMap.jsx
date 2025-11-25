const ContactMap = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 h-64 sm:h-80 lg:flex-1">
      <iframe
        src="https://www.google.com/maps?q=28.693753782523537,77.35520416221715&z=14&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Office Location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
