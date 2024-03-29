import styles from "./items4.module.css";

import ImgLine from "../../assets/svg/items4.svg";
import ImgBc from "../../assets/svg/items4v2.svg";
import ImgKaspi from "../../assets/svg/kaspi.svg";

import ModalItems4 from "../../components/modal/modal";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

function Items4() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.items4} id="prices">
      <div className="container">
        <div className={styles.items4Content}>
          <div className={styles.items4Title}>
            <h2>
              <span></span>Стать востребованным разработчиком
            </h2>
            <div className={styles.items4ImgLine}>
              <img src={ImgLine} alt="Line"></img>
            </div>
          </div>
          <div className={styles.items4Block}>
            <div className={styles.items4Text}>
              <h1>Онлайн-формат</h1>
              <h2> &gt;&gt;Занятия проходят на онлайн-платформе</h2>
              <h2>
                &gt;&gt;Новые уроки открываются после выполнения домашнего
                задания
              </h2>
              <h2>
                &gt;&gt;Еженедельно со студентами проводится прямой эфир, на
                котором
                <br />
                менторы отвечают на вопросы и помогают с решением задач.
                <br /> Ты сам решаешь, когда смотреть уроки!
              </h2>
            </div>
            <div className={styles.itemsBc}>
              <img src={ImgBc} alt="bg"></img>
              <div className={styles.items4Button}>
                <button onClick={handleOpen}>
                  <h2>Оставить заявку</h2>
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
            <div className={styles.items4v1440}>
              <div className={styles.items4v1440Price}>
                <p className={styles.items4v1440Pricekzt}>600 000 KZT</p>
                <h1>
                  41 666
                  <br />
                  kzt/месяц
                </h1>
              </div>
              <div className={styles.items4v1440Kaspi}>
                <p>
                  За год 500 000 / <img src={ImgKaspi} alt="kaspi"></img> Kaspi
                  рассрочка
                </p>
              </div>
              <div className={styles.items4v1440button}>
                <button onClick={handleOpen}>
                  <h2>Оставить заявку</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items4;
