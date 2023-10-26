import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import MainPage from "./pages/MainPage/index.js";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
