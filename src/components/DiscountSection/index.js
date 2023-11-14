import discountImg from '../../assets/discount/discount.png'
import styles from './DiscountSection.module.css'


const DiscountSection = () => {
  return (
    <div className={`${styles.discount_wrapper} wrapper`}>
      <img src={discountImg} />
      <div className={styles.discount_info}>
        <h3>5% off</h3>
        <h4>on the first order</h4>
        <div className={styles.discount_input}>
        <input type="text" placeholder="+49"/>
        <button>Get a discount</button>
        </div>
       
      </div>
    </div>
  );
};

export default DiscountSection;
