import { CheckCircle } from "lucide-react";

import { MdRestartAlt } from "react-icons/md";
import { VscAzureDevops } from "react-icons/vsc";
import { FaCheckCircle } from "react-icons/fa";

const Methodologies = () => {
  const methodologies = [
    {
      name: "Agile Development",
      desc: "Iterative development with sprint-based delivery",
      features: [
        "2-week sprints",
        "Daily standups",
        "Continuous feedback",
        "Adaptive planning",
      ],
      icon: <MdRestartAlt />,
      gradient: "from-blue-600 to-indigo-700",
      color: "#9CD0F6",
    },
    {
      name: "DevOps Practices",
      desc: "Continuous integration and deployment",
      features: [
        "Automated testing",
        "CI/CD pipelines",
        "Infrastructure as code",
        "Monitoring",
      ],
      icon: <VscAzureDevops />,
      gradient: "from-purple-600 to-pink-600",
      color: "#026DB2",
    },
    {
      name: "Test-Driven Development",
      desc: "Quality-first approach with automated testing",
      features: [
        "Unit testing",
        "Integration tests",
        "Code coverage",
        "Quality assurance",
      ],
      icon: <FaCheckCircle />,
      gradient: "from-green-600 to-teal-600",
      color: "#57D38C",
    },
  ];

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Development Methodologies
          </h2>
          <p className="text-lg text-slate-400">
            Modern approaches for efficient and quality software delivery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologies.map((method, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${method.gradient} p-8 rounded-xl text-white relative overflow-hidden group hover:scale-105 transition`}
            >
              <div className="absolute top-0 right-0 opacity-10 text-8xl transform translate-x-8 -translate-y-4">
                {method.icon}
              </div>
              <div className="relative z-10">
                <div className="text-4xl mb-4" style={{ color: method.color }}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{method.name}</h3>
                <p className="text-white/80 mb-6">{method.desc}</p>
                <div className="space-y-2">
                  {method.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Methodologies;
