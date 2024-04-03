import CourseDetails from "./courseDetails/courseDetails";
import InfoTextInMainCard from "./infoTextInMainCard/infoTextInMainCard";
import styles from "./mainCard.module.css";

export default function MainCardPython() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainCardPython}>
        <InfoTextInMainCard />
        <CourseDetails />
      </div>
    </div>
  );
}
