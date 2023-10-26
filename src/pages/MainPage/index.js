import Promotion from "../../components/Promotion";
import CategoryContainer from "../../components/CategoryContainer";
import DiscountSection from '../../components/DiscountSection'
import SaleSection from "../../components/SaleSection";


const MainPage = () => {
  
  return (
    <div>
      <Promotion />
      <CategoryContainer />
      <DiscountSection/>
      <SaleSection/>
    </div>
  );
};

export default MainPage;
