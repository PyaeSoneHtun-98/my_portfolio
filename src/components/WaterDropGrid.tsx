import React, { MouseEvent } from "react";
import anime from "animejs";
import Example from "./AnimateButton";

const WaterDropGrid: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center relative">
      <div className="text-left text-white z-20 mb-12 lg:mb-0 flex flex-col justify-center items-center lg:items-start lg:relative absolute inset-0 px-4 md:px-0 pointer-events-none">
        <h1 className="text-4xl md:text-7xl font-bold">
          Hi, I'm Pyae Sone<span className="text-indigo-500">.</span>
        </h1>
        <h2 className="text-2xl md:text-4xl pt-2 text-[#53C1DE]">
          I'm a Frontend Developer
        </h2>
        <p className="mt-4">
          I've spent the last 5 years building and scaling software for some
          pretty cool companies. I also teach people to paint online (incase
          you've got an empty canvas layin' around 🎨). Let's connect!
        </p>
        <div className="pointer-events-auto pt-3">        <Example />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden grid place-content-end lg:place-content-center lg:-ml-32 z-10">
        <DotGrid />
      </div>
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid: React.FC = () => {
  const handleDotClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(target.dataset.index),
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
