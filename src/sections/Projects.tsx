import ProjectCard from "../components/ProjectCard"
import TitleWithLine from "../components/TitleWithLine"
import PH from '../assets/free-nature-images.jpg'
import { useLanguageContext } from "../globals/Context";

const Projects = () => {
  const { langData } = useLanguageContext();

  return (
    <div className="px-4 md:px-12 xl:px-64 pb-12 ">
        <TitleWithLine title={langData.projects} />
        <div className="md:grid grid-cols-2 gap-3 space-y-4 md:space-y-0">
        <ProjectCard 
        imageSrc={PH} 
        title="Paint.app" 
        languages={["Flutter", "- MUI -", "Python", "- FastAPI"]} 
        description="A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own." 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <ProjectCard 
        imageSrc={PH} 
        title="Another Project" 
        languages={["React", "- TypeScript", "- Node.js"]} 
        description="This is another project that I have built with modern web technologies.This is another project that I have built with modern web technologies." 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      />
      <ProjectCard 
        imageSrc={PH} 
        title="Paint.app" 
        languages={["Flutter", "- MUI -", "Python", "- FastAPI"]} 
        description="A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own." 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      />
      <ProjectCard 
        imageSrc={PH} 
        title="Another Project" 
        languages={["React", "- TypeScript", "- Node.js"]} 
        description="This is another project that I have built with modern web technologies." 
        demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      />
        </div>
    </div>
  )
}

export default Projects