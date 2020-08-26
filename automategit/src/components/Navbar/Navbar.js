import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={styles.logo}
        >
          <p>Git Commit</p>
        </motion.div>
      </Link>
      <div className={styles.right}>
        <div>
          <Link to="/">Tree</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
