import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SoftwareEngineerIntern = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer Intern
        <span className="text-textGreen tracking-wide">@KENTTEC</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2017 - Aug 2017
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized ERP system operations to ensure seamless website functionality, demonstrating advanced backend development skills.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered a batch data processing pipeline using Python and SQL, enhancing data retrieval speed by 30%, showcasing proficiency in key technologies and contributing to system efficiency.
        </li>
      </ul>
    </motion.div>
  );
};

export default SoftwareEngineerIntern;