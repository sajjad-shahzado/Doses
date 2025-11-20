

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./Project.css"
import alsor from "../Assets/alsaror.png"
import comp2 from "../Assets/comp2.png"
import cafe from "../Assets/dailydose.png"
import majma from "../Assets/majma.png"
import clinic from "../Assets/doseCli.png"
import compp from "../Assets/copm1.png"
// this page is our branches 
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
function Projects() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (
    <section id='Projects'>
        <div class ="container text-center" style={{paddingTop:"120px"}} className='brnch'>
        <h2  style={{color:"#005da7"}}>Our Branches</h2>


        
<div id='projts'  class="row " >

<div class="col-md-4 mt-5" >
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={majma} alst="Card image cap"/>
  <div class="card-body">
  <a href="https://altajclinic.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">AL Taj poly <br /> Clinic</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>

  </div>
</div>
    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{ }} class="card-img-top" src={clinic} alst="Card image cap"/>
  <div class="card-body">
      
  <a href="https://doseclinic.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">Dose Poly <br /> Clinic</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>

 

  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={alsor} alst="Card image cap"/>
  <div class="card-body">

  <a href="https://alsorourpharmacy.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">AL Sarour <br /> Pharmacy</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>

   
  </div>
</div>
    </div>
</div>

<div class="row text-center" >
    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={comp2} alst="Card image cap"/>
  <div class="card-body">
    {/* <h2 class="card-text">Maghanim Marketing</h2> */}

    <a href="https://www.maghanimco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">Maghanim Marketing</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>

  </div>
</div>
    </div>
    

    <div class="col-md-4 mt-5">
    <div  class="card" style={{  }}>
  <img style={{ }} class="card-img-top" src={cafe} alst="Card image cap"/>
  <div class="card-body">
  <a href=" https://maps.app.goo.gl/D6EmBSTHXuprowsdA?g_st=com.google.maps.preview.copy " target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">Daily Dose Cafe</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>  </div>
</div>
    </div>

    <div class="col-md-4 mt-5">
    <div  class="card" style={{ }}>
  <img style={{  }} class="card-img-top" src={compp} alst="Card image cap"/>
  {/* style={{width:"20px", height:"20px"}} */}
  <div class="card-body">
  <a href="https://www.maghanimco.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
  <h2 className="card-text">Maghanim Marketing</h2>
  <small style={{ color: 'blue', textDecoration: 'underline' }}>
    Explore more <FontAwesomeIcon icon={faArrowRight} />
  </small>
</a>
  </div>
</div>
    </div>

    
</div>

{/* <div class="buttons">
  <button class="blob-btn">
  Explore More About Our Branches
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

  
        

    </div> */}




    </div>
    </section>
    
  )
}

export default Projects
