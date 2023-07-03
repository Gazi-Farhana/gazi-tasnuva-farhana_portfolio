"use client";

import { FaStarOfLife } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ borderRadius: "0 0 0 0" }}
      whileInView={{ borderRadius: "1.5rem 1.5rem 0 0" }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="wrapper section-padding bg-accent text-dark rounded-tl-3xl rounded-tr-3xl"
    >
   

      <div className="mt-10 grid xl:grid-cols-3 gap-10 justify-between items-start px-20 text-lg md:text-xl">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.7 }}
          >
            &copy; {new Date().getFullYear()} Gazi Tasnuva Farhana
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.9 }}
          >
            All Rights Reserved
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1.1 }}
          >
            Inspired by Benjamin Nespoulous, Constance Souville, Chiara Luzzana
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
