import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div className='app-shell'>
      <div className='reveal d-1'><Navbar/></div>
      <div className='reveal d-2'><Hero/></div>
      <div className='reveal d-3'><About/></div>
      <div className='reveal d-4'><Services/></div>
      <div className='reveal d-5'><MyWork/></div>
      <div className='reveal d-6'><Contact/></div>
      <div className='reveal d-7'><Footer/></div>
      
    </div>
  )
}

export default App