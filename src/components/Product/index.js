import { getDiscont } from "../../utils";
import styles from "./Product.module.css";

const Product = ({ discont_price, price, image, title }) => {
  const hasDiscont = discont_price;
  const percent = getDiscont(discont_price, price);


  return (
    <div div className={styles.product}>
      <img
        className={styles.product_img}
        src={`${process.env.REACT_APP_ENDPOINT_URL}/${image}`}
        alt={title}
      />
      <div className={styles.product_info}>
        <div className={styles.prices}>
          {hasDiscont && <span>{discont_price}$</span>}
          <span>{price}$</span>
          {hasDiscont && <span>{percent}</span>}
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};
export default Product;
