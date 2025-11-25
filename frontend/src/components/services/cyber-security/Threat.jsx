import { AlertTriangle, Bug, Skull } from "lucide-react";

const Threat = () => {
  const threats = [
    {
      icon: <Skull className="w-12 h-12" />,
      title: "Ransomware Attacks",
      stat: "493.33M",
      desc: "Ransomware attacks in 2023",
      color: "from-red-600 to-red-800",
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: "Data Breaches",
      stat: "$4.45M",
      desc: "Average cost of a data breach",
      color: "from-orange-600 to-orange-800",
    },
    {
      icon: <Bug className="w-12 h-12" />,
      title: "Vulnerabilities",
      stat: "25,000+",
      desc: "New CVEs discovered annually",
      color: "from-yellow-600 to-yellow-800",
    },
  ];
  return (
    <div className="bg-slate-800/50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            The Cyber Threat Landscape
          </h2>
          <p className="text-slate-400">
            Understanding the risks facing organizations today
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {threats.map((threat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${threat.color} p-8 rounded-xl text-white relative overflow-hidden group hover:scale-105 transition`}
            >
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                {threat.icon}
              </div>
              <div className="relative z-10">
                <div className="mb-4">{threat.icon}</div>
                <div className="text-3xl font-bold mb-2">{threat.stat}</div>
                <div className="text-lg font-semibold mb-2">{threat.title}</div>
                <div className="text-white/80 text-sm">{threat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Threat;
