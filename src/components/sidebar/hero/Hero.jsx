import { useRef } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      staggerChildren: 0.1,
      repeatType: "mirror",
    },
  },
};

const Hero = ({ scrollToContact, scrollToLatest }) => {
  const handleScrollToLatest = () => {
    scrollToLatest();
  };
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Al Ameen</motion.h2>
            <motion.h1 variants={textVariants}>
              Web Developer and Front-end Engineer
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button
                variants={textVariants}
                onClick={handleScrollToLatest}
              >
                See the latest Works
              </motion.button>
              <motion.button variants={textVariants} onClick={scrollToContact}>
                Contact Me
              </motion.button>
            </motion.div>

            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/mouse-cursor.png"
              alt="scroll-down"
            />
          </motion.div>
          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Web Developer Front-end Engineer Photo Editor Video Editor
          </motion.div>
        </div>
        <div className="imageContainer">
          <img src="/me.png" alt="Ameen" />
        </div>
      </div>
    </>
  );
};

export default Hero;
