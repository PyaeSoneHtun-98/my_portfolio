interface ExperienceCardProps {
  company: string;
  position: string;
  startDate: string;
  link: string;
  endDate: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, position, startDate, endDate, description, skills, link }) => {
  return (
    <div className=" p-4 md:p-6 rounded-lg dark:text-white">
      <div className="flex justify-between items-center mb-2">
        <a className="text-2xl font-bold cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">{company}</a>
        <span className="dark:text-gray-400 text-gray-600">{startDate} - {endDate}</span>
      </div>
      <h3 className="text-lg dark:text-cyan-400 text-cyan-500 mb-2">{position}</h3>
      <p className="mb-4 text-sm md:text-base">{description}</p>
      <div className="flex flex-wrap gap-2 pb-6">
        {skills.map((skill, index) => (
          <span key={index} className="bg-gray-800 text-gray-300 text-sm md:text-base px-2 py-1 rounded">{skill}</span>
        ))}
      </div>
      <div className="flex-grow border-t border-gray-700 pt-4"></div>
    </div>
  );
};

export default ExperienceCard;
