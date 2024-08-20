import WaterDropGrid from "../components/WaterDropGrid";
import TitleWithLine from "../components/TitleWithLine";
import ReactIcon from "../assets/react.svg";
import TailwindIcon from "../assets/tailwind.svg";
import TSIcon from "../assets/typescript.svg";
import HTMLIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import JsIcon from "../assets/js.svg";
import FramerIcon from "../assets/framer.svg";
import GqlIcon from "../assets/gql.svg";
import PhpIcon from "../assets/php.svg";
import MantineIcon from "../assets/mantine.svg";
import { Tooltip } from "react-tooltip";
import { useLanguageContext } from "../globals/Context";
import { MdOutlineHomeWork } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";

const About = () => {
  const { langData } = useLanguageContext();

  return (
    <div className="px-4 md:px-12 xl:px-64 pt-20" >
      <WaterDropGrid />
      <TitleWithLine title={langData.about} />
      <div className="md:flex w-full text-sm md:text-base md:gap-2 space-y-4 md:space-y-0">
        <div className="dark:text-white md:w-2/3 text-justify md:leading-relaxed">
          <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
            H
          </span>
          ey! I'm <span className="text-lg font-bold text-indigo-500">{langData.name}</span>, if you haven't already gathered that by now. I'm a
          painter turned software engineer from Daytona, Florida. I specialize
          in the backend, primarily Node and Rust, but love building with
          whatever tools are right for the job. I currently work for Google on
          Google Photos. I also toss in my $2 with the design systems teams from
          time to time (once an artist, always an artist, amirite?). Outside of
          work, I still love to paint. Any given Sunday you'll find me
          scribbling some happy clouds with my son I even teach courses online
          if you're looking to learn! I'm passively looking for new positions
          where I can merge my love for code with my love for the canvas. If you
          think you've got an opening that I might like, let's connect
        </div>
        <div className="md:px-4">
          <div className="dark:text-white flex items-center gap-2 pb-3 text-lg font-bold"><MdOutlineHomeWork className="text-indigo-500" size={24}/>{langData.use_at_work}</div>
          <div className="flex flex-wrap gap-4 pb-3">
            <img
              src={ReactIcon}
              className="w-8 h-8"
              data-tooltip-id="react"
              data-tooltip-content="React"
            />
            <img
              src={TailwindIcon}
              className="w-8 h-8"
              data-tooltip-id="tailwind"
              data-tooltip-content="Tailwind CSS"
            />
            <img
              src={TSIcon}
              className="w-8 h-8"
              data-tooltip-id="typescript"
              data-tooltip-content="TypeScript"
            />
            <img
              src={HTMLIcon}
              className="w-8 h-8"
              data-tooltip-id="html"
              data-tooltip-content="HTML"
            />
            <img
              src={CssIcon}
              className="w-8 h-8"
              data-tooltip-id="css"
              data-tooltip-content="CSS"
            />
            <img
              src={JsIcon}
              className="w-8 h-8"
              data-tooltip-id="javascript"
              data-tooltip-content="JavaScript"
            />
            <img
              src={FramerIcon}
              className="w-8 h-8"
              data-tooltip-id="framer"
              data-tooltip-content="Framer Motion"
            />
            <img
              src={GqlIcon}
              className="w-8 h-8"
              data-tooltip-id="gql"
              data-tooltip-content="GrphQl"
            />
          </div>
          <div className="dark:text-white py-3 flex items-center gap-2 text-lg font-bold"><BsFillEmojiSmileFill className="text-indigo-500" size={22}/>{langData.use_for_fun}</div>
          <div className="flex flex-wrap gap-4">
            <img
              src={PhpIcon}
              className="w-8 h-8"
              data-tooltip-id="php"
              data-tooltip-content="PHP"
            />
            <img
              src={MantineIcon}
              className="w-8 h-8"
              data-tooltip-id="mantine"
              data-tooltip-content="Mantine UI"
            />
            <img
              src={TSIcon}
              className="w-8 h-8"
              data-tooltip-id="typescript"
              data-tooltip-content="TypeScript"
            />
            <img
              src={HTMLIcon}
              className="w-8 h-8"
              data-tooltip-id="html"
              data-tooltip-content="HTML"
            />
            <img
              src={CssIcon}
              className="w-8 h-8"
              data-tooltip-id="css"
              data-tooltip-content="CSS"
            />
            <img
              src={JsIcon}
              className="w-8 h-8"
              data-tooltip-id="javascript"
              data-tooltip-content="JavaScript"
            />
            <img
              src={FramerIcon}
              className="w-8 h-8"
              data-tooltip-id="framer"
              data-tooltip-content="Framer Motion"
            />
          </div>
        </div>
      </div>
      <Tooltip id="react" />
          <Tooltip id="tailwind" />
          <Tooltip id="typescript" />
          <Tooltip id="html" />
          <Tooltip id="css" />
          <Tooltip id="javascript" />
          <Tooltip id="framer" />
          <Tooltip id="gql" />
          <Tooltip id="php" />
          <Tooltip id="mantine" />
    </div>
  );
};

export default About;
