import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [stcky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[])

  return (
    <nav className={`container ${stcky? 'dark_nav': '' }`}>
        <img src={logo} alt='' className='logo' />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contacy us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar