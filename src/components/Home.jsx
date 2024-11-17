/* eslint-disable no-unused-vars */
import React from 'react'
import Products from './Products'


function Home() {

  
  return (

    <div className='home-main'>
      <h2 className='heading '>
        Welcome to the Redux toolKit Store

      </h2>
      <section>
        <h3 className='products-heading'>
          Products
        </h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home