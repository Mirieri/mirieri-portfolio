import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Google Student Ambassador
        <span className="text-textGreen tracking-wide">@Google</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2014 - Dec 2015
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded digital marketing initiatives as a Google Student Ambassador, achieving a 50% increase in student engagement with Google products, by leading comprehensive training sessions and innovative campaign strategies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Orchestrated campus-wide events and technical mapping projects, enhancing leadership capabilities and fostering a collaborative learning environment.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Drove a 35% uplift in student participation in online certifications through strategic promotion of Google products, leveraging event management and digital outreach.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;