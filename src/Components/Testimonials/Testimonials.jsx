import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/u1.jpeg'
import user_2 from '../../Assets/u2.png'
import user_3 from '../../Assets/u3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonials = () => {

    const slider= useRef();
    let tx=0;


const slideForward = ()=>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
    
     <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
     <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />

     <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                         <img src={user_1} alt=''/>
                         <div>
                            <h3>GP Muthu</h3>
                            <span>Jaffna, Srilanka</span>
                         </div>
                    </div>
                    <p>
                    "Enrolling my child in Sharks was the best decision we made. The coaches are incredibly knowledgeable and supportive, and they've helped my child improve tremendously. Not only has their cricketing skills grown, but they've also developed confidence, discipline, and teamwork. I couldn't be happier with the progress and the positive environment at Sharks Academy."
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                         <img src={user_2} alt=''/>
                         <div>
                            <h3>Matheesha Pathirana</h3>
                            <span>Srilanka Cricket Team, Srilanka</span>
                         </div>
                    </div>
                    <p>
                    "Training at Sharks Academy has been an incredible journey for me. The coaches here are like mentors, always pushing me to be my best and encouraging me to never settle for mediocrity. I've seen significant improvement in my game since joining Sharks Academy Name, and I've gained invaluable insights and techniques that have helped me excel on the field. I'm proud to be a part of such a supportive and inspiring cricketing family.""
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                         <img src={user_3} alt=''/>
                         <div>
                            <h3>Kumar Sangakkara</h3>
                            <span>Formar Srilankan Cricketer</span>
                         </div>
                    </div>
                    <p>
                    "As a former professional cricketer, I can confidently say that Shark Academy is one of the best training academies I've come across. The coaching staff's expertise, dedication, and passion for the game are unmatched. They understand the nuances of cricket inside out and know how to bring out the best in each player. I've seen firsthand the impact Shark Academy has on young cricketers, and I highly recommend it to anyone looking to take their game to the next level."
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                         <img src={user_4} alt=''/>
                         <div>
                            <h3>GHJ Bandara</h3>
                            <span>Kandy, Srilanka</span>
                         </div>
                    </div>
                    <p>
                    "I've been involved with Sharks Academy Name for several years now, and I've seen the positive impact it has on our community. Not only does it provide top-notch cricket training, but it also instills important values in our youth. The coaches go above and beyond to mentor and guide the players, teaching them important life skills along the way. Sharks Academy  is not just a cricket academy; it's a hub of learning, growth, and inspiration for our community."
                    </p>
                </div>
            </li>
        </ul>
     </div>

    </div>
  )
}

export default Testimonials