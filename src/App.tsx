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
      { section: "experience", ref: experienceRef },
      { section: "projects", ref: projectsRef },
      { section: "contact", ref: contactRef },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActiveSection("contact");
        return;
      }

      // For other sections
      for (const { section, ref } of sections) {
        if (ref.current) {
          const element = ref.current;
          const { top } = element.getBoundingClientRect();
          const absoluteTop = scrollPosition + top;
          
          if (scrollPosition >= absoluteTop - windowHeight/2) {
            setActiveSection(section);
          }
        }
      }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
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
        <button
          className="relative active:scale-90 ease-in-out duration-300 flex items-center shadow-md dark:shadow-white justify-center h-8 w-8 md:w-12 md:h-12 dark:bg-zinc-800 bg-indigo-400 md:p-4 rounded-full"
          onClick={toggleDarkMode}
        >
          <span
            className={`absolute transition-transform duration-700 ease-in-out transform ${darkMode ? "rotate-180 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
          >
            <IoSunny className="w-3 lg:w-auto text-[#ffd931]" />
          </span>

          <span
            className={`absolute transition-transform duration-700 ease-in-out transform ${!darkMode ? "-rotate-[360deg] scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
          >
            <FaMoon className="w-3 lg:w-auto text-white" />
          </span>
        </button>
      </div>
      <div className="flex flex-col flex-grow">
        <div ref={aboutRef} id="about" className="min-h-screen">
          <About />
        </div>
        <div ref={experienceRef} id="experience" className="min-h-fit">
          <Experience />
        </div>
        <div ref={projectsRef} id="projects" className="min-h-fit">
          <Projects />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
      <Navigation scrollToSection={scrollToSection} activeSection={activeSection} />
    </div>
  );
}

export default App;
