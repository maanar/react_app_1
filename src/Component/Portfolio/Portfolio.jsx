import React, { useState } from 'react'
import style from '../Portfolio/Portfolio.module.css'
import img1 from '../../Assets/Images/images 1.png'
import img2 from '../../Assets/Images/images 2.png'
import img3 from '../../Assets/Images/images 3.png'


export default function Portfolio() {

  let [img , setImage] = useState()

  function changeImage (){
     setImage()
  }

  return <>
  <div>
    <div
      className={`${style.test} py-5 my-5 d-flex justify-content-center align-items-center  `}
    >
      <div className=" text-center pt-4  py-4">
        <h2 className=" text-uppercase fw-bolder mb-3 fs-1  py-4 ">
        PORTFOLIO COMPONENT
        </h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className={` ${style.line} me-3 `}></div>
          <i className="fa-solid fa-star "></i>
          <div className={` ${style.line}  ms-3 `}></div>
        </div>

        <div className="container">
          <div className="row g-5 mb-3 py-4">
          <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img1} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img2} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>

            <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img3} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img1} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img2} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>
            <div className="col-md-6 col-lg-4 ">
           <div className= {`${style.action} rounded-3 overflow-hidden position-relative`} >
             <img src={img3} className='w-100  rounded-3' alt=''/>
             <div className={` ${style.layer} position-absolute start-0  w-100 top-0 h-100 d-flex justify-content-center align-items-center`} >
              <i className='fa-solid fa-plus fa-6x'></i>
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</>
}
