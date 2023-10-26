import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../core/redux/store/slices/productsSlaces";

const SaleSection = () =>{
    const { products, status, error } = useSelector(
        (state) => state.productsState
      );
      const dispatch = useDispatch()

      const discountProducts = products?.filter((product)=>product.discount_price)
    useEffect(()=>{
        dispatch(fetchAllProducts())
       
    },[])
    console.log("discountProducts",discountProducts)
    return<div>
{products?.filter((product)=>product.discont_price).map(prod=>(<div>{prod.title}</div>))}
    </div>
}

export default SaleSection;