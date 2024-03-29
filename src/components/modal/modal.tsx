import styles from "./modal.module.css";
import Logo from "../../assets/svg/Dev Practice.svg";
import ImgExit from "../../assets/svg/exit.svg";

interface ModalItems4Props {
  onClose: () => void;
}

const ModalItems4: React.FC<ModalItems4Props> = ({ onClose }) => {
  return (
    <div className={styles.modalItems4}>
      <div className={styles.ModalItems4Content}>
        <div className={styles.ModalItems4Header}>
          <a href="/">
            <img className={styles.headerImg} src={Logo} alt="logo" />
          </a>
          <button
            className={styles.ModalItems4HeaderButton}
            onClick={() => onClose()}
          >
            <img src={ImgExit} alt="exit"></img>
          </button>
        </div>

        <div className={styles.ModalItems4Forms}>
          <form
            className={styles.modalItems4Form}
            action="#"
            method="post"
            id="add-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className={styles.ModalItemsInput}
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Ваш телефон"
              className={styles.ModalItemsInput}
              pattern="[0-9]*"
            />
            <div className={styles.modalItems4FormChoice}>
              <input
                name="proga-lang"
                type="radio"
                id="python"
                checked={true}
                value="python"
              />
              <label htmlFor="python">
                <span className={styles.modalItems4FormButton}></span>
                <h2>Python</h2>
              </label>
              <input name="proga-lang" type="radio" id="react" value="react" />
              <label htmlFor="react">
                <span className={styles.modalItems4FormButton}></span>
                <h2>React</h2>
              </label>
            </div>
            <button
              type="submit"
              className={styles.modalItems4FormButtonSubmit}
            >
              <h2>Отправить заявку</h2>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalItems4;
