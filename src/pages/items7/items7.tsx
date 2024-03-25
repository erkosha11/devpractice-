import { useEffect, useState } from "react";
import { Review } from "../../api/review";
import getReview from "../../api/review.json";

import Items7Skeleton from "./items7Skeleton";
import styles from "./items7.module.css";

function Items7() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setReviews(getReview);
      setLoading(false);
    }, 2000);
  }, []);

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
              <button className={styles.items7ArrowLeft}></button>
              <button className={styles.items7ArrowrRight}></button>
            </div>
          </div>
          <div className={styles.items7Cards}>
            {loading ? (
              [...new Array(2)].map((_, index) => (
                <Items7Skeleton key={index} className={styles.items7Card} />
              ))
            ) : (
              <div className={styles.items7Cards}>
                {reviews.map((review, index) => (
                  <div className={styles.items7Card} key={index}>
                    <div className={styles.items7CardImg}>
                      <img src={review.img} alt={review.name} />
                    </div>
                    <div className={styles.items7Text}>
                      <h2>{review.name}</h2>
                      <p>{review.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items7;
