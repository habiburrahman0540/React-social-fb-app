import React from 'react'
import "./Register.css"
import {Link} from "react-router-dom"
const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h2 className='login-logo'>Facebook</h2>
                    <span>Connect with your friends and world around you on facebook.</span>
                </div>
                <div className="loginRight">
                        <div className="loginBox">
                            <input className='inputText' type="text" placeholder='Username' />
                            <input className='inputText' type="text" placeholder='Email' />
                            <input className='inputText' type="password" placeholder='Password' />
                            <input className='inputText' type="password" placeholder='Confirm Password' />
                            <button className='loginButton'>Sign Up</button>
                           
                            <hr  className='loginHr'/>
                            <button className='login-create'>
                                <Link to="/login"> Log into account</Link>
                               </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register
