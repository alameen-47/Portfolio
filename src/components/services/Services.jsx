import { React, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import "./Services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#2184e7" }}>Unique </motion.b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#2184e7" }}>For Your </motion.b>
            Business
          </h1>
          <button>What we Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "white" }}
          variants={variants}
        >
          <h2>Web Development</h2>
          <p>
            Modern, responsive, and high-performance websites using React.js and
            MERN Stack.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "white" }}
          variants={variants}
        >
          <h2>Mobile App Development</h2>
          <p>
            Cross-platform, fast, and native-like mobile apps with React Native.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "white" }}
          variants={variants}
        >
          <h2>Full Stack Solutions</h2>
          <p>
            End-to-end development, from backend APIs to frontend interfaces,
            using MERN Stack.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
