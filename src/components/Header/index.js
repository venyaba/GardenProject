import { Link } from "react-router-dom";

import Logo from "../Logo";
import CatalogButton from "../../UI/button";
import Navigation from "../Navigation";
import styles from "./Header.module.css";
import cart from "../../assets/cart/cart.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className={styles.header}>
          <div className={styles.header_logo}>
            <Logo />
            <CatalogButton />
          </div>
          <div className={styles.header_nav}>
            <Navigation />

            <Link to="/cart" className={styles.header_cart}>
              <img src={cart} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
