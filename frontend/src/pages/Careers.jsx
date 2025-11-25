import React, { useState } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Heart,
  Award,
  Coffee,
  Code,
  Rocket,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Upload,
  X,
} from "lucide-react";

import Hero from "../components/careers/Hero";
import Stats from "../components/careers/Stats";
import WhyWorkWithUs from "../components/careers/WhyWorkWithUs";
import OpenPostions from "../components/careers/OpenPositions";
import CTA from "../components/careers/CTA";
import Form from "../components/careers/Form";

const Careers = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats />

      {/* Why Work With Us */}
      <WhyWorkWithUs />

      {/* Open Positions */}
      <OpenPostions handleApplyClick={handleApplyClick} />

      {showApplicationForm && (
        <Form
          selectedJob={selectedJob}
          setShowApplicationForm={setShowApplicationForm}
        />
      )}

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Careers;
