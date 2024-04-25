import React from 'react'
import "./Programs.css"
import program_1 from "../../Assets/pro9.jpg"
import program_2 from "../../Assets/pro10.jpg"
import program_3 from "../../Assets/pro4.jpg"
import program_icon_1 from "../../Assets/vector1.png"
import program_icon_2 from "../../Assets/vector3.png"
import program_icon_3 from "../../Assets/vector2.png"

const Programs = () => {
  return (
    <div className='programs'>

        <div className='program'>
            <img src={program_1} alt=''/>
            <div className='caption'>
                <img src={program_icon_1} alt=""/>
                <h3>Junior Coaching</h3>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className='caption'>
                <img src={program_icon_2} alt=""/>
                <h3>Elite Training</h3>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className='caption'>
                <img src={program_icon_3} alt=""/>
                <h3>Specialized Coaching</h3>
            </div>
        </div>

    </div>
  )
}

export default Programs