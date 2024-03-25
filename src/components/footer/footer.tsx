import styles from "./footer.module.css";

import ImgInstagram from "../../assets/svg/Instagram.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLeftButtons}>
            <button>
              <h3>Курсы</h3>
            </button>
            <button>
              <h3>Программа</h3>
            </button>
            <button>
              <h3>Цены</h3>
            </button>
            <button>
              <h3>Формат обучения</h3>
            </button>
          </div>
          <div className={styles.footerRightButton}>
            <button>
              <img src={ImgInstagram} alt="instagram"></img>
              <h5>Instagram</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
