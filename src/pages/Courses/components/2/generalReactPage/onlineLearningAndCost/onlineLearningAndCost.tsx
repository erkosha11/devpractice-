import styles from "./onlineLearningAndCost.module.css";
import dotPng from "../../../components/components/media/Ellipse 2.png";
import firstPng from "../../../components//components/media/01.png";
import secondPng from "../../../components//components/media/02.png";
import thirdPng from "../../../components//components/media/03.png";
import kaspii from "../../../components//components/media/Group 1.png";
import ButtonOpenPopup from "../../../components/components/popap/buttonOpenPopup/buttonOpenPopup";

export default function OnlineLearningAndCost() {
  return (
    <div style={{ margin: "140px 0" }} id="onlineLearningAndCost">
      <div className={styles.headerText}>
        <img src={dotPng} alt="" />
        <p>Стать востребованным разработчиком</p>
      </div>
      <div className={styles.learningAndCoat}>
        <div className={styles.learning}>
          <h1 className={styles.h1}>Онлайн-формат</h1>
          <div className={styles.explanationLearning}>
            <div className={styles.block}>
              <div className={styles.learningBlocks}>
                <img
                  style={{ width: "48px", height: "48px" }}
                  src={firstPng}
                  alt=""
                />
                <p>
                  Занятия проходят <br /> на онлайн-платформе
                </p>
              </div>
              <div className={styles.learningBlocks}>
                <img
                  style={{ width: "48px", height: "48px" }}
                  src={secondPng}
                  alt=""
                />
                <p>
                  Новые уроки открываются после <br /> выполнения домашнего
                  задания
                </p>
              </div>
            </div>
            <div className={styles.learningBlocks}>
              <img
                style={{ width: "48px", height: "48px" }}
                src={thirdPng}
                alt=""
              />
              <p>
                Еженедельные эфиры с менторами для помощи и ответов на вопросы.{" "}
                <br />
                Ты сам решаешь, когда смотреть уроки!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cost}>
          <div className={styles.price}>
            <p style={{ opacity: "50%" }}>Стоимость:</p>
            <p>500 000 kzt</p>
          </div>
          <div className={styles.installmentPlan}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingBottom: "10px",
              }}
            >
              <h2 className={styles.paymentPerMonth}>41 666 kzt/месяц</h2>
              <div className={styles.kaspi}>
                <p> за год </p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <img src={kaspii} alt="" /> Kaspi рассрочка
                </p>
              </div>
            </div>
            <ButtonOpenPopup buttonText="Оставить заявку" />
          </div>
        </div>
      </div>
    </div>
  );
}
