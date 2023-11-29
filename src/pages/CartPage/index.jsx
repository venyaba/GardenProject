
import { useSelector } from "react-redux";

import CartItem from "../../components/CartItem";
import styles from "./CartPage.module.css";
import OrderDetails from "../../components/OrderDetails";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate()

  return (
    <div className={`${styles.cart_page} wrapper`}>
      <h3>Shopping cart</h3>
      <button onClick={()=>navigate('/products/all')} className={styles.cartPage_btn}> &#8249; Back to the store</button>

      <div className={styles.cartPage_info}>
        <ul>
          {cart.length > 0 ? (
            cart.map((cartItem) => <CartItem {...cartItem} key={cartItem.id} />)
          ) : (
            <p style={{ textAlign: "center" }}>Your's cart is empty.</p>
          )}
        </ul>
        <OrderDetails />
      </div>
    </div>
  );
};

export default CartPage;
