import styles from "./items6.module.css";

import certificateDev from "../../assets/svg/certificateDevpractice.svg";
import drawing from "../../assets/svg/drawing.svg";

function Items7() {
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
            <button>
              <p>Записаться</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items7;
