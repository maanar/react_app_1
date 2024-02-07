import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Navbar/Navbar.module.css'



export default function Navbar() {
  return <>

<nav  id="navbar-example" className={` ${ style.nav} navbar navbar-expand fixed-top  py-4 navbar-dark `}>
          <div className="container">

            <Link className="nav-link active text-light text-uppercase fw-bolder fs-2" aria-current="page" to={"home"}>START FRAMEWORK</Link>
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto fw-bolder mt-3 px-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"about"}>ABOUT</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"portfolio"}>PORTFOLIO</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link  active" aria-current="page" to={"contact"}>CONTACT</Link>
                </li>
                
              </ul>
          </div>
        </div>
    </nav> 
  </>
}
