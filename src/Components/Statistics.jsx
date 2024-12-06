import React from 'react'
import './Statistics.css'
import Customizable from './Assets/Images/icon-fully-customizable.svg'
import Brand from './Assets/Images/icon-brand-recognition.svg'
import Records from './Assets/Images/icon-detailed-records.svg'

const Statistics = () => {
  return (
    <div className='statistics__container'>
        <div className='statistics__title'>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with<br/> our advanced statistics dashboard</p>
        </div>

        <div className='statistics__container-cards'>

            <div className='statistics__card'>
                <div className='statistics__card-image'>
                    <img src={Brand} alt='brand icon' />
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. 
                    Generic links don't mean a thing. Branded links
                    help instil confidence in your content.
                </p>
            </div>

            <div className='statistics__card card-2'>
                <div className='statistics__card-image'>
                    <img src={Records} alt='detailed records icon' />
                </div>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing 
                    when and where people engage with your content helps 
                    inform better decisions.
                </p>
            </div>

            <div className='statistics__card card-3'>
                <div className='statistics__card-image'>
                    <img src={Customizable} alt='customizable icon' />
                </div>
                <h3>Customizable</h3>
                <p>Improve brand awareness and content discoverability 
                    through customizable links, supercharging audience 
                    engagement.
                </p>
            </div>

        </div>
    </div>
  )
}

export default Statistics
