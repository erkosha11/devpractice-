import styles from "./items6.module.css";

import certificateDev from "../../assets/svg/certificateDevpractice.svg";
import drawing from "../../assets/svg/drawing.svg";

import ModalItems4 from "../../components/modal/modal";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

function Items7() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.items6}>
      <div className="container">
        <div className={styles.items6Content}>
          <div className={styles.items6Img}>
            <img src={certificateDev} alt="certificateDev"></img>
          </div>
          <div className={styles.items6More}>
            <h1>Поздравляем!</h1>
            <img
              className={styles.items6Vector}
              src={drawing}
              alt="drawing"
            ></img>
            <div className={styles.items6Text}>
              <h2>
                По завершении выбранного вами курса вы получите официальный
                сертификат, подтверждающий успешное прохождение обучения.
              </h2>
              <h2>
                Этот документ — подтверждение вашего профессионального роста в
                сфере программирования.
              </h2>
            </div>
            <button onClick={handleOpen}>
              <p>Записаться</p>
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
  );
}

export default Items7;
