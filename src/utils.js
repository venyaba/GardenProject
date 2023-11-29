export const getDiscont = (discontPrice, price) => {
  const percent = Math.floor((discontPrice * 100) / price - 100);
  return `${percent}%`;
};

export const discontProductsFilter = (products) => {
  return products?.filter((product) => product.discont_price);
};

export const productsFilter = (products, minPrice, maxPrice) => {
  const minPriceFloat = parseFloat(minPrice);
  const maxPriceFloat = parseFloat(maxPrice);
  const filterProducts = products?.filter(({ discont_price, price }) => {
    const productPrice = discont_price ? discont_price : price;

    return (
      (!minPriceFloat || minPriceFloat <= productPrice) &&
      (!maxPriceFloat || maxPriceFloat >= productPrice)
    );
  });

  return filterProducts;
};

export const discountFilter = (products, isDiscount) => {
  return isDiscount
    ? products.filter((product) => product.discont_price)
    : products;
};

export const sortProducts = (products, sortedValue) => {
  if (sortedValue === "Low-to-high") {
    return sortProductsConditions(products);
  } else if (sortedValue === "High-to-low") {
    return sortProductsConditions(products).reverse();
  } else {
    return products;
  }
};

const sortProductsConditions = (arr) => {
  return arr?.sort((a, b) => {
    if (a.discont_price !== null && b.discont_price !== null) {
      return a.discont_price - b.discont_price;
    } else if (a.discont_price !== null && b.price) {
      return a.discont_price - b.price;
    } else if (a.price && b.discont_price !== null) {
      return a.price - b.discont_price;
    } else {
      return a.price - b.price;
    }
  });
};


export const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }


export const getTotal = (cart) => {
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(item => {
    console.log('item', item)
    totalQuantity += item.quantity
    totalPrice += item.discont_price? item.discont_price * item.quantity: item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
}