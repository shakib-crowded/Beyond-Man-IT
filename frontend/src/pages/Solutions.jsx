import React, { useState } from "react";
import { Zap, Users, TrendingUp, Newspaper } from "lucide-react";
import Hero from "../components/common/Hero";
import Header from "../components/solutions/Header";
import CTA from "../components/solutions/CTA";
import Projects from "../components/solutions/Projects";

const Solutions = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      category: "Web Development",
      description:
        "An E-Learning platform where you can master programming, web development, app development, and many other in-demand skills.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["EJS", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
      results: [
        { icon: Users, label: "10K+", subtitle: "Active Readers" },
        { icon: Newspaper, label: "300+", subtitle: "Articles" },
        { icon: Zap, label: "99.9%", subtitle: "Uptime" },
      ],
      gradient: "from-blue-600 to-cyan-600",
      demoLink: "https://beyondman.dev/",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive e-commerce outfit store with advanced inventory management, payment integration, and real-time analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1625698311031-f0dd15be5144?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Tailwind", "Node.js", "MongoDB", "RazorPay"],
      results: [
        { icon: Users, label: "10K+", subtitle: "Active Users" },
        { icon: TrendingUp, label: "200%", subtitle: "Revenue Growth" },
        { icon: Zap, label: "99.9%", subtitle: "Uptime" },
      ],
      gradient: "from-blue-600 to-cyan-600",
      demoLink: "https://funkystitch.in/",
    },
    {
      id: 3,
      title: "Travel and Tour",
      category: "Website Development",
      description:
        "A seamless tour and travel platform that empowers users to explore and book travel experiences anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JS", "Node.js", "Express.js", "MongoDB"],
      results: [
        { icon: Users, label: "20K+", subtitle: "Clients" },
        { icon: TrendingUp, label: "300%", subtitle: "Revenue Growth" },
        { icon: Zap, label: "99.9%", subtitle: "Uptime" },
      ],
      gradient: "from-blue-600 to-cyan-600",
      demoLink: "https://travel-and-tour-u5eo.onrender.com/",
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
