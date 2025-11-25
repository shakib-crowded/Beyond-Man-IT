import { useState } from "react";
import {
  FaGlobe,
  FaLock,
  FaNewspaper,
  FaRegEye,
  FaShieldAlt,
  FaShieldVirus,
  FaUnlockAlt,
} from "react-icons/fa";
import { GiFirewall } from "react-icons/gi";
import { CiDatabase } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { IoNewspaper } from "react-icons/io5";
import { TbRibbonHealth } from "react-icons/tb";
import { LiaNewspaper } from "react-icons/lia";
import { MdPhishing } from "react-icons/md";
import {
  SiBurpsuite,
  SiMetasploit,
  SiSplunk,
  SiWireshark,
} from "react-icons/si";
import { GrCompliance, GrThreats } from "react-icons/gr";
import { IoIosWarning, IoMdQrScanner } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("security");

  const techStacks = {
    security: [
      {
        name: "Penetration Testing",
        desc: "Ethical hacking and vulnerability assessment",
        icon: <FaShieldAlt />,
        color: "#96C3F7",
      },
      {
        name: "SIEM Solutions",
        desc: "Security information & event management",
        icon: <FaShieldVirus />,
        color: "#154588",
      },
      {
        name: "Firewalls",
        desc: "Next-gen firewall configuration",
        icon: <GiFirewall />,
        color: "#FF9712",
      },
      {
        name: "IDS/IPS",
        desc: "Intrusion detection & prevention systems",
        icon: <CiDatabase />,
        color: "#7CA348",
      },
      {
        name: "EDR Solutions",
        desc: "Endpoint detection and response",
        icon: <FaGlobe />,
        color: "#0B4EB0",
      },
      {
        name: "WAF",
        desc: "Web application firewall protection",
        icon: <CgWebsite />,
        color: "#42B6C6",
      },
    ],
    compliance: [
      {
        name: "ISO 27001",
        desc: "Information security management",
        icon: <IoNewspaper />,
        color: "#ffffff",
      },
      {
        name: "GDPR",
        desc: "Data protection regulation compliance",
        icon: <FaNewspaper />,
        color: "#08399C",
      },
      {
        name: "HIPAA",
        desc: "Healthcare data security standards",
        icon: <TbRibbonHealth />,
        color: "#70D0EF",
      },
      {
        name: "PCI DSS",
        desc: "Payment card industry standards",
        icon: <LiaNewspaper />,
        color: "#02757A",
      },
      {
        name: "SOC 2",
        desc: "Service organization controls",
        icon: <GrCompliance />,
        color: "#08518B",
      },
      {
        name: "NIST",
        desc: "Cybersecurity framework",
        icon: <FaUnlockAlt />,
        color: "#3DB550",
      },
    ],
    tools: [
      {
        name: "Metasploit",
        desc: "Penetration testing framework",
        icon: <SiMetasploit />,
        color: "#296692",
      },
      {
        name: "Wireshark",
        desc: "Network protocol analyzer",
        icon: <SiWireshark />,
        color: "#1163D5",
      },
      {
        name: "Nmap",
        desc: "Network discovery and security auditing",
        icon: <FaRegEye />,
        color: "#81BCD4",
      },
      {
        name: "Burp Suite",
        desc: "Web application security testing",
        icon: <SiBurpsuite />,
        color: "#FF6B39",
      },
      {
        name: "Splunk",
        desc: "Security analytics platform",
        icon: <SiSplunk />,
        color: "#EF177D",
      },
      {
        name: "Nessus",
        desc: "Vulnerability scanner",
        icon: <IoMdQrScanner />,
        color: "#16A9B7",
      },
    ],
    threats: [
      {
        name: "Ransomware",
        desc: "Protection against data encryption attacks",
        icon: <FaLock />,
        color: "#DF0808",
      },
      {
        name: "Phishing",
        desc: "Email and social engineering defense",
        icon: <MdPhishing />,
        color: "#AA0B0D",
      },
      {
        name: "DDoS",
        desc: "Distributed denial of service mitigation",
        icon: <FaComputer />,
        color: "#F30808",
      },
      {
        name: "Malware",
        desc: "Advanced threat protection",
        icon: <FaShieldVirus />,
        color: "#FF5D35",
      },
      {
        name: "Zero-Day",
        desc: "Unknown vulnerability protection",
        icon: <IoIosWarning />,
        color: "#F74044",
      },
      {
        name: "Insider Threats",
        desc: "Internal risk management",
        icon: <GrThreats />,
        color: "#9F1814",
      },
    ],
  };

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Security Arsenal
          </h2>
          <p className="text-lg text-slate-400">
            Industry-leading tools and frameworks to keep your organization
            secure
          </p>
        </div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {Object.keys(techStacks).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-6 py-3 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30"
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
              className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:bg-slate-750 hover:border-red-500/50 transition"
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
