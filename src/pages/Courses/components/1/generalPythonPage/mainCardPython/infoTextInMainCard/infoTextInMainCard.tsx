import styles from "./infoText.module.css";
export default function InfoTextInMainCard() {
  return (
    <div className={styles.infoTextReact}>
      <div className={styles.activePage}>
        <p className={styles.locationText || styles.courseProgramText}>
          <a href="...">DevPractice</a> {">"} <a href="...">Python</a>{" "}
        </p>
      </div>
      <div className={styles.general}>
        <h1 className={styles.direction}>Python-разработчик с нуля </h1>
        <ul className={styles.courseProgramReact}>
          <li className={styles.courseProgram}>
            <p>Django-разработка</p>
          </li>
          <li className={styles.courseProgram}>
            <p>ООП в Python</p>
          </li>
          <li className={styles.courseProgram}>
            <p>Управление состоянием (Flask/Django)</p>
          </li>
        </ul>
        <h2 className={styles.intro}>
          Изучи Python разработку с нуля <br /> до написания своего
          веб-приложения
        </h2>
      </div>
      <p className={styles.agitation}>
        <span style={{ color: "rgba(233, 120, 16, 1)" }}>{">>"}</span>{" "}
        Прокачайте свои навыки разработки, чтобы создавать <br /> современные и
        масштабируемые приложения на основе Python!
      </p>
    </div>
  );
}
