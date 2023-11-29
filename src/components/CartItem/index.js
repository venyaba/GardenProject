import { useSelector } from "react-redux";
import CustomButton from "../../UI/CustomButton";
import styles from "./CartItem.module.css";
import { incrementQuantity,decrementQuantity,removeItem } from "../../core/redux/store/slices/cartSlices";
import { useDispatch } from "react-redux";

const CartItem = ({ image, title, price, discont_price,quantity ,id}) => {
    const dispatch = useDispatch()
  return (
    <li key={id} className={styles.cartItem} >
      <img src={`${process.env.REACT_APP_ENDPOINT_URL}${image}`} />
      <div className={styles.cartItem_actions}>
        <span>{title}</span>
        <div className={styles.actions_btn}>
          <CustomButton title="&#8211;" handleClick={()=>dispatch(decrementQuantity(id))} />
          <span>{quantity}</span>
          <CustomButton title="&#43;" handleClick={()=>dispatch(incrementQuantity(id))}/>
        </div>
        
      </div>
      <div className={styles.cartItem_prices}>
          <span>{discont_price ? discont_price : price}<sub>$</sub></span>
          {discont_price ? <span>{price}$ </span> : null}
        </div>
      <CustomButton title="X" handleClick={()=>dispatch(removeItem(id))} />
    </li>
  );
};

export default CartItem;
