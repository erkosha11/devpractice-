import styles from "./items2.module.css";
import ItemLogo1 from "../../assets/svg/itemlist1.svg";
import ItemLogo2 from "../../assets/svg/itemlist2.svg";
import ItemLogo3 from "../../assets/svg/itemlist3.svg";
import ItemLogo4 from "../../assets/svg/itemlist4.svg";

function Items2() {
  return (
    <div className={styles.items2}>
      <div className="container">
        <div className={styles.items2List}>
          <div className={styles.items2ListItem}>
            <img className={styles.headerImg} src={ItemLogo1} alt="ItemLogo1" />
            <h2>6 месяцев обучения</h2>
          </div>
          <div className={styles.items2ListItem}>
            <img className={styles.headerImg} src={ItemLogo2} alt="ItemLogo1" />
            <h2>онлайн-формат обучения</h2>
          </div>
          <div className={styles.items2ListItem}>
            <img className={styles.headerImg} src={ItemLogo3} alt="ItemLogo1" />
            <h2>практикующие менторы</h2>
          </div>
          <div className={styles.items2ListItem}>
            <img className={styles.headerImg} src={ItemLogo4} alt="ItemLogo1" />
            <h2>отработка на практике</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items2;
