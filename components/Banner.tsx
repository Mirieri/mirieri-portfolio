import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        David Mirieri Mogaka.
        <span className="text-textDark mt-2 lgl:mt-4">
          I build scalable backend solutions.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I'm a back-end developer with over 6 years of experience in designing, developing, and optimizing server-side infrastructure for web and mobile applications. My expertise lies in building RESTful APIs, managing databases, and deploying cloud solutions with technologies like Docker, Kubernetes, and AWS.{" "}
        <a href="https://www.linkedin.com/in/mirieri-mogaka" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/Mirieri" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
