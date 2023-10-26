import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? styles.active : "");
  return (
    <div className={styles.navigation}>
      <NavLink to="/" className={activeClass}>
        Main page
      </NavLink>
      <NavLink to="/products" className={activeClass}>
        All products
      </NavLink>
      <NavLink to="/sales" className={activeClass}>
        All sales
      </NavLink>
    </div>
  );
};
export default Navigation;
