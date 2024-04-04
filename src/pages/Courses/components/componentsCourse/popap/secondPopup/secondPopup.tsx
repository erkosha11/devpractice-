import React from "react";
import styles from "./secondPopup.module.css";
import buttonPopupClose from "../../../media/VectorpopupButton.png";
import checkPng from "../../../media/check-square.png";
interface SecondPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SecondPopup: React.FC<SecondPopupProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <button onClick={onClose} className={styles.closeButton}>
        <img src={buttonPopupClose} alt="Закрыть" />
      </button>
      <div className={styles.secondPopup}>
        <img src={checkPng} alt="" />
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};

export default SecondPopup;
