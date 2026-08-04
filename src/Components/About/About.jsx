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
        <p>I am a Full-Stack Developer with an M.Tech in Computer Science and Engineering, focused on building clean and practical web applications.</p>
        <p>I have knowledge in React, Node.js, Express.js, and MongoDB, and I enjoy learning by building real-world projects end to end.</p>
        </div>
        <div className="about-skills">
      <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"72%"}}/></div>
      <div className="about-skill"><p>JavaScript</p><hr style={{width:"75%"}}/></div>
      <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
      <div className="about-skill"><p>Node JS</p><hr style={{width:"65%"}}/></div>
      <div className="about-skill"><p>Express JS</p><hr style={{width:"62%"}}/></div>
      <div className="about-skill"><p>MongoDB</p><hr style={{width:"64%"}}/></div>
      <div className="about-skill"><p>MySQL</p><hr style={{width:"58%"}}/></div>
      <div className="about-skill"><p>Git & GitHub</p><hr style={{width:"72%"}}/></div>
      <div className="about-skill"><p>REST API</p><hr style={{width:"66%"}}/></div>

        </div>
    </div>
    
    </div>
  )
}

export default About