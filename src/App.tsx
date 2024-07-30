import { useRef, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    about: aboutRef,
    projects: projectsRef,
    experience: experienceRef,
    contact: contactRef,
  };

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust the threshold for when the section is considered to be in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div ref={aboutRef} id="about">
        <About />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
    </div>
  );
}

export default App;
