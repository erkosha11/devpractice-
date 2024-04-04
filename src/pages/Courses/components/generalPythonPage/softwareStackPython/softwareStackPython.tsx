import styles from "./softwareStack.module.css";
import png from "./mediaSvg/Ellipse.png";

import pythonIcon from "./mediaSvg/Python.png";
import oopIcon from "./mediaSvg/ООП.png";
import interviewsIcon from "./mediaSvg/interview.png";
import componentsIcon from "./mediaSvg/components.png";
import interviewIcon from "./mediaSvg/centerinterviews.png";
import projectsIcon from "./mediaSvg/projects.png";
import animationIcon from "./mediaSvg/animation.png";
import conditionIcon from "./mediaSvg/condition.png";
import hookieIcon from "./mediaSvg/hookie.png";
import cv from "./mediaSvg/cv.png";

const firstLineSkills = [
  { icon: pythonIcon, text: "Python" },
  { icon: oopIcon, text: "Объектно-ориентированное программирование" },
  { icon: interviewsIcon, text: "Как проходить собеседования" },
];
const secondLineSkills = [
  { icon: componentsIcon, text: "Написание графических интерфейсов" },
  { icon: interviewIcon, text: "Условные операторы и циклы" },
  { icon: projectsIcon, text: "4 проекта в портфолио" },
];
const thirdLineSkills = [
  { icon: animationIcon, text: "Data Science" },
  { icon: conditionIcon, text: "Веб-фреймворк Django" },
  { icon: cv, text: "Как составлять CV" },
  { icon: hookieIcon, text: "Работой с Базами данных" },
];

export default function SoftwareStack() {
  return (
    <div className={styles.stackBlock} id="softwareStack">
      <div className={styles.upperPart}>
        <img style={{ width: "16px", height: "16px" }} src={png} alt="..." />
        <h3>Чему вы научитесь</h3>
      </div>
      <div className={styles.stackContent}>
        <div className={styles.firstLine}>
          {firstLineSkills.map((skill, index) => (
            <div key={index} className={styles.boxIcon}>
              <img
                style={{
                  width: "54px",
                  height: "54px",
                }}
                src={skill.icon}
                alt={skill.text || "icon"}
              />
              {skill.text && <p className={styles.text}>{skill.text}</p>}
            </div>
          ))}
        </div>
        <div className={styles.secondLine}>
          {secondLineSkills.map((skill, index) => (
            <div key={index} className={styles.boxIcon}>
              <img
                key={index}
                style={{
                  width: "54px",
                  height: "54px",
                }}
                src={skill.icon}
                alt={skill.text || "icon"}
              />
              {skill.text && <p className={styles.text}>{skill.text}</p>}
            </div>
          ))}
        </div>
        <div className={styles.thirdLine}>
          {thirdLineSkills.map((skill, index) => (
            <div key={index} className={styles.boxIcon}>
              <img
                key={index}
                style={{
                  width: "54px",
                  height: "54px",
                }}
                src={skill.icon}
                alt={skill.text || "icon"}
              />
              {skill.text && <p className={styles.text}>{skill.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
