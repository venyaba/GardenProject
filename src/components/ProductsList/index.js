import Product from "../Product";
import styles from './ProductsList.module.css'

const ProductsList = ({ products }) => {
   
  return (
    <ul className={styles.products_list}>
      {products?.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;