"use client";

import AboutSection from "../homepage/about";
import ContactSection from "../homepage/contact";
import Education from "../homepage/education";
import HeroSection from "../homepage/hero-section";
import Projects from "../homepage/projects";
import Skills from "../homepage/skills";
import GitCode from "../homepage/git-code";

export default function Structure() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <GitCode />
      <Education />
      <ContactSection />
    </>
  );
}
