const Testimonials = () => {
  const testimonials = [
    {
      company: "Tech Corp",
      role: "CTO",
      text: "Their IT consulting transformed our infrastructure, reducing costs by 35% while improving performance.",
      rating: 5,
    },
    {
      company: "Global Finance",
      role: "IT Director",
      text: "Strategic guidance helped us successfully migrate to cloud, achieving 99.9% uptime.",
      rating: 5,
    },
    {
      company: "Healthcare Plus",
      role: "VP Technology",
      text: "Expert consulting on HIPAA compliance and system modernization was invaluable.",
      rating: 5,
    },
  ];
  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-slate-400">
            Hear from organizations we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.company[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
