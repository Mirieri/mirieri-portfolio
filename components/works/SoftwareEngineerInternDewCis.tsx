import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SoftwareEngineerInternDewCis = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer Intern
        <span className="text-textGreen tracking-wide">@DewCis Solutions LTD</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        [Your Start Date] - [Your End Date]
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered REST APIs using Java for seamless cross-platform integrations, enhancing data exchange and application functionality, and contributing to a 20% increase in system interoperability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Directed Agile sprints as Scrum Master, optimizing project delivery and team efficiency, which resulted in a 30% improvement in project completion rates.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Pioneered the development of a high-performance machine learning algorithm using Python and TensorFlow, which boosted data processing efficiency by 35%, showcasing advanced backend development and analytical skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default SoftwareEngineerInternDewCis;