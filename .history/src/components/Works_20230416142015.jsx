import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
    return (
        <>
            <motion.div>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <p className={`${styles.sectionHeadText}`}>Project.</p>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Works, "");
