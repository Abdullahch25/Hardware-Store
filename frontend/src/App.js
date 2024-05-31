import Hero from "./Components/Home/Hero/NewsLetter/Hero.jsx";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ProductList from './Components/Products/ListofProducts.jsx';
import ProductDetail from './Components/Products/ProductDetail.jsx';
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Login from './Components/LoginSignup/Login.jsx';
import Signup from './Components/LoginSignup/Signup.jsx';

const App = () => {
  return (
    <Router>
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
              <Route path="/" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
      </Router>

  );
};

export default App;
