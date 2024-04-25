import React from 'react'
import './About.css'
import about_img from "../../Assets/pro3.jpg"
import play_icon from "../../Assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
          <img src={about_img} alt='' className='about-img'/>
          <img src={play_icon} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className='about-right'>
          <h3>About our Academy</h3>
          <h2>Train Like a Pro, Play Like a Hero</h2>
          <p>Founded with a passion for the game and a vision to nurture talent, Sharks academy is more than just a cricket academy; it's a place where dedication, discipline, and determination converge to shape the cricketers of tomorrow.</p>
          <p>Our academy is built on the belief that every player has the potential to excel, and our mission is to provide the guidance and resources needed to unlock that potential.With state-of-the-art facilities, expert coaching, and a supportive community, we offer a comprehensive cricketing experience for players of all ages and skill levels.</p>
          <p>Whether you're a budding talent taking your first steps on the pitch or a seasoned player striving for excellence, our programs are tailored to meet your needs and help you achieve your goals.At sharks, we emphasize not just the technical aspects of the game, but also the importance of mental strength, sportsmanship, and teamwork. Our experienced coaches are dedicated to providing personalized attention, focusing on skill development, strategic thinking, and character building.</p>
        </div>


    </div>
  )
}

export default About