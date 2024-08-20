import ExperienceCard from '../components/ExperienceCard';
import TitleWithLine from '../components/TitleWithLine'
import { useLanguageContext } from '../globals/Context';

const experienceData1 = {
  company: 'Google',
  position: 'Software Engineer',
  startDate: '2022',
  endDate: 'Present',
  description: 'I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.',
  skills: ['Angular', 'Python', 'GCP', 'Git', 'GitHub', 'Java', 'Golang', 'K8s'],
};


const Experience = () => {
  const { langData } = useLanguageContext();

  return (
    <div className='px-4 md:px-12 xl:px-64 py-12'>
        <TitleWithLine title={langData.experience} />
        <div className='flex flex-col gap-3'>
        <ExperienceCard {...experienceData1} />
        <ExperienceCard {...experienceData1} />
        <ExperienceCard {...experienceData1} />
        </div>
    </div>
  )
}

export default Experience