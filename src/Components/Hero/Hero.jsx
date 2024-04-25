import React from 'react'
import './Hero.css'
import dark_arrow from "../../Assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>  {/*more than one classname*/}  
      <div className='hero-text'>
       <h1>Unleash Your Cricket Potential with Expert Coaching at SHARKS !</h1>
       <p>With a team of seasoned coaches, personalized training programs, and a supportive community, we're committed to helping you achieve your cricketing goals.</p>
       <button className='btn'>Explore More <img src={dark_arrow} alt=''/></button>
      </div>
    
    </div>
  )
}

export default Hero