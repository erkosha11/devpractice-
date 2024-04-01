import styles from "./modal.module.css";
import Logo from "../../assets/svg/Dev Practice.svg";
import ImgExit from "../../assets/svg/exit.svg";

import { CustomForm } from "../form/form";

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
          <CustomForm />
        </div>
      </div>
    </div>
  );
};

export default ModalItems4;
