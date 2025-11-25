import React, { useState } from "react";

import Header from "../components/about/Header";
import Hero from "../components/common/Hero";
import AboutHero from "../components/about/AboutHero";
import Stats from "../components/about/Stats";
import TwoTab from "../components/about/TwoTab";
import CoreValues from "../components/about/CoreValues";
import Team from "../components/about/Team";
import TimeLine from "../components/about/Timeline";
import CTA from "../components/about/CTA";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      <section
        id="about-us"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <Header />
        <AboutHero />

        <Stats />
        <TwoTab />

        <CoreValues />
        <Team />
        {/* <TimeLine /> */}
        <CTA />
      </section>
    </section>
  );
};

export default AboutUs;
