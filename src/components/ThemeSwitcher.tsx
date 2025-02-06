export default function ThemeToggle() {
  return (
    <label id="theme-toggle-button" className="relative inline-block cursor-pointer">
      <input type="checkbox" id="toggle" className="hidden" />
      <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg" className="w-28">
        <g transform="translate(3.5 3.5)">
          <rect
            id="container"
            className="transition-all duration-200 ease-in-out fill-[#83cbd8] dark:fill-[#2b4360]"
            rx="17.5"
            height="35"
            width="60.667"
          ></rect>
          <g id="button" className="transform transition-all duration-200 ease-in-out">
            {/* Sun */}
            <g id="sun" className="opacity-100 dark:opacity-0 transition-opacity duration-200">
              <circle className="fill-[#f8e664]" r="15.167" cx="15.167" cy="15.167"></circle>
              <circle className="fill-[#fcf4b9]" r="7" cx="7" cy="7"></circle>
            </g>
            {/* Moon */}
            <g id="moon" className="opacity-0 dark:opacity-100 transition-opacity duration-200">
              <circle className="fill-[#cce6ee]" r="15.167" cx="15.167" cy="15.167"></circle>
              {/* Moon patches */}
              <circle className="fill-[#a6cad0]" r="2" cx="43.009" cy="4.496"></circle>
              <circle className="fill-[#a6cad0]" r="2" cx="39.366" cy="17.952"></circle>
            </g>
          </g>
          {/* Cloud */}
          <path
            id="cloud"
            className="fill-white opacity-100 dark:opacity-0 transition-opacity duration-200"
            d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62..."
          ></path>
          {/* Stars */}
          <g id="stars" className="opacity-0 dark:opacity-100 transition-opacity duration-200">
            <path className="fill-[#def8ff]" d="M.774,0,.566.559,0,.539.458.933..."></path>
          </g>
        </g>
      </svg>
    </label>
  );
}
