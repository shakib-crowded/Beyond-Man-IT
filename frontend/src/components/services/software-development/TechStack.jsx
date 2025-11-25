import { useState } from "react";
import {
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJenkins,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { MdJavascript, MdOutlineDevicesOther } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import {
  AiOutlineDotNet,
  AiOutlineKubernetes,
  AiOutlineRuby,
} from "react-icons/ai";
import { DiDjango, DiRedis } from "react-icons/di";
import {
  SiMongodb,
  SiMysql,
  SiOracle,
  SiSpringboot,
  SiTerraform,
} from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApachecassandra } from "react-icons/si";
import { CiCloud } from "react-icons/ci";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const techStacks = {
    languages: [
      {
        name: "Python",
        desc: "Versatile language for web & data science",
        icon: <FaPython />,
        color: "#F0D146",
      },
      {
        name: "Java",
        desc: "Enterprise-grade applications",
        icon: <FaJava />,
        color: "#DF121E",
      },
      {
        name: "JavaScript",
        desc: "Full-stack web development",
        icon: <MdJavascript />,
        color: "#FFE008",
      },
      {
        name: "C#",
        desc: ".NET framework development",
        icon: <MdOutlineDevicesOther />,
        color: "#1B78B6",
      },
      {
        name: "Go",
        desc: "High-performance scalable systems",
        icon: <FaGolang />,
        color: "#4BC9DB",
      },
      {
        name: "Ruby",
        desc: "Rapid application development",
        icon: <AiOutlineRuby />,
        color: "#E80E12",
      },
    ],
    frameworks: [
      {
        name: "React.js",
        desc: "Modern UI library",
        icon: <FaReact />,
        color: "#08DAFF",
      },
      {
        name: "Node.js",
        desc: "JavaScript runtime",
        icon: <FaNode />,
        color: "#87CF30",
      },
      {
        name: "Django",
        desc: "Python web framework",
        icon: <DiDjango />,
        color: "#32AC7B",
      },
      {
        name: "Spring Boot",
        desc: "Java microservices",
        icon: <SiSpringboot />,
        color: "#72B545",
      },
      {
        name: ".NET Core",
        desc: "Cross-platform framework",
        icon: <AiOutlineDotNet />,
        color: "#1B78B6",
      },
      {
        name: "Express.js",
        desc: "Minimalist web framework",
        icon: <SiExpress />,
        color: "#F0D108",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        desc: "Advanced relational database",
        icon: <BiLogoPostgresql />,
        color: "#396C94",
      },
      {
        name: "MongoDB",
        desc: "NoSQL document database",
        icon: <SiMongodb />,
        color: "#499C3A",
      },
      {
        name: "MySQL",
        desc: "Popular open-source DB",
        icon: <SiMysql />,
        color: "#087993",
      },
      {
        name: "Redis",
        desc: "In-memory data store",
        icon: <DiRedis />,
        color: "#D93327",
      },
      {
        name: "Oracle",
        desc: "Enterprise database solution",
        icon: <SiOracle />,
        color: "#E40E1A",
      },
      {
        name: "Cassandra",
        desc: "Distributed NoSQL database",
        icon: <SiApachecassandra />,
        color: "#1889B2",
      },
    ],
    devops: [
      {
        name: "Docker",
        desc: "Container platform",
        icon: <FaDocker />,
        color: "#2468EE",
      },
      {
        name: "Kubernetes",
        desc: "Container orchestration",
        icon: <AiOutlineKubernetes />,
        color: "#3871E6",
      },
      {
        name: "Jenkins",
        desc: "CI/CD automation",
        icon: <FaJenkins />,
        color: "#D43E39",
      },
      {
        name: "Git",
        desc: "Version control system",
        icon: <FaGitAlt />,
        color: "#F05539",
      },
      {
        name: "AWS",
        desc: "Cloud infrastructure",
        icon: <CiCloud />,
        color: "#2D9DF2",
      },
      {
        name: "Terraform",
        desc: "Infrastructure as code",
        icon: <SiTerraform />,
        color: "#4646B4",
      },
    ],
  };

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-slate-400">
            Cutting-edge technologies for robust software development
          </p>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {Object.keys(techStacks).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-3 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks[activeTab].map((tech, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:bg-slate-750 hover:border-purple-500/50 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                  <p className="text-sm text-slate-400">{tech.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
