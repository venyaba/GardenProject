import { useState } from "react";
import { useNavigate } from "react-router";
import { getDiscont } from "../../utils";
import { addToCart } from "../../core/redux/store/slices/cartSlices";
import styles from "./Product.module.css";
import CustomButton from "../../UI/CustomButton";
import { useDispatch } from "react-redux";

const Product = ({ discont_price, price, image, title, id }) => {
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const hasDiscont = discont_price;
  const percent = getDiscont(discont_price, price);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({id,discont_price,price,image,title}));
  };

  return (
    <div
      className={styles.product}
      onClick={() => navigate(`/products/${id}`)}
      onMouseOver={() => setIsHoveredButton(true)}
      onMouseOut={() => setIsHoveredButton(false)}
    >
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
        <span className={styles.product_title}>{title}</span>
      </div>
      {isHoveredButton && (
        <CustomButton title="Add to cart" handleClick={(e) => handleAddToCart(e)} />
       )}
    </div>
  );
};
export default Product;
