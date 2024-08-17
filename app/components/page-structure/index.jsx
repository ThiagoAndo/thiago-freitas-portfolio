"use client";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "@/store";
import AboutSection from "../homepage/about";
import ContactSection from "../homepage/contact";
import Education from "../homepage/education";
import HeroSection from "../homepage/hero-section";
import Projects from "../homepage/projects";
import Skills from "../homepage/skills";
import GitCode from "../homepage/git-code";
import { Suspense, lazy } from "react";
import { DisplacementSphere } from "../sphere-vertex.jsx/displacement-sphere";


export default function Structure() {
  const position = useSelector((state) => state.position);
  const navbar = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  function click() {
    dispatch(uiActions.alterPosition({ position: 0 }));
  }

  return (
    <>
        <DisplacementSphere />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Education />
      <GitCode />
      <ContactSection />
    </>
  );
}
