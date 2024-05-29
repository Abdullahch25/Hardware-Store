import Hero from './Components/Hero/Hero';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import React from 'react'

import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
   
   <div className="App">
      <Hero />
      <NewsLetter/>
  
  
    
      <Navbar/>
      
      <Footer/>
    </div>
  );
  
}

export default App