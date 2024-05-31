import React from 'react'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
const LoginPage = () => {
  return (
     <div>
        <Navbar/>
        <Router>
             <Routes>
                 <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Signup />} />
                   </Routes>
                     </Router>
                     <Footer/>
                      </div>
  )
}

export default LoginPage
