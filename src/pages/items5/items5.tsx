import { useEffect, useState } from "react";
import { Teachers } from "../../api/teachers";
import getTeachers from "../../api/teachers.json";
import Items5Skeleton from "./items5Skeleton";
import styles from "./items5.module.css";

import graphic from "../../assets/svg/graphic.svg";

function Items5() {
  const [teachers, setTeachers] = useState<Teachers[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTeachers(getTeachers);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.items5}>
      <div className="container">
        <div className={styles.items5Content}>
          <div className={styles.items5Title}>
            <h1>Команда специалистов</h1>
          </div>
          <div className={styles.items5Cards}>
            {loading
              ? [...new Array(4)].map((_, index) => (
                  <Items5Skeleton key={index} className={styles.items5Card} />
                ))
              : teachers.map((teacher, index) => (
                  <div key={index} className={styles.items5Card}>
                    <div className={styles.items5Img}>
                      <img
                        className={styles.items5Teacher}
                        src={teacher.img}
                        alt={teacher.name}
                      ></img>
                      <img
                        className={styles.items5Graphic}
                        src={graphic}
                        alt="graphic"
                      ></img>
                    </div>
                    <div className={styles.items5CardMore}>
                      <p>{teacher.jobtitle}</p>
                    </div>
                    <h2>{teacher.name}</h2>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items5;
