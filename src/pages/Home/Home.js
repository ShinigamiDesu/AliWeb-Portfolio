import React from 'react'
import './Home.css'
import Ali from '../../assets/ali.png'

function Home() {
  return (
    <section id="Home" className='home--main'>
        <div className='home--left'>
            <span className='home--hello'>Hello, 👋</span>
            <span className='home--ali'>I'm <span className='home--ali2'>Ali</span></span>
            <span className='home--se'>Software <span className='home--se2'>Engineer 💻✨</span></span>
            <span className='home--para'>Building Scalable Modern Websites and Desktop Applications for the future.</span>
        </div>
        <img alt="Ali" src={Ali} className='home--img'/>
    </section>
  )
}

export default Home