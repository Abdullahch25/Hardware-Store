import React from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='signup'>
        <div className="signup-container">
            <h1>Sign Up</h1>
            <div className="signup-fields">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder='Email Address'/>
                <input type="password" placeholder='Password'/>
            </div>
            <button>Continue</button>
            Already have an account? <Link to="/login"><span>Login here</span></Link>
            <div className="signup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  );
}

export default Signup;
