import { useParams } from "react-router";
import { fetchCategoryById } from "../../core/redux/store/slices/categoriesSlices";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductsList from "../../components/ProductsList";
import FilteredPanel from "../../components/FilteredPanel";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import styles from "./ProductsByCategory.module.css";
import { productsFilter, discountFilter ,sortProducts} from "../../utils";

const ProductsByCategoryPage = () => {
  const { categoryId } = useParams();
  const { categoryById, categoryByIdStatus, categoryByIdError,minPrice,maxPrice, isDiscount,sortValue } = useSelector(
    (state) => state.categoriesState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryById(categoryId));
    
  }, [categoryId]);

 const filteredProducts =sortProducts(discountFilter(productsFilter(categoryById?.data,minPrice,maxPrice),isDiscount),sortValue)
  return (
    <div className={`${styles.products_page} wrapper`}>
      <h3>{categoryById?.category?.title}</h3>
      <FilteredPanel />
      {categoryByIdStatus === "pending"?<Loader/> : <ProductsList products={filteredProducts} />}
      {categoryByIdError && <ErrorNotification/>}

    </div>
  );
};

export default ProductsByCategoryPage;
