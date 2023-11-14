import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../core/redux/store/slices/productsSlaces";
import { useParams } from "react-router";

import styles from "./ProductDetailsPage.module.css";
import ProductDetails from "../../components/ProductDetails";
import { Loader } from "../../UI/Loader";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { productById, productByIdStatus, productByIdError } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
    if (productById !== null) {
      console.log("productById", productById);
    }
  }, [dispatch]);
  return (
    <div className={`${styles.product_page} wrapper`}>
      {productByIdStatus === "pending" ? (
        <Loader />
      ) : (
        <ProductDetails
          title={productById?.title}
          price={productById?.price}
          discont_price={productById?.discont_price}
          description={productById?.description}
          image={productById?.image}
        />
      )}
    </div>
  );
};

export default ProductDetailsPage;
