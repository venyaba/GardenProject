import { useDispatch } from "react-redux";
import { getDiscont } from "../../utils";
import  CustomButton from '../../UI/CustomButton'
import { addToCart } from "../../core/redux/store/slices/cartSlices";

import styles from './ProductDetails.module.css'



const ProductDetails = ({
  title,
  price,
  discont_price,
  image,
  description,
  id
}) => {

    const dispatch = useDispatch()
  const hasDiscont = discont_price;
  const percent = getDiscont(discont_price, price);
  return (
    <div className={styles.product_details}>
      <h4>{title}</h4>
      <div className={styles.product_container}>
        <div className={styles.product_img}>
          <img
            src={`${process.env.REACT_APP_ENDPOINT_URL}/${image}`}
            alt={title}
          />
        </div>
        <div className={styles.product_info}>
          <div className={styles.prices}>
            {hasDiscont && <span>{discont_price}$</span>}
            <span>{price}$</span>
            {hasDiscont && <span>{percent}</span>}
          </div>
          <CustomButton
            title="To cart"
            size="large"
            style={{ width: "40%" }}
            handleClick={()=>dispatch(addToCart({title,price,discont_price,image,id}))}
          />
          <hr/>
          <span>Description</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
