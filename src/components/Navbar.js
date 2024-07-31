import React from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <div className='navbarContainer'>
        <div className='menu'>
            <Link className='menuItem' activeClass='active' to='Home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
            <Link className='menuItem' activeClass='active' to='Education' spy={true} smooth={true} offset={-100} duration={500}>Education</Link>
            <Link className='menuItem' activeClass='active' to='Technology' spy={true} smooth={true} offset={-100} duration={500}>Technologies</Link>
            <Link className='menuItem' activeClass='active' to='Projects' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
            <Link className='menuItem' activeClass='active' to='Experience' spy={true} smooth={true} offset={-100} duration={500}>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar