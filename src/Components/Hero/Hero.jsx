import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import github_icon from '../../assets/github_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import cv from '../../assets/cv.docx.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <h1><span>I'm Fathima,</span> Full-Stack Developer based in UAE.</h1>
    
     <p>
        I specialize in building modern, scalable web applications using React, Node.js, and other cutting-edge technologies.
      </p>
      <p>
        Let's create something amazing together!
      </p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink></div>
        <div ><a href={cv} download>
          <button className='hero-resume'>My Resume</button></a></div>
     </div>
     <div className='hero-icons'>
      <a href="https://github.com/fatsfa" target='_blank' rel='noopener noreferrer'>
      <img src={github_icon} alt='github_icon'/>        
      </a>
      <a href="https://www.linkedin.com/in/fathima-k-4802bb204" target='_blank' rel='noopener noreferrer'>
      <img src={linkedin_icon} alt='linkedin_icon'/>        
      </a>
     </div>
    </div>
  )
}

export default Hero