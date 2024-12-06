import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Shortener from './Components/Shortener'
import Statistics from './Components/Statistics'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Shortener />
      <Statistics />
    </>
  )
}

export default App
