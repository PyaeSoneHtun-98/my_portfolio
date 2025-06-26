import ProjectCard from "../components/ProjectCard"
import TitleWithLine from "../components/TitleWithLine"
import PH from '../assets/free-nature-images.jpg'
import Terminalx from '../assets/terminalx.png'
import EC from '../assets/ec.png'
import NumberApp from '../assets/number-app.png'
import { useLanguageContext } from "../globals/Context";

const Projects = () => {
  const { langData } = useLanguageContext();

  return (
    <div className="px-4 md:px-12 xl:px-64 pb-12 ">
        <TitleWithLine title={langData.projects} />
        <div className="md:grid grid-cols-2 gap-3 space-y-4 md:space-y-0">
        <ProjectCard 
        imageSrc={NumberApp} 
        title="Custom 2D Results Platform" 
        languages={["React", "- Typescript -", "Tailwind", "- Firebase"]} 
        description="I developed this full-stack application to create a safe and controlled lottery results environment for a family member. The user-facing side is fully localized in the Burmese language and includes multiple themes for a personalized experience. The app features a private admin dashboard for setting the daily winning numbers and viewing user feedback sent through an integrated reporting feature. Firebase Realtime Database is used to ensure winning numbers are updated instantly for the user."
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <ProjectCard 
        imageSrc={Terminalx} 
        title=" TerminalX - Video Editor Portfolio" 
        languages={["React", "- TypeScript", "- Threejs -", "Tailwind", "- Framer Motion"]} 
        description="A visually striking portfolio website designed for 'TerminalX', a professional video editor. The site is built to make a strong first impression, featuring a dynamic and interactive 3D model on the homepage created with Three.js. This project showcases the ability to build a unique, brand-focused website that helps a creative professional stand out. The site is fully responsive and uses smooth animations to ensure a polished and modern user experience" 
        demoLink="https://www.terminalx.vercel.app/"

      />
      <ProjectCard 
        imageSrc={EC} 
        title="Agricultural Loan Management System" 
        languages={["ReactJs", "- ExpressJs -", "MySQL", "- NodeJs"]} 
        description="A full-stack application built to solve a real-world business need for a local agricultural shop. This system allows the owner to track customer loans, manage payment histories, and automatically calculate interest based on custom rates and timeframes. It features a secure, role-based authentication system to ensure data privacy. The backend is powered by Express.js and a MySQL database, demonstrating the ability to build and manage a complete, data-driven business tool from the ground up" 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      />
      <ProjectCard 
        imageSrc={PH} 
        title="Cute U Wear - E-Commerce Platform" 
        languages={["Laravel", "- PHP", "- MySQL -", "Blade", "- Bootstrap"]} 
        description="A complete e-commerce platform built from the ground up with Laravel. The application provides a seamless shopping experience for customers and a powerful, secure admin dashboard for the business owner. Key features include role-based authentication (admin/user), product and category management, a user review and comment system, and advanced user administration tools. This project demonstrates a strong understanding of full-stack development, database design, and the MVC architecture that powers modern web applications." 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      />
        </div>
    </div>
  )
}

export default Projects