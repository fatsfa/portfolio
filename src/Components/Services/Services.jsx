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
    <p>Technical support for C programming Language at Emertxe Information Technologies Pvt ltd</p>
    </div>
    </div>
  )
}

export default Services