import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const ResearchAssociate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Research Associate III
        <span className="text-textGreen tracking-wide">@Research Institute ILRI</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2018 - Aug 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Architected and enhanced backend infrastructure using PHP (Symfony, Laravel Lumen, Slim) and Python, achieving a 50% increase in system scalability, as measured by reduced load times and enhanced user capacity, by leveraging Docker and Kubernetes for containerization.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered a modular, RESTful API framework with Laravel Lumen and Slim, boosting system interaction by 30%, as measured by increased API call efficiency, for data-driven applications through advanced backend development skills with microservices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led AWS deployment of backend solutions with Lambda, EC2, and API Gateway, utilizing Dockerized microservices and Kubernetes clusters, ensuring scalable and stable system operations, as measured by 99.9% uptime, demonstrating adeptness in cloud platform and DevOps capabilities.
        </li>
      </ul>

      <h3 className="flex gap-1 font-medium text-xl font-titleFont mt-8">
        Database Technician
        <span className="text-textGreen tracking-wide">@Research Institute ILRI</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2017 - Aug 2018
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Optimized database performance by 30% through meticulous tuning, index optimization, and query restructuring, leveraging Docker and Kubernetes for enhanced system scalability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Ensured 99.9% system uptime by diligently monitoring database systems, swiftly resolving issues, and reducing downtime by 25%, showcasing strong proficiency in system operations and stability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed Python and Linux scripts to streamline data processing, achieving a significant improvement in system performance in high traffic environments, demonstrating advanced backend development skills.
        </li>
      </ul>
    </motion.div>
  );
};

export default ResearchAssociate;