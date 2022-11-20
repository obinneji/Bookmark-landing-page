import React from 'react'
import "../styles/download.css"

const Download = () => {
  return (
    <section className='mt-7  font-rubik text-center' role='extention download content'>
      <h2 className="font-medium mx-auto my-7 text-4xl text-darkblue">Download the extension</h2>
      <div className="text-center features text-grayishblue mb-10 "><p className='leading-normal'> We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p></div>
      <div className=' text-center flex justify-center mx-auto gap-10 mobile:flex-col desktop:flex-row mb-20 desktop:w-full mobile:w-50'>
        <div className=' shadow-grayishblue shadow-md  rounded-lg text-center card desktop:self-start mobile:self-center'>
          <img src='images/logo-chrome.svg ' className='mx-auto my-5' alt='chrome-image'/>
          <h3 className='font-medium text-2xl text-darkblue mt-3'>  Add to Chrome</h3>
          <p className='text-grayishblue font-normal '>Minimum version 62</p>
          <hr className='my-3 text-grayishblue  horizontal' />
          <button className='bg-softblue text-white w-full py-3 px-6 rounded mt-3 hover:text-softblue hover:bg-white hover:border-4 hover:border-softblue font-rubik font-medium text-center'> Add & Install Extension</button>
        </div>
        <div className=' shadow-grayishblue shadow-md  rounded-lg text-center card my-10 self-center'>
          <img src='images/logo-firefox.svg ' className='mx-auto my-5' alt='firefox-image' />
          <h3 className='font-medium text-2xl text-darkblue mt-3'> Add to Firefox</h3>
          <p className='text-grayishblue font-normal '>  Minimum version 55</p>
          <hr className='my-3 text-grayishblue  horizontal' />
          <button className='bg-softblue text-white w-full py-3 px-6 rounded mt-3 hover:text-softblue hover:bg-white hover:border-4 hover:border-softblue font-rubik font-medium text-center'> Add & Install Extension</button>
        </div>
        <div className=' shadow-grayishblue shadow-md  rounded-lg text-center card desktop:self-end mobile:self-center'>
          <img src='images/logo-opera.svg ' className='mx-auto my-5' alt='opera-image'/>
          <h3 className='font-medium text-2xl text-darkblue mt-3'>  Add to Opera</h3>
          <p className='text-grayishblue font-normal '>  Minimum version 46</p>
          <hr className='my-3 text-grayishblue  horizontal' />
          <button className='bg-softblue text-white w-full py-3 px-6 rounded mt-3 hover:text-softblue hover:bg-white hover:border-4 hover:border-softblue font-rubik font-medium text-center'> Add & Install Extension</button>
        </div>

      </div>
    </section>
  )
}

export default Download