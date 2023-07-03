"use client";

import Image from "next/image";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";
import ButtonAsLink from "./ButtonAsLink";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="wrapper section-padding text-center">
      <SectionTitle title="About Me" />

      {/* ABOUT */}
      <div className="mt-20 grid xl:grid-cols-5 gap-20">
        {/* BEHIND IMAGE */}
        <motion.div
          initial={{ scale: 0, borderRadius: "100px" }}
          whileInView={{ scale: 1, borderRadius: "1rem" }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="lg:col-span-2 w-full h-[40rem] bg-black/40 border border-light/10 rounded-2xl shadow-xl"
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0, borderRadius: "100px" }}
            whileInView={{ scale: 1, borderRadius: "1rem" }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            className="w-full h-[40rem] overflow-hidden rounded-2xl group relative shadow-xl"
          >
            {/* OVERLAY */}
            <div className="absolute z-[1] top-0 left-0 right-0 bottom-0 w-full h-full group-hover:opacity-0 duration-[4000ms]"></div>
            <Image
              src="https://res.cloudinary.com/dt1k66xwf/image/upload/v1688357010/about_me_umg7ck.png"
              alt="Gazi Tasnuva Farhana"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover group-hover:scale-125 duration-[4000ms]"
            />
          </motion.div>
        </motion.div>
        {/* CONTENTS */}
        <div className="lg:col-span-3 text-4xl overflow-hidden text-left">
          <motion.p
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5, delay: 0.5 }}
            className="leading-[1.2]"
          >
          {`Hello, <br /> I am Gazi Tasnuva Farhana, and I specialize in MERN development. Crafting elegant web solutions is my passion. With a meticulous attention to detail, I transform complex ideas into user-friendly applications. I bring a unique perspective to every project, combining innovation and a commitment to excellence. <br /> Let us work together to create something unique!`}
          </motion.p>
          {/* STATS */}
          <div className="mt-20 flex flex-wrap xl:flex-nowrap gap-20">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
