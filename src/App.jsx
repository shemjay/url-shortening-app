import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Shortener from './Components/Shortener'
import Statistics from './Components/Statistics'
import Boost from './Components/Boost'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}

export default App
