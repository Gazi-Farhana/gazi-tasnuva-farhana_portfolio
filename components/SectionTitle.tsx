"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-[3.5rem] xs:text-[4rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10rem] font-semibold flex flex-col"
      >
        {title}{" "}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
