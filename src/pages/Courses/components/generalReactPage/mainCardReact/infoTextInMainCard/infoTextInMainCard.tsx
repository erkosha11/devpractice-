import styles from "./infoText.module.css";
export default function InfoTextInMainCard() {
  return (
    <div className={styles.infoTextReact}>
      <div className={styles.activePage}>
        <p className={styles.locationText || styles.courseProgramText}>
          <a href="...">DevPractice</a> {">"} <a href="...">React</a>{" "}
        </p>
      </div>
      <div className={styles.general}>
        <h1 className={styles.direction}>React-разработчик с нуля</h1>
        <ul className={styles.courseProgramReact}>
          <li className={styles.CourseProgram}>
            <p>React.js Development</p>
          </li>
          <li className={styles.CourseProgram}>
            <p>Component-Based Architecture</p>
          </li>
          <li className={styles.CourseProgram}>
            <p>State Management</p>
          </li>
        </ul>
        <h2 className={styles.intro}>
          Погружение в магию React: <br /> от Основ до Продвинутых Концепций
        </h2>
      </div>
      <p className={styles.agitation}>
        <span style={{ color: "rgba(233, 120, 16, 1)" }}>{">>"}</span>{" "}
        Прокачайте свои навыки разработки, чтобы создавать <br /> современные и
        масштабируемые приложения на основе React!
      </p>
    </div>
  );
}
