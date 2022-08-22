import React from "react";
import card from "../images/card.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card6 from "../images/card6.jpg";
import "./Web.css";

const Web = () => {
  return (
    <>

    <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={card} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                  Death Horizon
                </h4>
                <p className="text-center px-4 mt-4 mb-4">
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
                  <img src={card1} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                  Dream Dev
                </h4>
                <p className="text-center px-4 mt-3 mb-4">
                Dream Dev very importact for building your career and it
                  shows good skill in job application.
                </p>
               
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={card2} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                 Drem Theme
                </h4>
                <p className="text-center px-4 mt-3 mb-4">
                Drem Theme very importact for building your career and it
                  shows good skill in job application.
                </p>
                
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={card3} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                 E-commerce
                </h4>
                <p className="text-center px-4 mt-3 mb-4">
                E-commerce very importact for building your career and it
                  shows good skill in job application.
                </p>
               
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={card4} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                  Seven Medical
                </h4>
                <p className="text-center px-4 mt-3 mb-4">
                Seven Medical very importact for building your career and it
                  shows good skill in job application.
                </p>
                
              </div>
            </div>
          </div>
        <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
            <div className="card-containers rounded-2">
              <div className="">
                <div className="image-containers">
                  <img src={card6} alt="" />
                </div>
              </div>
              <div>
                <h4 className="text-center pragraph-weight mt-3 text-primary">
                 Seven Host
                </h4>
                <p className="text-center px-4 mt-3 mb-4">
                Seven Host very importact for building your career and it
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

export default Web;
