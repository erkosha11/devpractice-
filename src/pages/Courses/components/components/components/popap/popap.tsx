import React, { useState } from "react";
import styles from "./popap.module.css";
import buttonPopupClose from "../media/VectorpopupButton.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFormSubmit: () => void;
  logoSrc?: string;
  buttonText: string;
}

const Popup: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onFormSubmit,
  logoSrc,
  buttonText,
}) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = (number: string) => {
    if (!/^[0-9]+$/.test(number)) {
      setPhoneNumberError("Номер телефона должен содержать только цифры.");
      return false;
    } else {
      setPhoneNumberError("");
      return true;
    }
  };

  const validateName = (name: string) => {
    if (/\d/.test(name)) {
      setFullNameError("Имя не должно содержать цифры.");
      return false;
    } else {
      setFullNameError("");
      return true;
    }
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (validateName(e.target.value)) {
      validateForm();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    if (validatePhoneNumber(e.target.value)) {
      validateForm();
    }
  };

  const validateForm = () => {
    setIsValid(
      fullName.trim().length > 0 &&
        phoneNumber.trim().length > 0 &&
        !fullNameError &&
        !phoneNumberError
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      console.log("Форма отправлена", { fullName, phoneNumber });
      onFormSubmit();
      setFullName("");
      setPhoneNumber("");
      setIsValid(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.lineLogoAndButton}>
        <button onClick={onClose} className={styles.closeButton}>
          <img src={buttonPopupClose} alt="Закрыть" />
        </button>
        {logoSrc && <img src={logoSrc} alt="Logo" style={{ width: "275px" }} />}
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "20px", flexDirection: "column" }}
      >
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleNameChange}
          required
          placeholder="Ваше имя"
          className={styles.popupFormInput}
        />
        {fullNameError && <div style={{ color: "red" }}>{fullNameError}</div>}
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneChange}
          required
          placeholder="Ваш телефон"
          className={styles.popupFormInput}
        />
        {phoneNumberError && (
          <div style={{ color: "red" }}>{phoneNumberError}</div>
        )}
        <button
          type="submit"
          className={styles.popupButton}
          disabled={!isValid}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Popup;
