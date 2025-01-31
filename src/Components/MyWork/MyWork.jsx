import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import todo from '../../assets/todo.png'
import recipe from '../../assets/recipe.png'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="mywork-container">
            <img src ={todo} alt=''/>
            <img src ={recipe} alt=''/>
        </div>
        
    </div>
  )
}

export default MyWork