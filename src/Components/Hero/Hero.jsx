import React from 'react'
import './Hero.css';
import darkarrow from '../../assets/darkarrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero_text">
            <h1>Lorem, ipsum.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dolore iusto voluptatum porro commodi? Illo sunt autem ea placeat consequatur?</p>
            <button className='btn'>Explore more <img src={darkarrow} alt='' className='logo' /> </button>
        </div>
    </div>
  )
}

export default Hero