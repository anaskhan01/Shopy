import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home"
import Product from "./Pages/Product/Product"
import Mobile from "./Pages/Product/ProductPages/Mobile"
import Laptops from "./Pages/Product/ProductPages/Laptops"
import Fashion from "./Pages/Product/ProductPages/Fashion"
import Product_Detail from "./Pages/ProductDetails/Product_Detail";
import AddCart from "./Pages/Cart/AddCart";
import { Provider } from "react-redux";
import store from "./Store/store";



const App = () => {
  return (
    <div>
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product-detail" element={<Product_Detail />} />
        <Route path="mobile" element={<Mobile />} />
        <Route path="laptops" element={<Laptops />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="addcart" element={<AddCart />} />
      </Routes>
      
      </Provider>
    </div>
  );
};

export default App;
