import React from 'react';
import w1 from "../images/w1.jpg";
import w4 from "../images/w4.jpg";
import w5 from "../images/w5.jpg";
import w2 from "../images/w2.png";
import w3 from "../images/w3.png";
import Travel from "../images/travel.jpg";


const MobileApp = () => {
    return (
        <>
            <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={w1} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                Advance Analytice
                </h4>
                <p className="text-center px-4 mt-3 mb-1 mb-4">
                  Death Horizon very importact for building your career and it
                  shows good skill in job application.
                </p>
                
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={w2} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                CheckBages
                </h4>
                <p className="text-center px-4 mt-3 mb-1  mb-4">
                  Death Horizon very importact for building your career and it
                  shows good skill in job application.
                </p>
               
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={w3} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                Project Management
                </h4>
                <p className="text-center px-4 mt-3   mb-4">
                  Death Horizon very importact for building your career and it
                  shows good skill in job application.
                </p>
                
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={w4} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                Specification
                </h4>
                <p className="text-center px-4 mt-3  mb-4">
                Specification very importact for building your career and it
                  shows good skill in job application.
                </p>
                
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={w5} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                Optemising Company
                </h4>
                <p className="text-center px-4 mt-3  mb-4">
                Optemising Company very importact for building your career and it
                  shows good skill in job application.
                </p>
               
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={Travel} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                  Death Horizon
                </h4>
                <p className="text-center px-4 mt-3  mb-4">
                  Death Horizon very importact for building your career and it
                  shows good skill in job application.
                </p>
               
              </div>
            </div>
          </div>
        </div>
    </div>
      
        </>
    );
};

export default MobileApp;