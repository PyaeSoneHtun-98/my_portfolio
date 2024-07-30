import { useEffect, useState } from "react";
import { AiOutlineProject, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";

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
  const Menus: MenuItem[] = [
    { name: "About", icon: <AiOutlineUser />, dis: "md:translate-x-[8px] -translate-x-[120px]", section: "about" },
    { name: "Experience", icon: <MdOutlineWorkspacePremium />, dis: "md:translate-x-[88px] -translate-x-[40px]", section: "experience" },
    { name: "Project", icon: <AiOutlineProject />, dis: "md:translate-x-[168px] translate-x-[40px]", section: "projects" },
    { name: "Contact", icon: <AiOutlineMail />, dis: "md:translate-x-[248px] translate-x-[120px]", section: "contact" },
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
    <div className="flex justify-center w-full fixed bottom-0 md:bottom-4 md:px-3 z-20">
      <ul className="flex relative w-full md:w-auto justify-center md:justify-normal bg-[#09090B] md:rounded-3xl px-6">
        <span
          className={`bg-[#6366F1] duration-500 ${Menus[active].dis} border-4 border-[#18181B] h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] "
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] "
          ></span>
        </span>
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
                className={`text-xl flex justify-center text-white cursor-pointer duration-500 z-10 ${
                  i === active && "-mt-6 "
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100 text-white text-[10px] md:text-xs pt-3 text-center "
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
