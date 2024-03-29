import styles from "./items3.module.css";

import ImgButton from "../../assets/svg/button (1).svg";
import ImgButtonFrontend from "../../assets/svg/buttonfront.svg";
import ImgButtonBackend from "../../assets/svg/buttonback.svg";

function Items3() {
  return (
    <div className={styles.items3} id="courses">
      <div className="container">
        <div className={styles.items3Content}>
          <div className={styles.items3Title}>
            <h2>
              <span></span> Наши курсы
            </h2>
          </div>
          <div className={styles.items3Cards}>
            <div className={styles.items3CardFrontend}>
              <div className={styles.items3CardsContent}>
                <span>
                  <p>&lt; Frontend &gt;</p>
                </span>
                <h1>React-разработчик</h1>
                <h2 className={styles.items3CardsSubtitle}>
                  React-разработчик – как строитель
                  <br /> для веб-сайтов и приложений.
                </h2>
                <p className={styles.items3Cardstext}>
                  React - это библиотека JavaScript, которая используется для
                  создания пользовательских интерфейсов. Она позволяет
                  разработчикам строить большие, масштабируемые веб-приложения,
                  разделяя их на компоненты, которые могут быть повторно
                  использованы.
                </p>
                <div className={styles.items3CardsButton}>
                  <button>
                    <img
                      className={styles.items3ImgMore}
                      src={ImgButtonFrontend}
                      alt="ImgButtonFrontend"
                    />
                  </button>
                  <button>
                    <img
                      className={styles.items3ImgClick}
                      src={ImgButton}
                      alt="ImgButton"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.items3CardBackend}>
              <div className={styles.items3CardsContent}>
                <span>
                  <p>&lt; Backend &gt;</p>
                </span>
                <h1>Python-разработчик</h1>
                <h2 className={styles.items3CardsSubtitle}>
                  В интернете десятки тысяч сайтов,
                  <br /> созданных на основе Python.
                </h2>
                <p className={styles.items3Cardstext}>
                  Это мощный язык программирования для создания бэкенда. Хочешь
                  научиться писать код, делая функциональные и эффективные
                  программы? Тогда Python точно для тебя.
                </p>
                <div className={styles.items3CardsButton}>
                  <button>
                    <img
                      className={styles.items3ImgMore}
                      src={ImgButtonBackend}
                      alt="ImgButtonBackend"
                    />
                  </button>
                  <button>
                    <img
                      className={styles.items3ImgClick}
                      src={ImgButton}
                      alt="ImgButton"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items3;
