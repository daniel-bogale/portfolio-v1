import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { redirectLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link = "https://github.com/daniel-bogale",
  demo_video,
  onPlayVideo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="group bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px] md:h-[230px]">
          <div className="absolute inset-0 flex justify-end m-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto gap-2">
            {demo_video && (
              <div
                onClick={() => onPlayVideo(demo_video, name)}
                className="black-gradient w-8 h-8 p-1 rounded-full flex justify-center items-center cursor-pointer"
                title="Watch Demo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 p-1 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={redirectLink}
                alt="open link"
                className="object-contain"
              />
            </div>
          </div>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] md:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] md:text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const VideoModal = ({ isOpen, onClose, videoSrc, projectName }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-tertiary rounded-2xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-bold text-[20px]">
            {projectName} - Demo
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl font-bold"
          >
            ×
          </button>
        </div>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full rounded-lg"
          style={{ maxHeight: "70vh" }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const Works = () => {
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoSrc: "",
    projectName: "",
  });

  const handlePlayVideo = (videoSrc, projectName) => {
    setVideoModal({
      isOpen: true,
      videoSrc,
      projectName,
    });
  };

  const handleCloseModal = () => {
    setVideoModal({
      isOpen: false,
      videoSrc: "",
      projectName: "",
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onPlayVideo={handlePlayVideo}
          />
        ))}
      </div>

      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseModal}
        videoSrc={videoModal.videoSrc}
        projectName={videoModal.projectName}
      />
    </>
  );
};

export default SectionWrapper(Works, "projects", false);
