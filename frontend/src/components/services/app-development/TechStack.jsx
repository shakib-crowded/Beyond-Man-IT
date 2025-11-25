import { useState } from "react";
import {
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaNode,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import {
  SiKotlin,
  SiExpress,
  SiSqlite,
  SiRealm,
  SiMongodb,
  SiXcode,
  SiAndroidstudio,
  SiPostman,
} from "react-icons/si";
import { TbBrandXamarin } from "react-icons/tb";
import { IoLogoIonic } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { DiDjango, DiFirebase } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const techStacks = {
    mobile: [
      {
        name: "React Native",
        desc: "Cross-platform development framework",
        icon: <FaReact />,
        color: "#66DBFB",
      },
      {
        name: "Flutter",
        desc: "Google UI toolkit for native apps",
        icon: <FaFlutter />,
        color: "#4DC7FB",
      },
      {
        name: "Swift",
        desc: "Native iOS development language",
        icon: <FaSwift />,
        color: "#FF553A",
      },
      {
        name: "Kotlin",
        desc: "Modern Android development language",
        icon: <SiKotlin />,
        color: "#B727E7",
      },
      {
        name: "Xamarin",
        desc: "Microsoft cross-platform framework",
        icon: <TbBrandXamarin />,
        color: "#3A9BDC",
      },
      {
        name: "Ionic",
        desc: "Hybrid mobile app framework",
        icon: <IoLogoIonic />,
        color: "#4D8EFF",
      },
    ],
    backend: [
      {
        name: "Node.js",
        desc: "Scalable server-side JavaScript",
        icon: <FaNode />,
        color: "#62B24B",
      },
      {
        name: "Firebase",
        desc: "Google mobile backend platform",
        icon: <IoLogoFirebase />,
        color: "#FFA308",
      },
      {
        name: "AWS Amplify",
        desc: "Full-stack mobile development",
        icon: <FaAws />,
        color: "#F79B26",
      },
      {
        name: "GraphQL",
        desc: "Modern API query language",
        icon: <GrGraphQl />,
        color: "#E63BAE",
      },
      {
        name: "Express.js",
        desc: "Fast Node.js web framework",
        icon: <SiExpress />,
        color: "#F1C617",
      },
      {
        name: "Django REST",
        desc: "Python API framework",
        icon: <DiDjango />,
        color: "#113527",
      },
    ],
    database: [
      {
        name: "SQLite",
        desc: "Lightweight mobile database",
        icon: <SiSqlite />,
        color: "#4BA7DD",
      },
      {
        name: "Realm",
        desc: "Mobile-first database",
        icon: <SiRealm />,
        color: "#F25695",
      },
      {
        name: "Firebase Firestore",
        desc: "Cloud NoSQL database",
        icon: <DiFirebase />,
        color: "#FF9308",
      },
      {
        name: "Core Data",
        desc: "iOS data persistence",
        icon: <FaDatabase />,
        color: "#4B4B4B",
      },
      {
        name: "Room",
        desc: "Android SQLite abstraction",
        icon: <FaDatabase />,
        color: "#4EAA41",
      },
      {
        name: "MongoDB",
        desc: "Document-based database",
        icon: <SiMongodb />,
        color: "#5E993C",
      },
    ],
    tools: [
      {
        name: "Xcode",
        desc: "iOS development IDE",
        icon: <SiXcode />,
        color: "#2191EB",
      },
      {
        name: "Android Studio",
        desc: "Android development IDE",
        icon: <SiAndroidstudio />,
        color: "#49CB84",
      },
      {
        name: "VS Code",
        desc: "Lightweight code editor",
        icon: <VscVscode />,
        color: "#2BABF2",
      },
      {
        name: "Postman",
        desc: "API testing platform",
        icon: <SiPostman />,
        color: "#FF713D",
      },
      {
        name: "Git",
        desc: "Version control system",
        icon: <FaGitAlt />,
        color: "#F05639",
      },
      {
        name: "Figma",
        desc: "UI/UX design tool",
        icon: <FaFigma />,
        color: "#FF7667",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Technology Stack
        </h2>
        <p className="text-lg text-slate-400">
          Cutting-edge tools and frameworks for powerful mobile applications
        </p>
      </div>

      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        {Object.keys(techStacks).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-6 py-3 rounded-lg font-semibold capitalize transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
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
            className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:bg-slate-750 hover:border-cyan-500/50 transition"
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
  );
};

export default TechStack;
