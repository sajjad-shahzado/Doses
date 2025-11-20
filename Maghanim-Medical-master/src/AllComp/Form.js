import { useState } from "react";
import Swal from "sweetalert2";
import "./Form.css"
import tlnt from "../Assets/tlnt.jpg"


export default function Form() {

  return (

    <>
    <section id="form">
    <div class="container"  style={{ backgroundColor: 'rgba(5, 62, 107, 0.2)', paddingTop: '100px', color: '#053e6b' }}> 
    <div className="row p-5">
  <div className="col-md-6 col-12 d-flex justify-content-center">
    <img 
      className="img-fluid"
      style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }}
      src={tlnt} 
      alt="Talent"
    />
  </div>

  <div className="col-md-6 col-12 mt=5">
    <h1 className="asdf" class="mt-5" style={{color:"005da7"}}>Our Ambition in Talent Acquisition</h1>
    <p className="text-center mt-5">
      At Mghanem, we believe that success starts with exceptional people.  
      We are committed to attracting top talents across various fields, providing an inspiring  
      work environment that fosters growth and innovation. Our goal is to build a professional team  
      that shares our passion for excellence and contributes to our vision.
    </p>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLScmAu2ITc9WUHMZ4Ppv6CP0IXYCmTu-6ee43_iYnZ6BpecC3w/viewform?usp=dialog" target="_blank">
    <div class="buttons">
        <button class="blob-btn">
            Drop Your Resume Here
            <span class="blob-btn__inner">
                <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                </span>
            </span>
        </button>
        <br/>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
            </defs>
        </svg>
    </div>
</a>


  </div>
</div>






    

    </div>

    </section>
    
    </>
    
  );
}
