import React from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/pass.png'



const LoginSignup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">SignUp</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                <img src={user_icon} alt="" height={15} />
                    <input type="text" placeholder='user name'/>
                </div>
                <div className="input">
                    <img src={email_icon} height={15} alt="" />
                    <input type="email" placeholder='email' />
                </div>
                <div className="input">
                    <img src={pass_icon} height={15} alt="" />
                    <input type="password" placeholder='enter your password' />
                </div>
                
                <div className="submit-container">
                    <div className="submit">Create New Login </div>
                    <div className="forgot-password">Lost Password?<span>Click here</span></div>

                </div>
            </div>
        </div>
    )
}

export default LoginSignup
