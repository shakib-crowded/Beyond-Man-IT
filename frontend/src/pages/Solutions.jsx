import React, { useState } from "react";
import { Zap, Users, TrendingUp, Award } from "lucide-react";
import Hero from "../components/common/Hero";
import Header from "../components/solutions/Header";
import CTA from "../components/solutions/CTA";
import Projects from "../components/solutions/Projects";

const Solutions = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive e-commerce solution with advanced inventory management, payment integration, and real-time analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: [
        { icon: Users, label: "50K+", subtitle: "Active Users" },
        { icon: TrendingUp, label: "300%", subtitle: "Revenue Growth" },
        { icon: Zap, label: "99.9%", subtitle: "Uptime" },
      ],
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "Patient management system with telemedicine capabilities, appointment scheduling, and secure health records storage.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "AWS", "WebRTC"],
      results: [
        { icon: Users, label: "100K+", subtitle: "Downloads" },
        { icon: Award, label: "4.8/5", subtitle: "App Rating" },
        { icon: TrendingUp, label: "85%", subtitle: "User Retention" },
      ],
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      title: "Enterprise Security Suite",
      category: "Cybersecurity",
      description:
        "Complete cybersecurity solution with threat detection, vulnerability scanning, and compliance management for enterprise clients.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      technologies: ["Python", "Docker", "Kubernetes", "ELK Stack"],
      results: [
        { icon: Zap, label: "99.99%", subtitle: "Threat Detection" },
        { icon: Users, label: "500+", subtitle: "Companies Secured" },
        { icon: Award, label: "ISO 27001", subtitle: "Certified" },
      ],
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: 4,
      title: "AI-Powered CRM System",
      category: "Software Development",
      description:
        "Intelligent customer relationship management with predictive analytics, automated workflows, and AI-driven insights.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      results: [
        { icon: TrendingUp, label: "45%", subtitle: "Sales Increase" },
        { icon: Zap, label: "60%", subtitle: "Time Saved" },
        { icon: Users, label: "10K+", subtitle: "Daily Users" },
      ],
      gradient: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      <Hero
        heading={"Empowering Ideas into "}
        keyword={"Solutions"}
        description={
          "We build fast, secure, and scalable digital solutions to help your business succeed."
        }
        btnText={"Explore Our Solutions"}
        path={"/solutions/#our-solutions"}
      />
      <section
        id="our-solutions"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <Header />
        <Projects projects={projects} setActiveProject={setActiveProject} />
        <CTA />
      </section>
    </section>
  );
};

export default Solutions;
