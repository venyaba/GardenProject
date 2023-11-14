import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../core/redux/store/slices/categoriesSlices";
import CategoryItem from "../CategoryItem";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import styles from "./CategoryContainer.module.css";
import CustomButton from "../../UI/CustomButton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CategoryContainer = () => {
  const { categories, categoriesStatus, categoriesError } = useSelector(
    (state) => state.categoriesState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const isDisplayed = location.pathname !== "/categories/all";

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="wrapper">
      <div className={styles.categories_wrapper}>
        <div className={styles.categories_title}>
          {isDisplayed ? <h3>Catalog</h3> : null}
          {isDisplayed ? (
            <CustomButton
              title="All categories"
              handleClick={() => navigate("/categories/all")}
            />
          ) : null}
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={isDisplayed ? 4 : 5}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {categoriesStatus === "loading" ? (
            <Loader />
          ) : (
            categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryItem {...category} />
              </SwiperSlide>
            ))
          )}

          {categoriesError && <ErrorNotification />}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryContainer;
