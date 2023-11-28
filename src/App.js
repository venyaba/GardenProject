import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage/index.js";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";
import AllCategoriesPage from "./pages/AllCategoriesPage/index.js";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./pages/CartPage";


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/categories/all" element={<AllCategoriesPage />} />
          <Route path="/category/:categoryId" element={<ProductsByCategoryPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/products/all" element={<AllProductsPage/>}/>
          <Route path="/sales" element={<AllProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
