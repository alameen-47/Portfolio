import React, { useRef } from "react";
import "./portfolio.scss";
import rawad from "../../assets/projects/rawad.png";
import credi8 from "../../assets/projects/Credit Flyer.png";
// import rawad from "../../assets/projects/rawad.png";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: "1",
    title: "Rawad Mall E-Commerce",
    img: rawad,
    link: "https://e-commerce.ametronyx.com/",
    desc: "A complete full-stack e-commerce solution Multi-language support for a global audience Secure, scalable, and ready for your business needs",
    button: "See Demo",
  },
  {
    id: "2",
    title: "CREDI8 - Track, Manage Credit Calls with Ease",
    img: credi8,
    link: "https://github.com/alameen-47/CREDI8.git",
    desc: "Effortless credit call tracking for smarter merchant collections",
    button: "See Code",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container1">
        <div className="wrapper1">
          <div className="imageContainer1" ref={ref}>
            <img src={item.img} alt="project" />
          </div>
          <motion.div className="textContainer1" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>{item.button}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
