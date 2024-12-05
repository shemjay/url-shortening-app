import React from 'react'
import './Button.css'

const Button = ({text, variant}) => {
  return (
    <button className={`button__signin ${variant}`}>{text}</button>
  )
}

export default Button
