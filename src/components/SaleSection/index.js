import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { fetchAllProducts } from "../../core/redux/store/slices/productsSlaces";
import { discontProductsFilter } from "../../utils";
import Product from "../Product";
import { Loader } from "../../UI/Loader";
import { ErrorNotification } from "../../UI/ErrorNotification";
import styles from "./SaleSection.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SaleSection = () => {
  const { products, status, error } = useSelector(
    (state) => state.products
  );
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="wrapper">
      <div className={styles.sale_container}>
        <h3 id="sales">Sale</h3>
        <Swiper
          spaceBetween={32}
          slidesPerView={4}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {status === "pending" ? (
            <Loader/>
          ) : (
            discontProductsFilter(products).map((product) => (
              <SwiperSlide key={product.id}>
                <Product {...product}/>
              </SwiperSlide>
            ))
          )}

          {error && <ErrorNotification />}
        </Swiper>
      </div>
    </div>
  );
};

export default SaleSection;
