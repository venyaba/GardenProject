import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../../UI/Loader";
import CategoryItem from "../../components/CategoryItem";
import { fetchCategories } from "../../core/redux/store/slices/categoriesSlices";
import { ErrorNotification } from "../../UI/ErrorNotification";
import CategoryList from "../../components/CategoryList";

import styles from './AllCategoriesPage.module.css'
import CategoryContainer from "../../components/CategoryContainer";

const AllCategoriesPage = () => {
  const { categories, categoriesStatus, categoriesError } = useSelector(
    (state) => state.categoriesState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className={`${styles.categoriesMain_page} wrapper`}>
      <h3>All categories: </h3>

      
      {/* <CategoryContainer/> */}
      <CategoryList categories={categories}/>
    </div>
  );
};

export default AllCategoriesPage;
