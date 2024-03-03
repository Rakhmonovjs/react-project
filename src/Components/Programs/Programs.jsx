import React from 'react'
import './Programs.css';
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.png'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1} alt=''  />
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className='program'>
            <img src={program2} alt=''  />
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Graduation Degree</p>
            </div>
        </div>

        <div className='program'>
            <img src={program3} alt=''  />
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs