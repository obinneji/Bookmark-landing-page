import React, { useState } from 'react'
import "../styles/newletter.css"

const Newletter = () => {
  const [email, setEmail] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const handleChange = (e) => {
    const inputedEmail = e.target.value;
    setEmail(inputedEmail)
  }
  const errorStyle = {
    border: "4px solid red",
    backgroundImage : "/images/icon-error.svg",
    marginLeft: "40px"
  }
  const validateEmail = (e) => {
    e.preventDefault();
    const isEmailValid = (email) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    if (email === "") {
      setErrorMsg("Email cannot be empty")
    }
    else if (!isEmailValid(email)) {
      setErrorMsg("Whoops make sure its an email")
    }
    else {
      setErrorMsg("correct")
    }
  window.alert(errorMsg)
  }
  return (
    <div className=' w-full bg-softblue pt-5  pb-8  text-center text-white font-rubik'>
      <p className='my-10 uppercase text-l'> 35,000+ already joined
      </p>
      <div className='mb-10 textcontainer'>
        <h4 className='text-4xl '>Stay up-to-date with what <br /> we’re doing</h4>
      </div>
      <form className=' flex justify-center gap-5 pb-10 '>
        <div className=''>
          <input
           type='email'
           onChange={handleChange}
           className="email-input rounded py-3 px-5 text-darkblue font-medium "
           style={errorStyle}
           placeholder='Enter your email address'
           />
        </div>
        <div className='self-start'>
          <input type='submit' 
          value='Contact Us'
          onClick={validateEmail}
          className=' bg-softred py-2 px-3  rounded font-rubik font-medium cursor-pointer hover:bg-white hover:border-4 hover:text-softred'
          />
        </div>
      </form>
    </div>
  )
}

export default Newletter