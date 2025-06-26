import React from "react";
import { motion } from "framer-motion";
const items = ["Homepage", "Services", "Portfolio", "Contact"];
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 50,
      damping: 300,
      duration: 0.3,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      stiffness: 20,
      damping: 200,
      duration: 0.2,
    },
  },
};
const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
