import React from 'react'
import './PreLoader.css'
import cutlery from '../../assets/cutlery.gif'

const PreLoader = () => {
  return (
    <main id='loading-screen' >
        <div className='loading__screen-container'>
          <img src={cutlery} className="" alt="" />
        </div>
    </main>
  )
}

export default PreLoader