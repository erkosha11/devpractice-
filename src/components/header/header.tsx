import Logo from "../../assets/svg/Dev Practice.svg";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.headerLogo}>
            <a href="/">
              <img className={styles.headerImg} src={Logo} alt="logo" />
            </a>
          </div>
          <div className={styles.headerButtons}>
            <div className={styles.headerLinks}>
              <ul className={styles.headerMenu}>
                <li className={styles.headerMenuItem}>
                  <a href="#courses">Курсы</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#comments">Отзывы</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#prices">Цены</a>
                </li>
                <li className={styles.headerMenuItem}>
                  <a href="#prices">Формат обучения</a>
                </li>
              </ul>
            </div>
            <div className={styles.headerSignButton}>
              <button>
                <h5>ЗАПИСАТЬСЯ</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
