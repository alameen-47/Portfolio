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
            Bridging creativity and functionality, I craft digital experiences
            as a web developer
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "white" }}
          variants={variants}
        >
          <h2>Front-End Development</h2>
          <p>Crafting user experiences with code #FrontEndDevLife</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "black", color: "white" }}
          variants={variants}
        >
          <h2>Full Stack Developer</h2>
          <p>
            Building seamless digital experiences from front-end to back-end as
            a full stack developer.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
