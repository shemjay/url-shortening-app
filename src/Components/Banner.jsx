import React from 'react'
import './Banner.css'
import BannerImage from './Assets/Images/illustration-working.svg'
import Button from './Button'

const Banner = () => {
  return (
    <div className='banner__container'>
      <div className='banner__content'>
        <h1>More than just shorten links</h1>
        <p>Build your brand recognition and get detailed insights on how your links are performing</p>
        <Button />
      </div>

      <div className='banner__image'>
        <img src={BannerImage} alt='banner image' />
      </div>
    </div>
  )
}

export default Banner
