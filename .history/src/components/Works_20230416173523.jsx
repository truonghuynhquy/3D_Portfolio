import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    link,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                option={{
                    max: 45,
                    scale: 1.05,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[239px]">
                    <img src={image} alt="project_image"
                    className="absolute inset-0 flex justify-end"/>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <p className={`${styles.sectionHeadText}`}>Project.</p>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.5, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories and live
                    demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage
                    projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
