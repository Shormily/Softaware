import React from 'react';
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { VscDeviceMobile } from "react-icons/vsc";
import "./Footer.css";

const Footer = () => {
    return (
        <>
          <div className="footer-color text-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight footer-title-size"> <span className='foter-col' >Seven </span> Softaware</h3>
              <hr className="w-50" />
            
              <p className="pragraph-weight mt-4">We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
              <i class="fa-brands fa-facebook-f  shadow icn "></i>{" "}
              <i class="fa-brands fa-twitter icn shadow "></i>{" "}
              <i class="fa-brands fa-linkedin-in icn shadow "></i>{" "}
              <i class="fa-solid fa-envelope icn shadow "></i>
              
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight mt-3">Showcase</h3>
              <hr className="w-25" />
              <p className="pragraph-weight mt-4 ">Web Development </p>
              <p className="pragraph-weight">App Development</p>
              <p className="pragraph-weight">Web Design</p>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-12">
              <h3 className="footer-weight mt-3">Contact Information</h3>
              <hr className="w-50" />
              <p className="pragraph-weight mt-4"><GoLocation size={24}/> 12 Main tPt. London</p>
              <p className="pragraph-weight"><VscDeviceMobile size={24}/> +44 3656 4567</p>
              <p className="pragraph-weight"><CgMail size={24}/> SevenSoftawere@gmail.com</p>
              
            </div>
            <hr className="mt-4" />
          </div>
        </div>
      </div>
        </>
    );
};

export default Footer;