import React from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Imgdesign from '../Imgdesign/Imgdesign';

const Contact = () => {
  return (
    <>
      <div className=" about-title d-flex ">
        <h2 className="container mt-4 all-heading-color">Contact US</h2>

        <Nav.Link className="  mt-4 mb-4 mx-5 " as={NavLink} to="/">
          Contact US \ Home
        </Nav.Link>
      </div>
      <div className="container">
        <div className="row mb-5">
          <h1 className="text-center contact-heading mt-5">
            Get <span className="colors-contact">In</span> Touch
          </h1>
        </div>
        <div className="container">
          <div className="row ">
            <div className="map-container d-none d-md-block col-lg-6 col-md-6 col-12 pb-0  ">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.923052820784!2d-73.9937952790812!3d40.609521322945426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2451b7aaba0d9%3A0xc241c2bd96d83c41!2s21st%20Ave%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1661102573241!5m2!1sen!2sbd"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="text-center mt-2 ">
                <h3 className="contact-map-title">Seven Softawere</h3>
                <p className="mb-3">
                  121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                </p>
                <p>Call US</p>
                <p>1 (234) 567-891</p>
                <p className="mb-2">1 (234) 987-654</p>
                <p className="mb-5">SevenSoftawere@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 ">
              <div className=" input-part mt-2 mb-5">
                <input
                  className=" mb-3 p-3  w-100 shadow"
                  placeholder="Name*"
                  type="text"
                />

                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-100 shadow"
                  placeholder="Email"
                />
                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-100 shadow"
                  placeholder="Password"
                />
                <input
                  required
                  type="text"
                  className="mb-3 p-3  w-100 shadow"
                  placeholder="Re-Type-Password"
                />

                <button className="contact-button shadow ">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Imgdesign/>
    </>
  );
};

export default Contact;
