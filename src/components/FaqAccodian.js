import React, { useState } from 'react'
import '../styles/accordain.css'

const FaqAccodian = () => {
  const [questionOne, setquestionOne] = useState(false)
  const [questionTwo, setquestionTwo] = useState(false)
  const [questionThree, setquestionThree] = useState(false)
  const [questionFour, setquestionFour] = useState(false)
  const showStyle = {
    display: "block"
  }
  const styleArrow = {
    transform: "rotate(180deg)",
    fill: "red",
    stroke: 'red'
  }
  const faq1 = () => {
    setquestionOne((prevValue) => {
      return !prevValue;
    });
  }
  const faq2 = () => {
    setquestionTwo((prevValue) => {
      return !prevValue;
    });
  }
  const faq3 = () => {
    setquestionThree((prevValue) => {
      return !prevValue;
    });
  }
  const faq4 = () => {
    setquestionFour((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <aside className='mt-7  font-rubik w-full '>
      <h2 className='font-medium mx-auto my-4 text-4xl text-darkblue text-center'>Frequently Asked Questions</h2>
      <div className='text-center features text-grayishblue mb-10 '><p className='leading-normal'>Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.</p>
      </div>
      <div className='faq'>
        <div className=''>
          <hr className='w-full text-grayishblue' />
          <div className='flex justify-between mt-5 mb-7 items-center cursor-pointer' onClick={faq1}>
            <h3 className='text-2xl text-darkblue font-medium hover:text-softred'>What is Bookmark?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={questionOne ? styleArrow : null}><path fill="none" stroke={questionOne ? "softred" : "#5267DF"} stroke-width="3" d="M1 1l8 8 8-8" /></svg>

          </div>
          <p className='mb-3 text-grayishblue hidden' style={questionOne ? showStyle : null}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
            justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
        </div>
        <div>
          <hr className='w-full text-grayishblue' />
          <div className='flex justify-between mt-5 mb-7 items-center cursor-pointer' onClick={faq2} >
            <h3 className='text-2xl text-darkblue font-medium hover:text-softred' >How can I request a new browser?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={questionTwo ? styleArrow : null}><path fill="none" stroke={questionTwo ? "softred" : "#5267DF"} stroke-width="3" d="M1 1l8 8 8-8" /></svg>
            </div>
          <p className='mb-3 text-grayishblue hidden' style={questionTwo ? showStyle : null}>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
            Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet..</p>
        </div>
        <div>
          <hr className='w-full text-grayishblue' />
          <div className='flex justify-between mt-5 mb-7 items-center cursor-pointer' onClick={faq3}>
            <h3 className='text-2xl text-darkblue font-medium hover:text-softred'>Is there a mobile app?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={questionThree ? styleArrow : null}><path fill="none" stroke={questionThree ? "softred" : "#5267DF"} stroke-width="3" d="M1 1l8 8 8-8" /></svg>

            </div>
          <p className='mb-3 text-grayishblue hidden' style={questionThree ? showStyle : null}> Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
            urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
            sollicitudin ex et ultricies bibendum..</p>
        </div>
        <div>
          <hr className='w-full text-grayishblue' />
          <div className='flex justify-between mt-5 mb-7 items-center cursor-pointer' onClick={faq4}>
            <h3 className='text-2xl text-darkblue font-medium hover:text-softred'>What about other Chromium browsers?</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" style={questionFour ? styleArrow : null}><path fill="none" stroke={questionFour ? "softred" : "#5267DF"} stroke-width="3" d="M1 1l8 8 8-8" /></svg>

            </div>
          <p className='mb-3 text-grayishblue hidden' style={questionFour ? showStyle : null}> Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
            vitae neque eget nisl gravida pellentesque non ut velit.</p>
          <hr className='w-full text-grayishblue' />
        </div>
      </div>
      <button className='bg-softblue text-white font-normal text-center flex my-20 mx-auto font-rubik px-5 py-3 rounded'>More Info</button>
    </aside>
  )
}

export default FaqAccodian