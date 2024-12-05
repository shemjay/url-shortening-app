import React from 'react'
import Button from './Button'
import './Shortener.css'

const Shortener = () => {
  return (
    <div className='shortener__container'>
        <div className='shortener__content'>
            <input type="url" id="link" name="link" placeholder="Shorten your link here..." required />
            <Button text="Shorten It!" variant="secondary"/>
        </div>
    </div>
  )
}

export default Shortener
