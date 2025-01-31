import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import todo from '../../assets/todo.png'
import recipe from '../../assets/recipe.png'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="mywork-container">
        
            <img src ={recipe} alt=''/>
            <img src ={todo} alt=''/>
            <p>The Recipe App which provides step by step instruction of cooking an item. It also gives the quantity of each item required.</p>
            <p>The simple todo app where we can add task to the list and remove the item once task is completed.</p>
            <a href="https://recipeapp-l4by.vercel.app" target='_blank'>
                  <div>view project </div>       
                  </a>
           
            <a href="https://todo-seven-ivory.vercel.app" target='_blank'>
                  <div>view project</div>       
                  </a>
                  
                 
             
        </div>
        
    </div>
  )
}

export default MyWork