import { useState } from "react";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaJava,
  FaLaravel,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiElasticsearch,
  SiGooglecloud,
  SiKubernetes,
  SiMysql,
  SiTypescript,
} from "react-icons/si";
import {
  DiFirebase,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiRedis,
  DiRuby,
} from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const techStacks = {
    frontend: [
      {
        name: "React.js",
        desc: "Modern UI library for dynamic interfaces",
        icon: <FaReact />,
        color: "#08D9FF",
      },
      {
        name: "Next.js",
        desc: "Full-stack React framework with SSR",
        icon: "▲",
      },
      {
        name: "Vue.js",
        desc: "Progressive JavaScript framework",
        icon: <FaVuejs />,
        color: "#47BA87",
      },
      {
        name: "Angular",
        desc: "Enterprise-grade TypeScript framework",
        icon: <FaAngular />,
        color: "#C50836",
      },
      {
        name: "Tailwind CSS",
        desc: "Utility-first CSS framework",
        icon: <RiTailwindCssFill />,
        color: "#3EBFF8",
      },
      {
        name: "TypeScript",
        desc: "Typed superset of JavaScript",
        icon: <SiTypescript />,
        color: "#377CC8",
      },
    ],
    backend: [
      {
        name: "Node.js",
        desc: "JavaScript runtime for server-side",
        icon: <DiNodejs />,
        color: "#4C9347",
      },
      {
        name: "Python/Django",
        desc: "High-level Python web framework",
        icon: <FaPython />,
        color: "#FFDC55",
      },
      {
        name: "Java/Spring",
        desc: "Enterprise Java framework",
        icon: <FaJava />,
        color: "#DF121E",
      },
      {
        name: ".NET Core",
        desc: "Cross-platform .NET framework",
        icon: <AiOutlineDotNet />,
        color: "#1B83C7",
      },
      {
        name: "PHP/Laravel",
        desc: "Elegant PHP framework",
        icon: <FaLaravel />,
        color: "#FC3A2F",
      },
      {
        name: "Ruby on Rails",
        desc: "Convention over configuration",
        icon: <DiRuby />,
        color: "#F0161A",
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        desc: "Advanced relational database",
        icon: <DiPostgresql />,
        color: "#396C94",
      },
      {
        name: "MongoDB",
        desc: "NoSQL document database",
        icon: <DiMongodb />,
        color: "#449B35",
      },
      {
        name: "MySQL",
        desc: "Popular relational database",
        icon: <SiMysql />,
        color: "#42759C",
      },
      {
        name: "Redis",
        desc: "In-memory data structure store",
        icon: <DiRedis />,
        color: "#D12B1F",
      },
      {
        name: "Firebase",
        desc: "Google backend platform",
        icon: <IoLogoFirebase />,
        color: "#F7BE00",
      },
      {
        name: "Elasticsearch",
        desc: "Search and analytics engine",
        icon: <SiElasticsearch />,
        color: "#F6BF13",
      },
    ],
    cloud: [
      {
        name: "AWS",
        desc: "Amazon Web Services",
        icon: <FaAws />,
        color: "#F79400",
      },
      {
        name: "Google Cloud",
        desc: "GCP infrastructure",
        icon: <SiGooglecloud />,
        color: "#F0B405",
      },
      {
        name: "Azure",
        desc: "Microsoft cloud platform",
        icon: <VscAzure />,
        color: "#0B4D90",
      },
      {
        name: "Vercel",
        desc: "Frontend deployment platform",
        icon: <IoLogoVercel />,
        color: "#080808",
      },
      {
        name: "Docker",
        desc: "Container platform",
        icon: <FaDocker />,
        color: "#2468EE",
      },
      {
        name: "Kubernetes",
        desc: "Container orchestration",
        icon: <SiKubernetes />,
        color: "#3871E6",
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
            We leverage industry-leading technologies to build robust solutions
          </p>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {Object.keys(techStacks).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-3 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
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
