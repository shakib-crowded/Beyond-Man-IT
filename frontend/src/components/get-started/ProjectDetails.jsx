import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  IndianRupee,
  Users,
} from "lucide-react";
import { useContext } from "react";
import { GetStartedContext } from "../../pages/GetStarted";

const ProjectDetails = () => {
  const {
    currentStep,
    projectDetails,
    teamSizes,
    budgets,
    timelines,
    handleNext,
    handleBack,
    handleProjectDetailChange,
  } = useContext(GetStartedContext);

  return (
    <>
      {currentStep === 3 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Project Details
            </h2>
            <p className="text-lg text-slate-400">
              Help us understand your project scope and requirements
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Project Timeline
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {timelines.map((timeline) => (
                  <div
                    key={timeline.value}
                    onClick={() =>
                      handleProjectDetailChange("timeline", timeline.value)
                    }
                    className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                      projectDetails.timeline === timeline.value
                        ? "bg-purple-500/20 border-purple-500"
                        : "bg-slate-800 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-3xl"
                        style={{ color: timeline.color }}
                      >
                        {timeline.icon}
                      </span>
                      <span className="text-white font-semibold">
                        {timeline.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <IndianRupee className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Project Budget</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {budgets.map((budget) => (
                  <div
                    key={budget.value}
                    onClick={() =>
                      handleProjectDetailChange("budget", budget.value)
                    }
                    className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                      projectDetails.budget === budget.value
                        ? "bg-purple-500/20 border-purple-500"
                        : "bg-slate-800 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-3xl"
                        style={{ color: budget.color }}
                      >
                        {budget.icon}
                      </span>
                      <span className="text-white font-semibold">
                        {budget.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">
                  Team Size Preference
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {teamSizes.map((team) => (
                  <div
                    key={team.value}
                    onClick={() =>
                      handleProjectDetailChange("teamSize", team.value)
                    }
                    className={`p-6 rounded-xl border-2 cursor-pointer transition ${
                      projectDetails.teamSize === team.value
                        ? "bg-purple-500/20 border-purple-500"
                        : "bg-slate-800 border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" style={{ color: team.color }}>
                        {team.icon}
                      </span>
                      <span className="text-white font-semibold">
                        {team.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={handleBack}
                className="cursor-pointer px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={
                  !projectDetails.timeline ||
                  !projectDetails.budget ||
                  !projectDetails.teamSize
                }
                className={`cursor-pointer flex-1 px-8 py-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  projectDetails.timeline &&
                  projectDetails.budget &&
                  projectDetails.teamSize
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-700 hover:to-fuchsia-700"
                    : "bg-slate-700 text-slate-500 cursor-not-allowed"
                }`}
              >
                Continue
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
