import { useEffect, useState } from "react";
import { Review } from "../../api/review";
import getReview from "../../api/review.json";

import Items7Skeleton from "./items7Skeleton";
import styles from "./items7.module.css";

function Items7() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setReviews(getReview);
      setLoading(false);
    }, 2000);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className={styles.items7}>
      <div className="container">
        <div className={styles.items7Content}>
          <div className={styles.items7Control}>
            <div className={styles.items7Title}>
              <h2>
                <span></span>Отзывы наших учеников
              </h2>
            </div>
            <div className={styles.items7Buttons}>
              <button
                className={styles.items7ArrowLeft}
                onClick={prevReview}
              ></button>
              <button
                className={styles.items7ArrowrRight}
                onClick={nextReview}
              ></button>
            </div>
          </div>
          <div className={styles.items7Cards}>
            {loading ? (
              [...new Array(2)].map((_, index) => (
                <Items7Skeleton key={index} className={styles.items7Card} />
              ))
            ) : (
              <div className={styles.items7Cards}>
                {[0, 1].map((index) => {
                  const reviewIndex = (currentIndex + index) % reviews.length;
                  return (
                    <div className={styles.items7Card} key={index}>
                      <div className={styles.items7CardImg}>
                        <img
                          src={reviews[reviewIndex].img}
                          alt={reviews[reviewIndex].name}
                        />
                      </div>
                      <div className={styles.items7Text}>
                        <h2>{reviews[reviewIndex].name}</h2>
                        <p>{reviews[reviewIndex].description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items7;
