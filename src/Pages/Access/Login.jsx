import React from 'react'
import "./Login.css"
import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h2 className='login-logo'>Facebook</h2>
                    <span>Connect with your friends and world around you on facebook.</span>
                </div>
                <div className="loginRight">
                        <div className="loginBox">
                            <input className='inputText' type="text" placeholder='Username or email' />
                            <input className='inputText' type="password" placeholder='Password' />
                            <button className='loginButton'>Login</button>
                            <span className='login-forget'>Forgotten password?</span>
                            <hr  className='loginHr'/>
                            <button className='login-create'> <Link to="/register"> Create New Account</Link> </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login
