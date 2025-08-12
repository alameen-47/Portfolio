import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        {/* <Sidebar /> */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="Logo"
        >
          Ameen
        </motion.span>
        <div className="social  ">
          <a href="https://www.instagram.com/.am_in_?igsh=MTdyNTk1eHVwNnQ3ZA%3D%3D&utm_source=qr">
            <img src="/src/assets/icons/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.facebook.com/athifkhan.athif">
            <img src="/src/assets/icons/facebook.png" alt="facebook" />
          </a>
          <a
            href="www.linkedin.com/in/al-ameen-ak47

"
          >
            <img src="/src/assets/icons/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://github.com/alameen-47">
            <img src="/src/assets/icons/github-sign.png" alt="github" />
          </a>
          <a href="https://wa.me/6361020155">
            <img src="/src/assets/icons/whatsapp.png" alt="whatsapp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
