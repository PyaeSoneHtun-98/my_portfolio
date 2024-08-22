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
        className="dark:bg-indigo-400 active:scale-90 ease-in-out duration-300 bg-zinc-800 text-white  flex justify-center items-center text-xs md:text-sm w-8 h-8 md:w-auto md:h-auto md:p-4 select-none rounded-full"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <IoLanguage className="w-3 md:w-auto" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-28 z-30 bg-white dark:bg-zinc-800 dark:text-white rounded-lg shadow-lg">
          <div
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
            onClick={() => handleLanguageChange('EN')}
          >
            English
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
            onClick={() => handleLanguageChange('MM')}
          >
            မြန်မာ
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
