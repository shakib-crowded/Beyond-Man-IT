import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  IndianRupee,
  Users,
  Zap,
} from "lucide-react";
import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { GetStartedContext } from "../../pages/GetStarted";
import ContactForm from "../get-started/ContactForm";

const ReviewProject = () => {
  const {
    currentStep,
    selectedService,
    selectedFeatures,
    timelines,
    budgets,
    teamSizes,
    projectDetails,
    handleBack,
    showContactForm,
    setShowContactForm,
    verified,
    setVerified,
  } = useContext(GetStartedContext);

  return showContactForm ? (
    <ContactForm verified={verified} />
  ) : (
    currentStep === 4 && (
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Review Your Project
          </h2>
          <p className="text-lg text-slate-400">
            Review your selections and submit your project request
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-6`}>
              <div className="flex items-center gap-4">
                <div className="text-white">{selectedService.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-white/80">{selectedService.description}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Selected Features ({selectedFeatures.length})
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-6">
              Project Specifications
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Timeline</span>
                </div>
                <span className="text-white font-semibold">
                  {
                    timelines.find((t) => t.value === projectDetails.timeline)
                      ?.label
                  }
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Budget</span>
                </div>
                <span className="text-white font-semibold">
                  {
                    budgets.find((b) => b.value === projectDetails.budget)
                      ?.label
                  }
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-300">Team Size</span>
                </div>
                <span className="text-white font-semibold">
                  {
                    teamSizes.find((t) => t.value === projectDetails.teamSize)
                      ?.label
                  }
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  What Happens Next?
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Our team will review your requirements within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    You will receive a detailed proposal and cost estimate
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Schedule a free consultation call with our experts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Get a custom roadmap tailored to your project
                  </li>
                </ul>
              </div>
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
              onClick={() => {
                setShowContactForm(true);
              }}
              className="cursor-pointer flex-1 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-fuchsia-700 transition shadow-lg flex items-center justify-center gap-2"
            >
              <FaCheck className="w-5 h-5" />
              Submit Your Details
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ReviewProject;
