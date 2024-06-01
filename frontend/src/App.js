import Hero from "./Components/Home/Hero/Hero.jsx";
import NewsLetter from "./Components/Home/Hero/NewsLetter/NewsLetter.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ProductList from "./Components/Products/ListofProducts.jsx";
import ProductDetail from "./Components/Products/ProductDetail.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Login from "./Components/LoginSignup/Login.jsx";
import Signup from "./Components/LoginSignup/Signup.jsx";
import CartPage from './Components/Cart/CartPage.jsx';
import CartProvider from './Components/Context/CartContext.jsx';
import CheckoutPage from './Components/Checkout/CheckoutPage.jsx';
import Admin from "./Components/AdminPanel/Admin.jsx";
import DashBoard from "./Components/AdminPanel/DashBoard.jsx";
const App = () => {
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
};

export default App;
