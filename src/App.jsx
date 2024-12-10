import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
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
      <Statistics />
      <Boost />
      <Footer />
    </>
  )
}

export default App
