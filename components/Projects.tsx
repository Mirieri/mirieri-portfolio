import { aadggrestapi, n3gapi, aadggmainplatform } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />
      
      {/* ============ Project One Start here ================ */}
      <div className="flex flex-col xl:flex-row gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://github.com/ilri/adgg-rest-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={aadggrestapi}
              alt="AADGG API"
              layout="responsive" // Ensure image scales properly
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">AADGG REST API</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            Developed the Africa Asia Dairy Genetic Gain (AADGG) REST API using Symfony, enhancing data exchange and application functionality.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>Symfony</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/ilri/adgg-rest-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/ilri/adgg-rest-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ Project One End here ================== */}

      {/* ============ Project Two Start here ================ */}
      <div className="flex flex-col xl:flex-row-reverse gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://github.com/Mirieri/nikonangombeghani_api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={n3gapi}
              alt="Niko Na Ngo'mbe Ghani API Project"
              layout="responsive"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Niko Na Ngo'mbe Ghani API Project</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            A fully functional API project to manage cattle information, facilitating the collection and organization of data related to breed, birth date, quality score, and more.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>FastAPI</li>
            <li>Python</li>
            <li>MongoDB</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/Mirieri/nikonangombeghani_api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/Mirieri/nikonangombeghani_api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ Project Two End here ================== */}

      {/* ============ Project Three Start here ============== */}
      {/* ============ AADGG Main Platform Start here ============== */}
      <div className="flex flex-col xl:flex-row gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://portal.adgg.ilri.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={aadggmainplatform} // Placeholder for the AADGG main platform image
              alt="AADGG Main Platform"
              layout="responsive"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">AADGG Main Platform</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            The AADGG Main Platform is a cutting-edge solution designed to enhance dairy farming productivity and sustainability across Africa and Asia. Built with the YII Framework and Vue.js, it empowers dairy farmers and stakeholders with robust tools for genetic tracking, herd management, and phenotype data collection. This platform integrates real-time data processing, cloud scalability on AWS, and seamless user interaction to optimize dairy genetic improvement efforts.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>YII Framework</li>
            <li>Vue.js</li>
            <li>MySQL</li>
            <li>AWS</li>
            <li>ODK Real-Time Data Sync</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://github.com/ilri/adgg-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href="https://portal.adgg.ilri.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
      {/* ============ AADGG Main Platform End here ================== */}
      {/* ============ Project Three End here ================== */}
    </section>
  );
};

export default Projects;
