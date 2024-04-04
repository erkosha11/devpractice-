import CourseDetails from "./courseDetails/courseDetails";
import InfoTextInMainCard from "./infoTextInMainCard/infoTextInMainCard";
import styles from "./mainCard.module.css";

export default function MainCardReact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainCardReact}>
        <div className={styles.contentMain}>
          <InfoTextInMainCard />
          <CourseDetails />
        </div>
      </div>
    </div>
  );
}
