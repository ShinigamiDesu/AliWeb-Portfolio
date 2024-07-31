import React from 'react'
import pfp from "../assets/pfp.jfif";

function Home() {
  return (
    <section id="Home">
        <div className='homeContainer'>
            <div className='textContainer'>
                <span className='span1'>Hello, </span>
                <span className='span2'>I'm <span className='span3'>Ali</span></span>
                <h1 className='jobTitle'>Software Engineer</h1>
                <p className='paragraphHome'>
                I am a dedicated Computer Science student with a profound passion for programming, <br/>continuously seeking to expand my knowledge and explore new technologies</p>
            </div>
            <img src={pfp} alt="profile" className='pfp'/>
        </div>
    </section>
  )
}

export default Home