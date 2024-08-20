import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import SpringModal from "../components/Modal.tsx";
import { useLanguageContext } from "../globals/Context.tsx";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  languages: string[];
  description: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, languages, description, demoLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ imageSrc: "", title: "", languages: [] as string[], description: "",demoLink: "" });
  const { langData } = useLanguageContext();


  const handleShareClick = () => {
    window.open(demoLink, '_blank');
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalData({ imageSrc, title, languages, description, demoLink });
    setIsOpen(true);
  };

  const handleImageClick = () => {
    setModalData({ imageSrc, title, languages, description, demoLink });
    setIsOpen(true);
  };

  return (
    <div className="p-4 rounded-lg shadow-lg w-full bg-white dark:bg-zinc-800">
      <div className="bg-white rounded-t-lg overflow-hidden" onClick={handleImageClick}>
        <img
          src={imageSrc}
          alt="Project Screenshot"
          className="w-full h-52 object-cover cursor-pointer"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center">
          <h2 className="text-xl text-white font-semibold">{title}</h2>
          <div className="flex-grow border-t border-gray-700 mx-3"></div>
          <CiShare1 className="text-white text-lg cursor-pointer active:scale-95 hover:scale-105" onClick={handleShareClick} />
        </div>

        <div className="flex space-x-2 mt-2">
          {languages.map((language, index) => (
            <span key={index} className="dark:text-indigo-300 text-indigo-500">{language}</span>
          ))}
        </div>
        <p className="dark:text-gray-400 text-sm md:text-base mt-2">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          {description.length > 100 && (
            <a className="dark:text-indigo-300 text-indigo-500 cursor-pointer" onClick={handleLearnMoreClick}>
              {langData.learn_more} &gt;
            </a>
          )}
        </p>
      </div>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} modalData={modalData} />
    </div>
  );
};

export default ProjectCard;
