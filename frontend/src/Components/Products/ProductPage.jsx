import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductList from './ListofProducts.jsx';
import ProductDetail from './ProductDetail.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer.jsx';

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
      <Router>
      <Routes>
      <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        
      </Routes>
    </Router>
    <Footer/>
    </div>
  )
}

export default ProductPage
