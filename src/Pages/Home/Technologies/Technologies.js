import React from "react";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import img9 from "../images/img9.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img13 from "../images/img13.jpg";
import img14 from "../images/img14.jpg";
import img15 from "../images/img15.jpg";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Technologies = () => {
  return (
    <>
      <div className=" about-title d-flex">
        <h2 className="container mt-4  all-heading-color">Technologies</h2>

        <Nav.Link className="  mx-5  mt-4 mb-4" as={NavLink} to="/">
          Technologies \ Home
          
        </Nav.Link>
      
      </div>
      <div className="container">
        <div className="row banner-text p-5 ">
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img7} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img8} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img9} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img10} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img11} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img12} alt="" />
            <h3 className="text-center">Bootstrap</h3>
            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img13} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img14} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img15} alt="" />

            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <img className="w-50 mx-auto d-block" src={img6} alt="" />
            <h3 className="text-center">Karma</h3>
            <p className="text-center">
              No at diam tempor aliquyam sit duo est. Dolores justo sed dolor
              dolor et gubergren et, stet consetetur stet consetetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
