//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.jsx';
import ProductDetail from './components/ProductDetail/ProductDetail.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path= "/OrderConfirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
