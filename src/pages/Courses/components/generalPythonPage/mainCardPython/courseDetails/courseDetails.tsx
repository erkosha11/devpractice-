import ButtonOpenPopup from "../../../componentsCourse/popap/buttonOpenPopup/buttonOpenPopup";
import VideoPlayer from "../../../media/videoPlayer";
import styles from "./courseDetails.module.css";

import png from "./media/Ellipse.png";

const courseDetails = [
  { text: "345 часов лекций", icon: png },
  { text: "160 практических материалов", icon: png },
  { text: "Oбратная связь от менторов курса", icon: png },
];

export default function CourseDetails() {
  return (
    <div className={styles.container}>
      <h4 className={styles.h4}>Что ваш ждет на этом курсе</h4>
      <div className={styles.courseVideo}>
        <VideoPlayer src="https://devpractice.kz/utils/videos/intro_python.webm" />
      </div>
      <div>
        <ul className={styles.three}>
          {courseDetails.map((detail, index) => (
            <li key={index} className={styles.li}>
              <img
                src={detail.icon}
                alt=""
                style={{ opacity: "0.7", width: "12px", height: "12px" }}
              />{" "}
              {detail.text}
            </li>
          ))}
        </ul>
      </div>
      <ButtonOpenPopup buttonText="Записаться" />
    </div>
  );
}
