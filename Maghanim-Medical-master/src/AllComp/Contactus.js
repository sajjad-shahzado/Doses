import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import last from "../Assets/lasttt.webp"
import  whtsapp1 from "../Assets/whtsapp1.png"
import "./Contactus.css"



function Contactus() {
  useEffect(() => {
      Aos.init({ duration: 5000 });
    }, []);
  return (<section id="Contactus">
        <div class ="container"  className="cont">


       



        <div class="row mt-5">
          <div class="col-md-12 text-center" >
            <h1  style={{color:"#005da7"}}>CONTACT US</h1> 
           
          </div>

          <div className="call" class="text-center">
        <a className="iconn" href="https://wa.me/+966566257866">
          <img class="" style={{ width: 50 }} src={whtsapp1}  />
        </a>
        <p style={{ fontWeight: "bold", color: "black" }}></p>
      </div>

        </div>
        

        <div class="row text-center" style={{color:"#005da7"}}>
        <div className="col-md-6"> 
  <h4>Address</h4>
                    <p>
                    <a 
                    href="https://maps.app.goo.gl/rrdu4rsFrBpurd3k8?g_st=com.google.maps.preview.copy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    AL-HAWIYAH, TAIF, SAUDI ARABIA
                  </a>
                    </p>

  <h4>Email</h4>
  <p>
    <a 
      href="mailto:maghanimmarketing@gmail.com" 
      style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
    >
      maghanimmarketing@gmail.com
    </a>
  </p>
  <a href="https://www.linkedin.com/in/maghanim-medical-5a2172349/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
  <FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<p>MAGHANIM CO</p>
</div>
<div class="col-md-6 ">
  <img style={{ borderRadius: '20px', width:"250px" ,height:"250px" }}src={last} class="img-fluid" />
</div>

</div>
     <div class ="row text-center ">
      <h1  style={{color:"#005da7"}} data-aos="zoom-in-right">LOCATE US
        <a  style={{color:"#005da7"}}> <FontAwesomeIcon className="custom-icon" icon={faMapLocation}  bounce/></a>
      </h1>
        </div>
      <iframe class="mt-4"style={{ width:"100%" ,height:"450" , allowfullscreen:"1" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.7552694658966!2d40.47360949999999!3d21.4388623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ea2f7d34d78f7d%3A0xa6d814be696ba44a!2z2YXYrNmF2Lkg2KfZhNiq2KfYrCDYp9mE2LfYqNmK!5e0!3m2!1sen!2ssa!4v1738000804549!5m2!1sen!2ssa" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
    </section>
    
  )
}

export default Contactus
