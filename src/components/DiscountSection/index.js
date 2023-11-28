import discountImg from '../../assets/discount/discount.png'
import styles from './DiscountSection.module.css'
import PhoneForm from '../PhoneForm';


const DiscountSection = () => {
  return (
    <div className={`${styles.discount_wrapper} wrapper`}>
      <img src={discountImg} />
      <div className={styles.discount_info}>
        <h3>5% off</h3>
        <h4>on the first order</h4>
       
        <PhoneForm textButton='Get a discount' inputName='discount'/>
      
       
      </div>
    </div>
  );
};

export default DiscountSection;
