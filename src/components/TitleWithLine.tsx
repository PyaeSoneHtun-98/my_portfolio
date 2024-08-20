import { motion } from "framer-motion";
import React from "react";

interface TitleWithLineProps {
  title: string;
}

const TitleWithLine: React.FC<TitleWithLineProps> = ({ title }) => {
  return (
    <div className="flex justify-center items-center dark:text-white py-8">
      <h2 className="text-3xl md:text-5xl font-bold">
        {title}
        <span className="text-indigo-500">.</span>
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={{
          hidden: { scaleX: 0, x: "-50%" },
          visible: { scaleX: 1, x: "0%", transition: { duration: 1 } },
        }}
        className="flex-grow border-t border-gray-700 ml-4"
      ></motion.div>
    </div>
  );
};

export default TitleWithLine;
