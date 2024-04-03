import React, { useState } from "react";
import styles from "./moduleProject.module.css";
import { modules } from "./muduleArray.ts";
import openImg from "./img/plus.png";
import closeImg from "./img/close.png";
import dotPng from "../../../components//components/media/Ellipse 2.png";
import ModuleDetails from "../../../components/components/ModuleDetails/moduleDetails.tsx";
const ModuleProject: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<string | null>(null);

  const toggleOpen = (moduleId: string) => {
    setOpenModuleId(openModuleId === moduleId ? null : moduleId);
  };

  return (
    <div id="moduleProject">
      <div className={styles.textHeader}>
        <img src={dotPng} alt="dot" />
        <h3>Программа курса</h3>
      </div>
      <div className={styles.containerModule}>
        {modules.map((module) => (
          <div key={module.id} className={styles.contentInModules}>
            <div className={styles.numberAndButton}>
              <p className={styles.textModule}>{module.name}</p>
              <span onClick={() => toggleOpen(module.id)}>
                <img
                  className={styles.plus}
                  src={openModuleId === module.id ? closeImg : openImg}
                  alt=""
                />
              </span>
            </div>
            {openModuleId === module.id && <ModuleDetails module={module} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleProject;
