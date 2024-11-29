import React from 'react'
import './Navbar.css'
import Logo from './Assets/Images/logo.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='nav__container'>
            <div className='nav__logo'>
                <img src={Logo} alt="logo" />
            </div>

            <ul className='nav__links'>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Resources</a></li>
            </ul>
        </div>

        <div className='nav__buttons'>
            <button className='nav__buttons nav__login'>Login</button>
            <Button />
        </div>
        
    </nav>
  )
}

export default Navbar
