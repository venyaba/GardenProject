import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../../components/ProductsList";
import { useEffect } from "react";
import { fetchAllProducts } from "../../core/redux/store/slices/productsSlaces";
import styles from "./AllProductsPage.module.css";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import { useLocation } from "react-router";
import { discontProductsFilter } from "../../utils";

const AllProductsPage = () => {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const location = useLocation();
  const isSalesRoute = location.pathname === "/sales";

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <div className={`${styles.products_page} wrapper`}>
      {status === "pending" ? (
        <Loader />
      ) : (
        <ProductsList
          products={isSalesRoute ?  discontProductsFilter(products): products }
        />
      )}
      {error && <ErrorNotification />}
    </div>
  );
};

export default AllProductsPage;
