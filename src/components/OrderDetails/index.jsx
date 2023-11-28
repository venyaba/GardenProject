import { getTotal } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OrderDetails.module.css";

import PhoneForm from "../PhoneForm";

const OrderDetails = () => {
  const { cart } = useSelector((state) => state.cart);
  const totalPrice = getTotal(cart).totalPrice;
  
 

  return (
    <div className={styles.order_container}>
      <h3>Order details</h3>

      <div className={styles.order_total}>
        <span>Total</span>
        <span>
          {totalPrice} <sub>$</sub>
        </span>
      </div>
      <PhoneForm textButton='Order' inputName="order"/>
    </div>
  );
};

export default OrderDetails;
