import { useEffect, useState } from "react";
import { AiOutlineProject, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useLanguageContext } from "../globals/Context";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  dis: string;
  section: string;
}

interface NavigationProps {
  scrollToSection: (section: string) => void;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection, activeSection }) => {
  const { langData } = useLanguageContext();

  const Menus: MenuItem[] = [
    { name: langData.short_about, icon: <AiOutlineUser />, dis: "md:translate-x-[12px] -translate-x-[118px]", section: "about" },
    { name: langData.experience, icon: <MdOutlineWorkspacePremium />, dis: "md:translate-x-[92px] -translate-x-[38px]", section: "experience" },
    { name: langData.project, icon: <AiOutlineProject />, dis: "md:translate-x-[172px] translate-x-[38px]", section: "projects" },
    { name: langData.contact, icon: <AiOutlineMail />, dis: "md:translate-x-[252px] translate-x-[118px]", section: "contact" },
  ];

  const [active, setActive] = useState(0);

  // Update the active state based on activeSection
  useEffect(() => {
    const index = Menus.findIndex(menu => menu.section === activeSection);
    if (index !== -1) {
      setActive(index);
    }
  }, [activeSection]);

  return (
    <div className="flex justify-center w-full fixed bottom-1 md:bottom-4 px-2 md:px-3 z-20">
      <ul className="flex relative max-h-[68px] w-full md:w-auto justify-center md:justify-normal rounded-3xl px-6 text-white"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(2px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
        }}>
        <span
          className={`bg-cyan-500 transition-all ease-in-out duration-500 ${Menus[active].dis} border-0 border-[#ffffff] h-14 w-14 absolute
         -top-5 rounded-full`}
        ></span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-20 overflow-hidden">
            <a
              className="flex flex-col pt-6"
              onClick={() => {
                setActive(i);
                scrollToSection(menu.section);
              }}
            >
              <span
                className={`text-xl flex justify-center text-black dark:text-white cursor-pointer transition-all duration-500 z-10 ${i === active && "-mt-6 "
                  }`}
              >
                {menu.icon}
              </span>
              <span
                className={` ${active === i
                  ? "translate-y-4 transition-all duration-500 opacity-100 text-black dark:text-white text-[10px] md:text-xs pt-3 text-center "
                  : "opacity-0 translate-y-10"
                  } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;