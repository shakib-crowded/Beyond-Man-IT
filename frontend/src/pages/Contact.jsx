import React, { useState } from "react";

import Hero from "../components/common/Hero";
import Header from "../components/contact/Header";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import ContactSocialLink from "../components/contact/ContactSocialLink";
import CTA from "../components/contact/CTA";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto w-full">
          <Header />

          {/* Contact Info Cards */}
          <ContactInfo />

          {/* Main Content: Contact Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 sm:mb-16">
            {/* Contact Form */}
            <ContactForm />

            {/* Map & Additional Info */}
            <div className="flex flex-col gap-6">
              {/* Map */}

              <ContactMap />

              {/* Social Links */}
              <ContactSocialLink />
            </div>
          </div>

          {/* CTA Section */}
          <CTA />
        </div>
      </section>
    </section>
  );
};

export default Contact;
