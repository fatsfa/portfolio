import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <h1><span>I'm Fathima,</span> frontend developer based in UAE.</h1>
     <p> I'm a frontend developer from Dubai, UAE </p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
     </div>
    </div>
  )
}

export default Hero