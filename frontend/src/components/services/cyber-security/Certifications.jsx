import { ShieldCheck } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "CISSP",
      desc: "Certified Information Systems Security Professional",
    },
    { name: "CEH", desc: "Certified Ethical Hacker" },
    { name: "CISM", desc: "Certified Information Security Manager" },
    { name: "CompTIA Security+", desc: "Security Certification" },
    { name: "OSCP", desc: "Offensive Security Certified Professional" },
    { name: "CISA", desc: "Certified Information Systems Auditor" },
  ];

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Team's Certifications
          </h2>
          <p className="text-lg text-slate-400">
            Certified professionals with industry-recognized credentials
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-red-500/50 transition flex items-center gap-4"
            >
              <ShieldCheck className="w-10 h-10 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
