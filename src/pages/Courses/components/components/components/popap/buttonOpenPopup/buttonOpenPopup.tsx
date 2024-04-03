import { useState } from "react";
import Popup from "../popap";
import SecondPopup from "../secondPopup/secondPopup";
import logoSrc from "../../media/Dev Practice.png";
import styles from "./buttonOpenPopup.module.css";

interface ButtonOpenPopupProps {
  buttonText: string; // Добавляем новый пропс для текста кнопки
}

export default function ButtonOpenPopup({ buttonText }: ButtonOpenPopupProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondPopupOpen, setIsSecondPopupOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleFormSubmit = () => {
    setIsModalOpen(false);
    setIsSecondPopupOpen(true);
  };
  return (
    <>
      <button className={styles.statement} onClick={openModal}>
        <p>{buttonText}</p> 
      </button>
      <Popup
        isOpen={isModalOpen}
        onClose={closeModal}
        onFormSubmit={handleFormSubmit}
        logoSrc={logoSrc}
        buttonText="Подать заявку"
      />
      <SecondPopup
        isOpen={isSecondPopupOpen}
        onClose={() => setIsSecondPopupOpen(false)}
        message="Спасибо за вашу заявку!"
      />
    </>
  );
}
