

export const getDiscont = (discontPrice,price)=>{
    const percent =  Math.floor((discontPrice * 100 / price) - 100)
    return `${percent}%` 
}



export const discontProductsFilter = (products)=>{
    return products?.filter((product)=>product.discont_price)
}