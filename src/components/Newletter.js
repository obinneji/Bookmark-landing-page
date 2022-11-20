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
    border: "solid hsl(0, 94%, 66%)",
    borderWidth: "4px 4px 2px 4px",
    // backgroundImage : "/images/icon-error.svg",
    backgroundImage: "url(" + "/images/icon-error.svg" + ")",
  backgroundPosition: 'right 50%  bottom 50%',
  backgroundRepeat: 'no-repeat'
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
      setErrorMsg("")
    }
  }
  return (
    <article role='contentinfo' className=' w-full bg-softblue pt-5  pb-8 px-7 text-white font-rubik'>
      <p className='my-10 uppercase text-l text-center'> 35,000+ already joined
      </p>
      <div className='mb-10 textcontainer text-center'>
        <h4 className='text-4xl '>Stay up-to-date with what <br /> we’re doing</h4>
      </div>
      <div>
        <form>
          <div className='input-section'>
          <input type='email' placeholder='Enter your email address'
           className='text-darkblue font-medium'
           onChange={handleChange}
           style={errorMsg !== "" ? errorStyle : null}
           />
           {errorMsg !== "" ? <small>{errorMsg}</small> : null}
          </div>
          <button className='submit-section bg-softred py-3 px-3' onClick={validateEmail}>Contact us</button>
        </form>
      </div>
    </article>
  )
}

export default Newletter