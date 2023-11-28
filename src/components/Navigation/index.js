import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useMediaQuery } from "react-responsive";
import Burger from "../../UI/Burger";


const Navigation = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  const activeClass = ({ isActive }) => (isActive ? styles.active : "");
  return (
    <div className={styles.navigation}>
      {isMobile? <Burger/>:<>
      <NavLink to="/" className={activeClass}>
        Main page
      </NavLink>
      <NavLink to="/products/all" className={activeClass}>
        All products
      </NavLink>
      <NavLink to="/sales" className={activeClass}>
        All sales
      </NavLink></>}
      
    </div>
  );
};
export default Navigation;
