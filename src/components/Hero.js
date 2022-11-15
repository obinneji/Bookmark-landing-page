import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <section className=' bg-white bg-right flex mobile:flex-col desktop:flex-row mx-6 font-rubik  '>
    <div className='mobile:order-last mb-20 self-center mobile:text-center desktop:text-left desktop:mx-20 mobile:mx-5'>
        <h1 className='text-darkblue font-medium desktop:text-4xl mobile:text-3xl mb-6'>  A Simple Bookmark <br />Manager</h1>
        <div className='text-div mb-8'><p className='text-grayishblue font-normal '>  A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.</p></div>
        <div className=' flex gap-5  mt-5 mobile:justify-center desktop:justify-start'>
          <button className='px-3 py-2  bg-softblue text-white text-center outline-none rounded-md font-medium hover:border-2 hover:bg-white hover:text-softblue'>Get it on Chrome</button>
          <button className='px-3 py-3 bg- text-darkblue text-center rounded-md font-medium shadow-md shadow-grayishblue hover:border-2 hover:bg-white hover:border-darkblue '>Get it on Firefox</button>
        </div>
      </div>
      <div className='mobile:order-first desktop:order-last relative  self-center '>
        <div className='bg-softblue w-50 h-50 blue  z-2'></div>
        <div className='hero'>
          <img src='/images/illustration-hero.svg' alt='hero-image' />
        </div>
      </div>
    </section>
  )
}

export default Hero