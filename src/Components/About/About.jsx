import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
        <div className="about-para">
            <p>I am a frontend developer passionate about creating interactive applications and experiences on web.</p>
        </div>
        <div className="about-skills">
        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
        <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
        </div>
    </div>
    
    </div>
  )
}

export default About