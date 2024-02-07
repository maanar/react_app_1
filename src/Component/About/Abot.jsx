import React from "react";
import style from "../About/Abot.module.css";

export default function Abot() {
  return (
    <>
      <div>
        <div
          className={`${style.test} vh-100  d-flex justify-content-center align-items-center text-light `}
        >
          <div className=" text-center pt-4  py-4">
            <h2 className="text-light text-uppercase fw-bolder mb-3 fs-1  py-4 ">
              ABOUT COMPONENT
            </h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className={` ${style.line} me-3 `}></div>
              <i className="fa-solid fa-star text-light"></i>
              <div className={` ${style.line}  ms-3 `}></div>
            </div>

            <div className="container">
              <div className="row d-flex justify-content-center align-items-center mb-3 py-4">
                <div className="col-md-4">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>

                <div className="col-md-4">
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
