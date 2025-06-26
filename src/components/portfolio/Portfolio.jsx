import React, { useRef } from "react";
import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: "1",
    title: "React Commerce",
    img: "https://images.pexels.com/photos/16375201/pexels-photo-16375201/free-photo-of-basketball-hoop-standing-against-a-foggy-coast.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adip  incididunt ut labore et dolore magna aliqu  compliance  nibh. Ut enim ad minim veniam",
  },
  {
    id: "2",
    title: "AI ChatBOT",
    img: "https://images.pexels.com/photos/16711419/pexels-photo-16711419/free-photo-of-silhouette-of-swan-in-lake.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adip  incididunt ut labore et dolore magna aliqu  compliance  nibh. Ut enim ad minim veniam",
  },
  {
    id: "3",
    title: "Personal Blog",
    img: "https://images.pexels.com/photos/15477405/pexels-photo-15477405/free-photo-of-ornamented-buildings-facades.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adip  incididunt ut labore et dolore magna aliqu  compliance  nibh. Ut enim ad minim veniam",
  },
  {
    id: "4",
    title: "Music App ",
    img: "https://images.pexels.com/photos/15477405/pexels-photo-15477405/free-photo-of-ornamented-buildings-facades.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adip  incididunt ut labore et dolore magna aliqu  compliance  nibh. Ut enim ad minim veniam",
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
            <button>See Demo</button>
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
