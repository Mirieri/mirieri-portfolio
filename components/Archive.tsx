import ArchiveCard from "./ArchiveCard";
// import { useState } from "react";
// import { motion } from "framer-motion";

const Archive = () => {
  // const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Professional Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Noteworthy Projects from my Resume
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="AADGG Data Script"
          des="Automated scripts for managing and updating data within the AADGG database. These scripts facilitate efficient data processing and are essential for maintaining data accuracy across various dairy farming operations."
          listItem={["Python", "MySQL", "Data Management"]}
          link="https://github.com/ilri/adgg_database"
        />
        <ArchiveCard
          title="AADGG Sandbox"
          des="A testing environment for the AADGG project, allowing for the safe development and deployment of new features without affecting live data. Supports collaboration among developers and improves deployment workflow."
          listItem={["SQL", "Testing"]}
          link="https://github.com/ilri/adgg_sandbox"
        />
        {/* Add additional projects here as needed */}

        {/* Uncomment this section to add "Show More" functionality
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Educare English Learning Academy"
                des="An interactive platform for English learning with modern design and user-friendly navigation."
                listItem={["React.js", "Tailwind CSS", "getform.io"]}
                link="https://www.educareenglishlearningacademy.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Cyber Security Blog with Live Comments"
                des="A platform featuring a live comment section for engaging discussions on cybersecurity topics."
                listItem={["React.js", "Tailwind CSS", "getform.io"]}
                link="https://www.noormohmmad.com/"
              />
            
          </>
        )}
        */}
      </div>

      {/* Show More button - Uncomment to add functionality */}
      {/* 
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
      */}
    </div>
  );
};

export default Archive;
