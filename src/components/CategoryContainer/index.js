import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router";
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

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className={`${styles.categories_wrapper} wrapper`}>
      <div className={styles.categories_title}>
        <h3 id="catalog">Catalog</h3>
        <CustomButton
          title="All categories"
          handleClick={() => navigate("/categories/all")}
        />
      </div>
      <Swiper
        spaceBetween={32}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        slidesPerView={4}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {categoriesStatus === "pending" ? (
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
  );
};

export default CategoryContainer;
