import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import recipe from '../../assets/recipe.png'
import videoapp from '../../assets/videoapp.png'
import groceryapp from '../../assets/groceryapp.png'
import digitalagency from '../../assets/digitalagency.png'
import mamacare from '../../assets/mamacare.png'

const projects = [
  {
    title: 'Digital Agency App',
    image: digitalagency,
    description:
      'A full-stack platform to showcase agency services, portfolio, and case studies with an inquiry form and admin content management.',
    link: 'https://tasweekp.vercel.app/'
  },
  {
    title: 'Grocery App',
    image: groceryapp,
    description:
      'A full-stack grocery app with product browsing, cart management, order flow, authentication, and inventory management.',
    link: 'https://greencart-git-main-fatsfas-projects.vercel.app/'
  },
  {
    title: 'Mamacare App',
    image: mamacare,
    description:
      'A full-stack healthcare-focused web app built using React, Node.js, Express, and MongoDB with deployment on Render.',
    link: 'https://mamacare-fsli-6xdv.onrender.com/'
  },
  {
    title: 'Video App',
    image: videoapp,
    description:
      'A Netflix-style video app with content listing, playback, and user authentication.',
    link: 'https://myvideoapp-five.vercel.app'
  },
  {
    title: 'Recipe App',
    image: recipe,
    description:
      'A recipe guide app that provides step-by-step instructions and ingredient quantities.',
    link: 'https://recipeapp-l4by.vercel.app'
  }
]

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest works</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        
        <div className="mywork-container">
          {projects.map((project) => (
            <div className="mywork-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                View project
              </a>
            </div>
          ))}
        </div>
      
    </div>
  )
}

export default MyWork