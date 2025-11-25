import { GiTreasureMap, GiUpgrade } from "react-icons/gi";
import {
  FaChartBar,
  FaCheck,
  FaDigitalOcean,
  FaFingerprint,
  FaRobot,
} from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import { RiGovernmentFill } from "react-icons/ri";
import { MdDevicesOther, MdOutlineRestartAlt } from "react-icons/md";
import { IoIosCloud } from "react-icons/io";
import { GiMeshNetwork } from "react-icons/gi";
import { GrConnect, GrServers } from "react-icons/gr";
import { FcDataRecovery } from "react-icons/fc";
import { BsBuildingsFill, BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { RiDatabaseFill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { TbAutomation } from "react-icons/tb";
import { useState } from "react";

const Expertise = () => {
  const [activeTab, setActiveTab] = useState("strategy");

  const expertiseAreas = {
    strategy: [
      {
        name: "Digital Transformation",
        desc: "Modernize operations with digital technologies",
        icon: <FaDigitalOcean />,
        color: "#59ACF9",
      },
      {
        name: "IT Roadmap Planning",
        desc: "Strategic technology roadmap development",
        icon: <GiTreasureMap />,
        color: "#0EA65E",
      },
      {
        name: "Technology Assessment",
        desc: "Evaluate current IT infrastructure",
        icon: <FaChartBar />,
        color: "#96C3F7",
      },
      {
        name: "Business Process Optimization",
        desc: "Streamline workflows and operations",
        icon: <FcElectricity />,
        color: "#FB8E48",
      },
      {
        name: "IT Governance",
        desc: "Establish policies and best practices",
        icon: <RiGovernmentFill />,
        color: "#87B6F7",
      },
      {
        name: "Change Management",
        desc: "Guide organizational transformation",
        icon: <MdOutlineRestartAlt />,
        color: "#00993B",
      },
    ],
    infrastructure: [
      {
        name: "Cloud Strategy",
        desc: "Multi-cloud and hybrid cloud planning",
        icon: <IoIosCloud />,
        color: "#1DA1C0",
      },
      {
        name: "Network Architecture",
        desc: "Design scalable network solutions",
        icon: <GiMeshNetwork />,
        color: "#25447D",
      },
      {
        name: "Data Center Optimization",
        desc: "Improve efficiency and performance",
        icon: <GrServers />,
        color: "#4F65AB",
      },
      {
        name: "Disaster Recovery",
        desc: "Business continuity planning",
        icon: <FcDataRecovery />,
        color: "#D1C4E9",
      },
      {
        name: "Infrastructure Audit",
        desc: "Comprehensive system evaluation",
        icon: <BsBuildingsFill />,
        color: "#466480",
      },
      {
        name: "Capacity Planning",
        desc: "Resource optimization and scaling",
        icon: <BsGraphUpArrow />,
        color: "#2EABCD",
      },
    ],
    enterprise: [
      {
        name: "ERP Implementation",
        desc: "Enterprise resource planning systems",
        icon: <FaFingerprint />,
        color: "#336AEA",
      },
      {
        name: "CRM Solutions",
        desc: "Customer relationship management",
        icon: <AiOutlineTeam />,
        color: "#553685",
      },
      {
        name: "System Integration",
        desc: "Connect disparate systems seamlessly",
        icon: <GrConnect />,
        color: "#E89020",
      },
      {
        name: "Legacy Modernization",
        desc: "Upgrade outdated systems",
        icon: <GiUpgrade />,
        color: "#0790F6",
      },
      {
        name: "API Strategy",
        desc: "Design integration architecture",
        icon: <IoSettingsOutline />,
        color: "#EA5B2B",
      },
      {
        name: "Vendor Selection",
        desc: "Choose the right technology partners",
        icon: <FaCheck />,
        color: "#00FF00",
      },
    ],
    innovation: [
      {
        name: "AI & Machine Learning",
        desc: "Implement intelligent automation",
        icon: <FaRobot />,
        color: "#CFB9DA",
      },
      {
        name: "IoT Solutions",
        desc: "Internet of Things strategy",
        icon: <MdDevicesOther />,
        color: "#00B5CD",
      },
      {
        name: "Blockchain Consulting",
        desc: "Distributed ledger technologies",
        icon: <SiHiveBlockchain />,
        color: "#C01B97",
      },
      {
        name: "Big Data Analytics",
        desc: "Data-driven decision making",
        icon: <RiDatabaseFill />,
        color: "#3992E2",
      },
      {
        name: "DevOps Transformation",
        desc: "Implement CI/CD pipelines",
        icon: <VscAzureDevops />,
        color: "#0173D0",
      },
      {
        name: "Automation Strategy",
        desc: "Process automation planning",
        icon: <TbAutomation />,
        color: "#00D3D2",
      },
    ],
  };

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Expertise Areas
          </h2>
          <p className="text-lg text-slate-400">
            Deep knowledge across all aspects of IT consulting
          </p>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {Object.keys(expertiseAreas).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-3 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas[activeTab].map((area, idx) => (
            <div
              key={idx}
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:bg-slate-750 hover:border-emerald-500/50 transition"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" style={{ color: area.color }}>
                  {area.icon}
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{area.name}</h4>
                  <p className="text-sm text-slate-400">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
