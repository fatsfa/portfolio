import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const Services = () => {
  return (
    <div id='services' className='services'>
    <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt=''/>
    </div>
    <div className="services-container">
    <h2>Technical Mentor</h2>
    <p>
          As a Technical Mentor at Emertxe Information Technologies Pvt Ltd, Bangalore, I provided guidance and support to students in mastering C programming and embedded systems. My role involved:
        </p>
        <ul>
          <li>Assisting students with project development and debugging.</li>
          <li>Conducting technical sessions to explain complex programming concepts.</li>
          <li>Providing one-on-one mentorship to help students overcome challenges in their projects.</li>
          <li>Ensuring students gained hands-on experience with real-world applications.</li>
        </ul>
        <p>
          This experience allowed me to enhance my technical expertise and develop strong communication and mentoring skills.
        </p>
    </div>
    </div>
  )
}

export default Services