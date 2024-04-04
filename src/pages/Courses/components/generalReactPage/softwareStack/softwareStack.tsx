import styles from "./softwareStack.module.css";
import png from "../mainCardReact/courseDetails/media/Ellipse.png";

import reactIcon from "./mediaIcon/align-horizontal-centerreact.png";
import jsIcon from "./mediaIcon/Framejs.png";
import componentIcon from "./mediaIcon/align-horizontal-centercomponents.png";
import jsxIcon from "./mediaIcon/align-horizontal-centerjsx.png";
import conditionIcon from "./mediaIcon/align-horizontal-centercondition.png";
import hookieIcon from "./mediaIcon/align-horizontal-centerhookee.png";
import animationIcon from "./mediaIcon/align-horizontal-centeranimation.png";
import projectIcon from "./mediaIcon/align-horizontal-centerproject.png";
import interviewsIcon from "./mediaIcon/align-horizontal-centerinterviews.png";
import cvIcon from "./mediaIcon/align-horizontal-centercv.png";

const firstLineSkills = [
  { icon: reactIcon, text: "React" },
  { icon: jsIcon, text: "JavaScript" },
  { icon: componentIcon, text: "Работа с компонентами" },
  { icon: jsxIcon, text: "JSX" },
];

const secondLineSkills = [
  { icon: conditionIcon, text: "Работа с состоянием" },
  { icon: hookieIcon, text: "Хуки" },
  { icon: animationIcon, text: "Работа с анимацией" },
  { icon: projectIcon, text: "+4 проекта в портфолио" },
  { icon: interviewsIcon, text: "Как проходить собеседования " },
  { icon: cvIcon, text: "Как составлять резюме" },
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
      </div>
    </div>
  );
}
