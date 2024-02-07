import React from 'react'
import style from '../Home/Home.module.css'
//import img from '../../Assets/Images/avataaars.svg'

export default function Home() {
  return    <>
  <div>
    <div className={`${style.test} vh-100  d-flex justify-content-center align-items-center text-light `} >
      <div className=''>
        <img src='' alt='' className='mb-3'/>
      </div>
      <div className=" text-center pt-4  py-2">
        <h2 className="text-light text-uppercase fw-bolder mb-3 fs-1  py-2 ">
          ABOUT COMPONENT
        </h2>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className={` ${style.line} me-3 `}></div>
          <i className="fa-solid fa-star text-light"></i>
          <div className={` ${style.line}  ms-3 `}></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </div>
</>
}
