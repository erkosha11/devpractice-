import React from "react";

import styles from "./moduleDetails.module.css";
import videoPng from "../media/Exclude.png";
import { Module } from "../../entities/entitiens-moduleTypes";

interface ModuleDetailsProps {
  module: Module;
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({ module }) => {
  return (
    <div className={styles.accardion}>
      {module.videos.map((video, index) => (
        <div key={index} className={styles.lineIntro}>
          <p className={styles.innerText}>
            <img src={videoPng} alt="" />
            {video.title}
          </p>
          <p className={styles.innerText}>{video.duration}</p>
        </div>
      ))}
      <ul className={styles.explanationOfTheFirstModule}>
        {module.list.map((item, index) => (
          <li key={index} className={styles.innerText}>
            {">"} {item}
          </li>
        ))}
      </ul>
      <div className={styles.ending}>
        <p>{module.description}</p>
      </div>
    </div>
  );
};

export default ModuleDetails;
