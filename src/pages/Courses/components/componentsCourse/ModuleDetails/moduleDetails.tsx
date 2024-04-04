import React from "react";

import styles from "./moduleDetails.module.css";
import videoPng from "../../media/Exclude.png";
import { Module } from "../entities/entitiens-moduleTypes";

export interface VideoDetail {
  title: string;
  duration: string;
}

interface ModuleDetailsProps {
  module: Module;
  index: number;
}

const ModuleDetails: React.FC<ModuleDetailsProps> = ({ module }) => {
  return (
    <div className={styles.accardion}>
      {module.videos.map((video: VideoDetail, index: number) => (
        <div key={index} className={styles.lineIntro}>
          <p className={styles.innerText}>
            <img src={videoPng} alt="" />
            {video.title}
          </p>
          <p className={styles.innerText}>{video.duration}</p>
        </div>
      ))}
      <ul className={styles.explanationOfTheFirstModule}>
        {module.list.map((item: string, index: number) => (
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
