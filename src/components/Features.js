import React, { useState } from 'react'
import "../styles/features.css"

const Features = () => {
  const [tabHeader, setTabHeader] = useState("Bookmark in one click");
  const [tabPara, setTabPara] = useState("Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites")
  const [tabImage, setTabImage] = useState("/images/illustration-features-tab-1.svg");

  const style= {
    display: "block"
  }
  const tab1 = () => {
    setTabHeader("Bookmark in one click")
    setTabImage("/images/illustration-features-tab-1.svg")
    setTabPara("Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites")
  }
  const tab2 = () => {
    setTabHeader("Share your bookmarks");
    setTabImage("/images/illustration-features-tab-2.svg")
    setTabPara("Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.");
  }
  const tab3 =() => {
    setTabHeader("Download the extension");
    setTabImage("/images/illustration-features-tab-3.svg")
    setTabPara("We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.");
  }
  return (
    <div className='font-rubik w-full'>
      <h2 className='font-medium text-center mb-7 text-4xl text-darkblue'>Features</h2>
     <div className='text-center features text-grayishblue mb-10'>
        <p className='leading-normal' > Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
        <div className='flex mobile:flex-col text-center mb-10 desktop:flex-row desktop:justify-center desktop:gap-20'>
          <hr className='hr'/>
          <h3 className='font-medium text-darkblue text-xl cursor-pointer hover:text-softred  my-2 tab-header flex flex-col  ' onClick={tab1}>Simple Bookmarking <hr className="small-hr" /></h3>
          <hr className='hr' />
          <h3 className='font-medium text-darkblue text-xl cursor-pointer hover:text-softred my-2 tab-header flex flex-col  ' onClick={tab2}>Speedy Searching <hr className="small-hr" /></h3>
          <hr  className='hr' />
          <h3 className=' font-medium text-darkblue text-xl cursor-pointer hover:text-softred my-2 tab-header flex flex-col  ' onClick={tab3}>Easy Sharing <hr className="small-hr" /></h3>
          <hr className='hr' />
        </div>
        <hr className='desktop-hr text-grayishblue' />
        <div className='flex desktop:flex-row mobile:flex-col justify-center gap-10'>
          <div className=''>
            <div className='bg-softblue tab-background'></div>
            <div className='tab-image'>
              <img src={tabImage} alt='hero-image' />
            </div>
          </div>
          <div className='self-center mobile:text-center desktop:text-left ml-20' >
            <h2 className="text-darkblue font-medium text-3xl my-7">{tabHeader}</h2>
            <div className="para text-grayishblue my-5 "><p className='leading-loose '>{tabPara}</p></div>
            <button className='bg-softblue py-3 px-5 font-medium font-rubik text-center text-white border-none rounded mt-7'>More Info</button>
          </div>
        </div>
      
    </div>
  )
}

export default Features