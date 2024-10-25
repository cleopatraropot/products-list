import React from 'react';
import './App.scss';
import ProductDisplay from "./components/product-details/products-details";
import ProductsDetails from "./components/product-details/products-details";
import {Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<ProductDisplay/>} />
            <Route path="/products" element={<ProductsDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;