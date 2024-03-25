import Header from "../../components/header/header";
import styles from "./items1.module.css";

function Items1() {
  return (
    <div className={styles.items1}>
      <div className="container">
        <div className={styles.items1content}>
          <Header />
          <div className={styles.items1Text}>
            <div className={styles.items1Title}>
              <h1>
                Обучение <span>программированию</span>
                <br /> через <span>практику</span>
              </h1>
            </div>
            <div className={styles.items1Subtitle}>
              <h2>
                Онлайн курсы от действующих разработчиков
                <br /> на базе it-компании
                <span>
                  <a href="https://qazdev.kz/"> qazdev</a>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items1;
