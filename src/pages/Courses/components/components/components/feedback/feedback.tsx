import { useEffect, useState } from "react";

import styles from "./feedback.module.css";
import dotPng from "../../components/media/Ellipse 2.png";


import { Users } from "../../../entities/entities/entitiens-feedbackUsers";
import getUsers from "../../../API/get-users";


export default function Feedback() {
  const [users, setUsers] = useState<Users[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        if (response) {
          setUsers(response as Users[]);
        }
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + users.length) % users.length
    );
  };

  return (
    <div className={styles.feedbackBlock} id="feedback">
      <div className={styles.itemTop}>
        <div className={styles.textHeader}>
          <img src={dotPng} alt="..." />
          <p>Отзывы наших учеников</p>
        </div>
        <div className={styles.buttonArrow}>
          <button
            className={styles.buttonLeft}
            onClick={handlePrev}
            id="left"
          ></button>
          <button
            className={styles.buttonRight}
            onClick={handleNext}
            id="right"
          ></button>
        </div>
      </div>
      {users.length > 0 && (
        <div className={styles.usersCard} key={users.id}>
          <img src={users[currentIndex].avatar} alt="..." />
          <div className={styles.innerText}>
            <h5 className={styles.userName}>{users[currentIndex].name}</h5>
            <p className={styles.userText}>{users[currentIndex].text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
