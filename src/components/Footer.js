import React from 'react'
import Linkedin from '../assets/linkedin.png';
import Git from '../assets/github.png';

function Footer() {
  return (
    <div className='Footer'>
        <a href="https://linkedin.com/in/ali-ahmed-taha-b68644254" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className='footerIMG' src={Linkedin} />
      </a>
      <a href="https://github.com/ShinigamiDesu" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub" className='footerIMG' src={Git} />
      </a>
    </div>
  )
}

export default Footer