import React from 'react'
import './Footer.css'
import Logo from './Assets/Images/logo.svg'
import Facebook from './Assets/Images/icon-facebook.svg'
import Pinterest from './Assets/Images/icon-pinterest.svg'
import Twitter from './Assets/Images/icon-twitter.svg'
import Instagram from './Assets/Images/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <a href="#"><img src={Logo} alt="logo" className='footer__icon' /></a>
      </div>

      <div className='footer__links'>
        
        <div className='footer__links-card'>
            <ul>
                <p>Features</p>
                <li className='empty-row'></li>
                <li><a href='#'>Link Shortening</a></li>
                <li><a href='#'>Branded Links</a></li>
                <li><a href='#'>Analytics</a></li>
            </ul>
        </div>

        <div className='footer__links-card'>
            <ul>
                <p>Features</p>
                <li className='empty-row'></li>
                <li><a href='#'>Link Shortening</a></li>
                <li><a href='#'>Branded Links</a></li>
                <li><a href='#'>Analytics</a></li>
            </ul>
        </div>

        <div className='footer__links-card'>
            <ul>
                <p>Features</p>
                <li className='empty-row'></li>
                <li><a href='#'>Link Shortening</a></li>
                <li><a href='#'>Branded Links</a></li>
                <li><a href='#'>Analytics</a></li>
            </ul>
        </div>
      </div>

      <div className='footer__socials'>
        <a href='#'><img src={Facebook} alt='Facebook' /></a>
        <a href='#'><img src={Twitter} alt='Twitter' /></a>
        <a href='#'><img src={Pinterest} alt='Pinterest' /></a>
        <a href='#'><img src={Instagram} alt='Instagram' /></a>
      </div>

    </footer>
  )
}

export default Footer
