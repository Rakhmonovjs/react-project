import React, { useRef } from 'react'
import './Testmonials.css'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'


const Testmonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = 'translateX(${tx}%)'
    }

    const slideBackward = () =>{
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform = 'translateX(${tx}%)'
    
    }
    
  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next_icon' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back_icon' onClick={slideBackward}/>

        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_1} alt='' />
                            <div>
                                <h3>william jackson</h3>
                                <span>usa texas</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti nobis doloremque officiis 
                            officia obcaecati cum illo voluptas mollitia odio tempore!

                        </p>
                    </div>
                </li>
                {/* //user2  */}

                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_2} alt='' />
                            <div>
                                <h3>william jackson</h3>
                                <span>usa texas</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti nobis doloremque officiis 
                            officia obcaecati cum illo voluptas mollitia odio tempore!

                        </p>
                    </div>
                </li>

                {/* user 3  */}

                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_3} alt='' />
                            <div>
                                <h3>william jackson</h3>
                                <span>usa texas</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti nobis doloremque officiis 
                            officia obcaecati cum illo voluptas mollitia odio tempore!

                        </p>
                    </div>
                </li>

                {/* user 4  */}

                <li>
                    <div className='slide'>
                        <div className='user_info'>
                            <img src={user_4} alt='' />
                            <div>
                                <h3>william jackson</h3>
                                <span>usa texas</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corrupti nobis doloremque officiis 
                            officia obcaecati cum illo voluptas mollitia odio tempore!

                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testmonials