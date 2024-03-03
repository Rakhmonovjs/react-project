import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p>@ 2024 edudity. all ringhts reserved</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
        <div className='video_player hide'>
          {/* <video src={video} autuPlay muted controls ></video> */}
        </div>
    </div>
  )
}

export default Footer