import Logo from "../../assets/svg/Dev Practice.svg";
import styles from "./header.module.css";

import ModalItems4 from "../../components/modal/modal";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <a href="/">
              <img className={styles.headerImg} src={Logo} alt="logo" />
            </a>
          </div>
          <div className={styles.headerButtons}>
            <div className={styles.headerLinks}>
              <ul className={styles.headerMenu}>
                <li className={styles.headerMenuItem}>
                  <a href="#courses">Курсы</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#comments">Отзывы</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#prices">Цены</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#prices">Формат обучения</a>
                </li>
              </ul>
            </div>
            <div className={styles.headerSignButton}>
              <button onClick={handleOpen}>
                <h5>ЗАПИСАТЬСЯ</h5>
              </button>
              <Modal open={open} onClose={handleClose}>
                <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 50,
                      stiffness: 500,
                      restDelta: 0.001,
                    },
                  }}
                >
                  <React.Fragment>
                    <ModalItems4 onClose={handleClose} />
                  </React.Fragment>
                </motion.div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
