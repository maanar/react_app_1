import React from 'react'
import style from '../Footer/Footer.module.css'

export default function Footer() {
  return <>

<footer className={` `}>
        <div className={`${ style.footer}  row `} >
            <div className="col-md-4 py-5 mt-4 text-center text-light  clearfix">
                <h3>LOCATION</h3>
                <span>2215 John Daniel Drive</span>
                <span>Clark, MO 65243</span>

            </div>
            <div className="col-md-4 py-5 mt-4 text-center text-light ">
                <h3>AROUND THE WEB</h3>
                <div className="icons">
                    <i className="fa-brands fa-facebook mx-2 icon "></i>
                    <i className="fa-brands fa-twitter mx-2 icon"></i>
                    <i className="fa-brands fa-linkedin-in mx-2 icon"></i>
                    <i className="fa-solid fa-globe mx-2 icon"></i>
                    </div> 

            </div>

            <div className={` col-md-4 py-5  mt-4 text-center text-light  `}>
                <h3>ABOUT FREELANCER</h3>
                <span>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
            </div>
            

        </div>

    <div   className={`${ style.end} bg-dark py-3 text-center  text-light py-2`}>
        <span> Copyright © Your Website 2024</span>
    </div>
</footer>
  
  </>
}
