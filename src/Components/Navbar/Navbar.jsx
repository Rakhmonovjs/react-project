import React, { useEffect, useState, Link } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {

    const [stcky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[])

    const [mobileMenu, setmobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
    }

  return (
    <nav className={`container ${stcky? 'dark_nav': '' }`}>
        <img src={logo} alt='' className='logo' />
        <ul className={ mobileMenu ? '' : 'hide_mobile_menu'}>
          
            {/* <li><Link to='hero' smooth={true} offset={-0} duration={500} >Home </Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500} >Home </Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500} >Home </Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500} >Home </Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Home </Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} >Home </Link></li> */}
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contacy us</button></li>
        </ul>
        <img src={menu_icon} alt='' className='menu_icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar