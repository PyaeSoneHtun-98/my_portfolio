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

  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (section: string) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = [
      { section: "about", ref: aboutRef },
      { section: "projects", ref: projectsRef },
      { section: "experience", ref: experienceRef },
      { section: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Adjusted threshold value to 0.3
    );

    sections.forEach(({ ref, section }) => {
      if (ref.current) {
        ref.current.id = section; // Add id to the element
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
    </div>
  );
}

export default App;
