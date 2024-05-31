import Hero from "./Components/Hero/Hero";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ProductPage from "./Components/Products/ProductPage.jsx";
import LoginPage from "./Components/LoginSignup/LoginPage.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
