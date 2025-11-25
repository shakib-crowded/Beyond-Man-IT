import React, { createContext, useState } from "react";

import { Md10K, MdFastForward } from "react-icons/md";
import { PiMoneyBold, PiMoneyWavy } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { BsBuildingFill } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import Hero from "../components/get-started/Hero";
import Services from "../components/get-started/Services";
import Features from "../components/get-started/Features";
import ProjectDetails from "../components/get-started/ProjectDetails";
import ReviewProject from "../components/get-started/ReviewProject";
import {
  Briefcase,
  Code,
  Database,
  Globe,
  Shield,
  Smartphone,
} from "lucide-react";

export const GetStartedContext = createContext();

const GetStarted = () => {
  const [verified, setVerified] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    timeline: "",
    budget: "",
    teamSize: "",
  });

  const timelines = [
    {
      value: "1-2months",
      label: "1-2 Months",
      icon: <MdFastForward />,
      color: "#54478C",
    },
    {
      value: "3-6months",
      label: "3-6 Months",
      icon: <CiCalendar />,
      color: "#048BA8",
    },
    {
      value: "6-12months",
      label: "6-12 Months",
      icon: <FaRegCalendarAlt />,
      color: "#16DB93",
    },
    {
      value: "12+months",
      label: "12+ Months",
      icon: <IoCalendar />,
      color: "#83E377",
    },
  ];

  const budgets = [
    {
      value: "under10k",
      label: "Under 10,000 Rs.",
      icon: <Md10K />,
      color: "#94EDE6",
    },
    {
      value: "10k-30k",
      label: "10,000 - 30,000 Rs.",
      icon: <PiMoneyWavy />,
      color: "#5D50A1",
    },
    {
      value: "30k-50k",
      label: "30,000 - 50,000 Rs.",
      icon: <PiMoneyBold />,
      color: "#E2B467",
    },
    {
      value: "50k+",
      label: "50,000 - 1,00,000 Rs.",
      icon: <FaMoneyBills />,
      color: "#A3AD90",
    },
  ];

  const teamSizes = [
    {
      value: "small",
      label: "Small Team (2-4)",
      icon: <AiOutlineTeam />,
      color: "#F8B337",
    },
    {
      value: "medium",
      label: "Medium Team (5-10)",
      icon: <RiTeamFill />,
      color: "#32A5FE",
    },
    {
      value: "large",
      label: "Large Team (10+)",
      icon: <BsBuildingFill />,
      color: "#94D035",
    },
    {
      value: "enterprise",
      label: "Enterprise Scale",
      icon: <BsFillBuildingsFill />,
      color: "#F43528",
    },
  ];

  const services = [
    {
      id: "app",
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform (React Native/Flutter)",
        "App Store Optimization",
        "Push Notifications",
        "In-App Purchases",
        "Offline Mode",
        "Real-time Features",
      ],
    },
    {
      id: "web",
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive, and scalable web applications",
      gradient: "from-purple-600 to-indigo-600",
      features: [
        "Custom Web Applications",
        "E-commerce Platform",
        "Progressive Web Apps",
        "CMS Development",
        "API Integration",
        "SEO Optimization",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      id: "software",
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Enterprise-grade custom software solutions",
      gradient: "from-pink-600 to-purple-600",
      features: [
        "Custom Software",
        "SaaS Development",
        "Desktop Applications",
        "Microservices Architecture",
        "Legacy System Migration",
        "Third-party Integration",
        "Database Design",
        "Cloud Deployment",
      ],
    },
    {
      id: "security",
      icon: <Shield className="w-12 h-12" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions and audits",
      gradient: "from-red-600 to-pink-600",
      features: [
        "Security Assessment",
        "Penetration Testing",
        "24/7 Monitoring",
        "Compliance Audits",
        "Network Security",
        "Data Encryption",
        "Incident Response",
        "Security Training",
      ],
    },
    {
      id: "consulting",
      icon: <Briefcase className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic technology guidance and planning",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "IT Strategy",
        "Digital Transformation",
        "Technology Assessment",
        "Cloud Migration",
        "Process Optimization",
        "Vendor Selection",
        "Risk Management",
        "Change Management",
      ],
    },
    {
      id: "data",
      icon: <Database className="w-12 h-12" />,
      title: "Data Solutions",
      description: "Big data, analytics, and AI/ML solutions",
      gradient: "from-orange-600 to-amber-600",
      features: [
        "Data Analytics",
        "Business Intelligence",
        "Machine Learning",
        "Data Warehousing",
        "Predictive Analytics",
        "Data Visualization",
        "ETL Pipelines",
        "AI Integration",
      ],
    },
  ];
  const [showContactForm, setShowContactForm] = useState(false);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleProjectDetailChange = (field, value) => {
    setProjectDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep === 2 && selectedFeatures.length > 0) {
      setCurrentStep(3);
    } else if (
      currentStep === 3 &&
      projectDetails.timeline &&
      projectDetails.budget &&
      projectDetails.teamSize
    ) {
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (formData) => {
    const { title } = selectedService;
    const features = selectedFeatures;
    const { timeline, budget, teamSize } = projectDetails;

    const { fullName, email, phone, location } = formData;

    const project = {
      title,
      features,
      timeline,
      budget,
      teamSize,
      fullName,
      email,
      phone,
      location,
    };

    const response = await fetch("http://localhost:5000/submit-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    if (response.ok && response.status === 200) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  return (
    <GetStartedContext.Provider
      value={{
        currentStep,
        projectDetails,
        budgets,
        timelines,
        teamSizes,
        selectedService,
        selectedFeatures,
        services,
        showContactForm,
        verified,
        setVerified,
        setShowContactForm,
        handleServiceSelect,
        handleFeatureToggle,
        handleBack,
        handleNext,
        handleProjectDetailChange,
        handleSubmit,
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <Hero />
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Services Section */}
          <Services />
          {/* Features Section */}
          <Features />
          {/* Project Details */}
          <ProjectDetails />
          {/* Review Project */}
          <ReviewProject />
        </div>
      </div>
    </GetStartedContext.Provider>
  );
};

export default GetStarted;
