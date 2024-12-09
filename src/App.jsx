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
      <div className='app__container'>
        <Navbar />
        <Banner />
      </div>
      <Shortener />
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}

export default App
