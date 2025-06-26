import ExperienceCard from '../components/ExperienceCard';
import TitleWithLine from '../components/TitleWithLine'
import { useLanguageContext } from '../globals/Context';

const experienceData1 = {
  company: 'HQS - High Quality Service',
  link: 'https://www.hqsco.com',
  position: 'Frontend Developer',
  startDate: 'February 2024',
  endDate: 'Present',
  description: 'As a key member of the development team, I was responsible for building and maintaining a variety of major software projects, including an e-learning platform, a government e-library system, and an internal employee management application. My role involved developing new user-facing features, debugging and enhancing legacy systems for better performance, and writing comprehensive documentation to support project scalability.',
  skills: ['React', 'Typescript', 'Tawilwind', 'Git', 'Zustand', 'Vite', 'NextJs', 'Framer Motion'],
};


const Experience = () => {
  const { langData } = useLanguageContext();

  return (
    <div id='experience' className='px-4 md:px-12 xl:px-64 pb-12'>
        <TitleWithLine title={langData.experience} />
        <div className='flex flex-col gap-3'>
        <ExperienceCard {...experienceData1} />
        {/* <ExperienceCard {...experienceData1} />
        <ExperienceCard {...experienceData1} /> */}
        </div>
    </div>
  )
}

export default Experience