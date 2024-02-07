import React from 'react'
import style from '../Contact/Contact.module.css'

export default function Contact() {
  return  <>
  <div>
    <div
      className={`${style.test} py-3
       d-flex justify-content-center align-items-center  `}
    >
      <div className="  pt-2  py-3">
        <h2 className=" text-center text-uppercase fw-bolder mb-3 fs-1  py-4 ">
        CONATCT SECTION
        </h2>
        <div className="d-flex justify-content-center text-center align-items-center mb-3">
          <div className={` ${style.line} me-3 `}></div>
          <i className="fa-solid fa-star "></i>
          <div className={` ${style.line}  ms-3 `}></div>
        </div>

        <div className="">
          <form className=' mx-auto  p-3 ng-valid ng-dirty'>
            <div className={`${style.label}`}>
             <label  className={` ${style.top }`}> user Name :</label>
             <input id='userName' placeholder='User Name ' type='text' name='username' className='form-control w-100 border-0 border-bottom  pt-3
              position-relative ng-valid ng-touched'/>
             </div>

             <div className={`${style.label}`}>
             <label  className={` ${style.top }`}> user Age :</label>
             <input id='user Age' placeholder=' user Age ' type='number' name='user Age' className='form-control w-100 border-0 border-bottom   pt-3
              position-relative ng-valid ng-touched'/>
             </div>

             <div className={`${style.label}`}>
             <label  className={` ${style.top }`}> user Email :</label>
             <input id='userEmail' placeholder='user Email' type='email' name='userEmail' className='form-control w-100 border-0 border-bottom   pt-3
              position-relative ng-valid ng-touched'/>
             </div>

             <div className={`${style.label}`}>
             <label  className={`${style.top }`}> user password :</label>
             <input id='userPassword' placeholder='userpassword ' type='password' name='userpassword' className='form-control w-100 border-0 border-bottom   pt-3
              position-relative ng-valid ng-touched'/>
             </div>

             <button className={`${ style.btun} btn mt-4 text-white`}>Send Massege</button>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</>
}
