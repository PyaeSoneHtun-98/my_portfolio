import React, { useState, useRef, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
import { useLanguageContext } from "../globals/Context";

const LanguageSwitcher: React.FC = () => {
  const { toggleLanguage } = useLanguageContext();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLanguageChange = (language: string) => {
    toggleLanguage(language === 'EN' ? 'EN' : 'MM')
    setShowDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="active:scale-90 ease-in-out duration-300 text-black dark:text-white flex justify-center items-center text-xs md:text-sm w-8 h-8 md:w-auto md:h-auto md:p-4 select-none rounded-full"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(2px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
        }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <IoLanguage className="w-3 md:w-auto" />
      </button>

      {showDropdown && (
        <div 
          className="absolute right-0 mt-2 w-28 z-30 text-white rounded-xl"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px) saturate(120%)',
            WebkitBackdropFilter: 'blur(20px) saturate(120%)',
            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
          }}
        >
          <div
            className="px-4 py-2 hover:bg-white/10 cursor-pointer rounded-t-xl transition-all duration-300 hover:backdrop-blur-sm"
            onClick={() => handleLanguageChange('EN')}
          >
            English
          </div>
          <div
            className="px-4 py-2 hover:bg-white/10 cursor-pointer rounded-b-xl transition-all duration-300 hover:backdrop-blur-sm"
            onClick={() => handleLanguageChange('MM')}
          >
            Burmese
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;