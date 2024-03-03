import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testmonials from './Components/Testimonials/Testmonials'
import Title from './Components/Title/Title'

function App() {

    const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar   />
      <Hero     />
      <div className='container'>
        <Title  subtitle='Our Program' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title  subtitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title  subtitle='TESTIMONIALS' title='What Student Says' />
        <Testmonials />
        <Title  subtitle='Contact us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
