import React from 'react'
import './About.css'
import gallery_3 from '../../assets/gallery_3.png'
import play_icon from '../../assets/play_icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about_left'>
            <img src={gallery_3} alt='' className='about_img' />
            <img src={play_icon} alt=''  className='play_icon ' onClick={()=> {setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem magnam corporis alias eum?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nesciunt beatae, ex qui omnis deleniti distinctio voluptatibus dicta corrupti? Ratione.</p>
        </div>
    </div>
  )
}

export default About