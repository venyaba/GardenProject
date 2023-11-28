import { Link, useNavigate } from "react-router-dom";

import Logo from "../Logo";
import CustomButton from "../../UI/CustomButton";
import Navigation from "../Navigation";
import styles from "./Header.module.css";
import cartImg from "../../assets/cart/cart.png";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../utils";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const cartTotalQuantity = getTotalQuantity(cart);

  return (
    <header>
      <div className={`${styles.header} wrapper`}>
        <div className={styles.header_logo}>
          <Logo />
          <a href="#catalog">
            <CustomButton title="Catalog" handleClick={() => navigate("/")} />
          </a>
        </div>
        <div className={styles.header_nav}>
          <Navigation />

          <Link to="/cart" className={styles.header_cart}>
            <img src={cartImg} />
            {cartTotalQuantity > 0? <span>{cartTotalQuantity}</span>:null}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
