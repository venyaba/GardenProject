import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../core/redux/store/slices/categoriesSlices";
import CategoryItem from "../CategoryItem";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import styles from "./CategoryContainer.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CategoryContainer = () => {
  const { categories, status, error } = useSelector(
    (state) => state.categoriesState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="wrapper">
      <div className={styles.categories_wrapper}>
        <div className={styles.categories_title}>
          <h3>Catalog</h3>
          <button>All categories</button>
        </div>
        <Swiper
          spaceBetween={32}
          slidesPerView={4}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {status === "loading" ? (
            <Loader  />
          ) : (
            categories.map((category) => (
              <SwiperSlide key={category.id}>
                <CategoryItem {...category} />
              </SwiperSlide>
            ))
          )}

          {error && <ErrorNotification />}
        </Swiper>
      </div>
    </div>
  );
};

export default CategoryContainer;
