
import icon from "../Assets/icon.png"
import "./clnt.css"
import React, { useEffect, useState } from "react";
//  this is testimonial page

const Clients = () => {
  
  return (
    <section id="Clients">
    <div className=" ">
      <div className="container text-center " >
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold" style={{color:"#005da7"}}>What Our Coustomers Say</h1>
          <p className="lead text-muted">
            Hear from our happy customers who trust Us
          </p>
        </div>
        <div className="row g-4">
          {/* Testimonial 1 */}
          {/* <div class="shapdow" className="col-12 col-md-6 col-lg-4">
          
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Getting Services from here  has been a fantastic experience!
                    Their attention to detail and dedication to delivering
                    results is unmatched.
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                </blockquote>
                <div className="d-flex text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div> */}

          {/* Testimonial 2 */}
          <div class="shapdow" >
            <div >
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                   src={icon}
                    alt="Engr Waseem"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">Engr Waseem </h5>
                    <small className="text-muted"> CEO,Makinati</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Absolutely love their work! The team went above and beyond
                    to meet our expectations. Highly recommend them.AndTheir expertise and professionalism is outstanding.
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                 
                </blockquote>
                <div className="d-flex text-warning ">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          {/* <div class="shapdow" className="col-12 col-md-6 col-lg-4">
            <div >
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={icon}
                    alt="David Lee"
                    className="rounded-circle me-3"
                    style={{ width: "64px", height: "64px" }}
                  />
                  <div>
                    <h5 className="fw-bold mb-0">M.Hamza</h5>
                    <small className="text-muted">Sales Manager, MosasaSona</small>
                  </div>
                </div>
                <blockquote className="blockquote">
                  <p className="mb-3">
                    <i className="text-muted me-2 fa fa-quote-left"></i>
                    Their expertise and professionalism is outstanding.
                    They delivered exceptional results with in budget.
                    <i className="text-muted ms-2 fa fa-quote-right"></i>
                  </p>
                </blockquote>
                <div className="d-flex text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Clients;
