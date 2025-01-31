import React from 'react'
import './Footer.css'
import user_icon from'../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h2>FATHIMA</h2> 
                <p>I am a frontend developer from UAE</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2024 Fathima k. All rights</p>
             <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Conncet with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer