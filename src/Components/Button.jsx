import React from 'react'
import './Button.css'

const Button = ({text, variant, onClick}) => {
  return (
    <button className={`button__signin ${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
