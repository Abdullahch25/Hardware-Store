import Hero from './Components/Hero/Hero';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ProductPage from './Components/Products/ProductPage.jsx';
import LoginPage from './Components/LoginSignup/LoginPage.jsx';

const App = () => {
  return (

   <div className="App">
  
     <Navbar/>
      <Hero />
      <NewsLetter/>
  
  
    
      
      
      <Footer/>
       <LoginPage/>
    <ProductPage/>
    </div>
  );
  
}

export default App