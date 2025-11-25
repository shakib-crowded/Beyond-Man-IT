import { useState } from "react";
import { Target, Eye, CheckCircle } from "lucide-react";
import Mission from "./Mission";
import Vision from "./Vision";

const TwoTab = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
      {/* Mission & Vision Tabs */}
      <div className="mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <button
            onClick={() => setActiveTab("mission")}
            className={`cursor-pointer flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "mission"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
            }`}
          >
            <Target className="w-5 h-5" />
            <span className="text-sm sm:text-base">Our Mission</span>
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`cursor-pointer flex-1 flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "vision"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
            }`}
          >
            <Eye className="w-5 h-5" />
            <span className="text-sm sm:text-base">Our Vision</span>
          </button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-700">
          {activeTab === "mission" ? <Mission /> : <Vision />}
        </div>
      </div>
    </>
  );
};

export default TwoTab;
