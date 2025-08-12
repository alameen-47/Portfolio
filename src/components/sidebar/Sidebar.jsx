import { useState } from "react";
import { motion } from "framer-motion";
import Links from "../../components/links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      // clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 50px 50px)",
      // clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>

        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
