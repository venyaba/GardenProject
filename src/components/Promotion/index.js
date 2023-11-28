import { Link } from "react-router-dom";
import promoImg from "../../assets/promotion/promo.png";
import styles from "./Promotion.module.css";

const Promotion = () => {
  return (
    <div className={`${styles.promo_wrapper} wrapper`}>
      
        <div className={styles.promo}>
          <div className={styles.promo_title}>
            <h1>Sale</h1>
            <h2>New season</h2>

            <a href = "#sales" className={styles.promo_btn}>
              Sale
            </a>
          </div>

          <div className={styles.promo_img}></div>
        </div>
      </div>

  );
};

export default Promotion;
