import styles from "./form.module.css";

import successMessage  from "../../assets/svg/successMessage.svg";

export const SuccessMessage = () => {
  return (
    <div className={styles.successMessage}>
      <img className={styles.successMessage} src={successMessage} alt="successMessage" />
      <h2>Ваша заявка отправлена успешно!</h2>
    </div>
  );
};
