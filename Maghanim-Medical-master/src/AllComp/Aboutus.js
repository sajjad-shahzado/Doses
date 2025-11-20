import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect,  } from "react";
import "./Contactus.css"
import "./About.css"



function Aboutus() {
 
  
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <>
    <section id='Aboutus'>
      <div class ="container"  style={{paddingTop:"120px"}}>
        <div class="row">
          <div class="col-md-12">
          <h1 style={{color:"#005da7"}}  class="text-center" >ABOUT US </h1>
          </div>
       
        </div>
     

        <div class="row ">
        <div class="col-md-12  text-start">
        <h3 >Welcome to   <b>At Maghanim Medical Co.LLC</b> , where innovation meets excellence. We are a passionate team dedicated to providing top-notch solutions to our clients and customers. Our company was founded on the principles of quality, integrity, and commitment to delivering results that matter.
        <b>At Maghanim Medical Co.LLC</b> , we believe in creating lasting relationships with our clients, based on trust and mutual respect. Our expertise spans across various Services, including Skin Care,Dental Solution, Ostomology and Laser Trearment and we take pride in offering services tailored to the unique needs of each client.</h3>
          </div>
          </div>
  
          
    </div>
    </section>
    </>
    
  );
}

export default Aboutus;
