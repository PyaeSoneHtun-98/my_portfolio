import { useRef, useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true; // Default to dark mode
  });
  

  const [activeSection, setActiveSection] = useState<string>("about");

  const scrollToSection = (section: string) => {
    if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "auto" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "auto" });
    } else if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "auto" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "auto" });
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
      { threshold: 0.3 }
    );

    sections.forEach(({ ref, section }) => {
      if (ref.current) {
        ref.current.id = section;
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

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", JSON.stringify(!prevMode));
      return !prevMode;
    });
  };


  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} ${darkMode ? 'bg-[#18181B]' : 'bg-[#F0F2F5]'}`}>
      <div className="flex gap-3 absolute items-center top-3 w-full justify-end pr-4">
        <LanguageSwitcher />
        <button className="active:scale-90 ease-in-out duration-300 flex items-center justify-center h-8 w-8 md:w-auto md:h-auto dark:bg-zinc-800 bg-indigo-400 md:p-4 rounded-full" onClick={toggleDarkMode}>
          {darkMode ? <IoSunny className="w-3 lg:w-auto text-[#E3C851]" /> : <FaMoon className="w-3 lg:w-auto text-white" />}
        </button>
      </div>
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
