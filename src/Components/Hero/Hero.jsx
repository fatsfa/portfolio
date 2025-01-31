import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import github_icon from '../../assets/github_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import cv from '../../assets/cv.docx.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <h1><span>I'm Fathima,</span> frontend developer based in UAE.</h1>
     <p> With passion for developing modern React web applications. </p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink></div>
        <div ><a href={cv} download>
          <button className='hero-resume'>My Resume</button></a></div>
     </div>
     <div className='hero-icons'>
      <a href="https://github.com/fatsfa" target='_blank'>
      <img src={github_icon} alt='github_icon'/>        
      </a>
      <a href="https://www.linkedin.com/in/fathima-k-4802bb204" target='_blank'>
      <img src={linkedin_icon} alt='linkedin_icon'/>        
      </a>
     </div>
    </div>
  )
}

export default Hero