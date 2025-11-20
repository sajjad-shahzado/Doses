import  homee from "../Assets/HP.jpg"
import cafe from "../Assets/cafe.png"
import dosecl from "../Assets/dosecl.png"
import glass from "../Assets/glass.png"
import magani from "../Assets/maganii.png"
import sadliya from "../Assets/sadliya.png"
import taj from "../Assets/taj.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import React, { useEffect,  } from "react";

 import "./Home.css"
 import Aos from "aos";
import "aos/dist/aos.css";





import { } from "@fortawesome/free-brands-svg-icons/fa42Group";


function Home() {
    const openProjectsInNewTab = () => {
        // Open a new tab with the '/projects-only' route
        const url = `${window.location.origin}/projects-only`;
        window.open(url, "_blank"); // Opens in a new tab
      };
   
  return (
    <>
    <Carousel showThumbs={false}  showIndicators={false} showStatus={false}>
        <div>
          <img  src= {homee}/>
        </div>
    </Carousel>
    <div class="container">
    <div className="homii">

    
    
      <div class="row">
        <div class="col-md-12 text-center">
<h2 className="hd2">Our Commitment To Excellence</h2>
        </div>
      </div>
        <div class="row">
        <div class="col-md-12" >
        <h2>We proudly lead a renowned group of businesses, each driven by a passion for excellence and committed to 
            offering superior, high-quality services that exceed expectations and create lasting value</h2>
        
      </div>
        </div>
    
    <div class="row text-center" >
        <div class="col-md-4">
        <img  style={{width:"294px",height:"284px"}} src= {cafe}/>

        </div>

        <div class="col-md-4">
        <img style={{width:"264px",height:"264px"}} src= {dosecl}/>
            
        </div>

        <div class="col-md-4">
        <img style={{width:"274px",height:"324px"}} src= {glass}/>
            
        </div>
    </div>

    <div class="row text-center">
        <div class="col-md-4">
        <img style={{width:"304px",height:"304px"}} src= {magani}/>

        </div>

        <div class="col-md-4">
        <img style={{width:"304px",height:"304px"}} src= {sadliya}/>
            
        </div>

        <div class="col-md-4">
        <img style={{width:"304px",height:"304px"}} src= {taj}/>
            
        </div>
    </div>
    
            
    </div>
         <div class="buttons" onClick={openProjectsInNewTab}>
                                <button class="blob-btn">
                                                    More about Branches
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
    
    </div>
    
    </>

  );
}

export default Home;









