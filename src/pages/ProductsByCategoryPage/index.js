import { useParams } from "react-router";
import { fetchCategoryById } from "../../core/redux/store/slices/categoryByIdSlices";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../components/ProductsList";
import FilteredPanel from "../../components/FilteredPanel";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import styles from "./ProductsByCategory.module.css";

const ProductsByCategoryPage = () => {
  const { categoryId } = useParams();
  const { category, status, error } = useSelector(
    (state) => state.categoryByIdState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryById(categoryId));
  }, [categoryId]);
  return (
    <div className={`${styles.products_page} wrapper`}>
      <h3>{category?.category?.title}</h3>
      <FilteredPanel />
      {status === "pending"?<Loader/> : <ProductsList products={category?.data} />}
      {error && <ErrorNotification/>}

    </div>
  );
};

export default ProductsByCategoryPage;
