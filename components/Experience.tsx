import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ResearchAssociate from "./works/ResearchAssociate";
import SoftwareEngineerInternDewCis from "./works/SoftwareEngineerInternDewCis";
import Google from "./works/Google";
import SoftwareEngineerIntern from "./works/SoftwareEngneerIntern";

const Experience = () => {
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workInternDewCis, setWorkInternDewCis] = useState(false);
  const [workILRI, setWorkILRI] = useState(true); // Set ILRI as default
  const [workIntern, setWorkIntern] = useState(false);

  const handleGoogle = () => {
    setWorkGoogle(true);
    setWorkInternDewCis(false);
    setWorkILRI(false);
    setWorkIntern(false);
  };

  const handleInternDewCis = () => {
    setWorkGoogle(false);
    setWorkInternDewCis(true);
    setWorkILRI(false);
    setWorkIntern(false);
  };

  const handleILRI = () => {
    setWorkGoogle(false);
    setWorkInternDewCis(false);
    setWorkILRI(true);
    setWorkIntern(false);
  };

  const handleIntern = () => {
    setWorkGoogle(false);
    setWorkInternDewCis(false);
    setWorkILRI(false);
    setWorkIntern(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleInternDewCis}
            className={`${
              workInternDewCis
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            DewCis Solutions LTD
          </li>
          <li
            onClick={handleILRI}
            className={`${
              workILRI
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            International Livestock Research Institute
          </li>
          <li
            onClick={handleIntern}
            className={`${
              workIntern
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            KENTTEC
          </li>
        </ul>
        {workGoogle && <Google />}
        {workInternDewCis && <SoftwareEngineerInternDewCis />}
        {workILRI && <ResearchAssociate />}
        {workIntern && <SoftwareEngineerIntern />}
      </div>
    </section>
  );
};

export default Experience;