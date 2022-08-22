import React from "react";
import Imgdesign from "../Imgdesign/Imgdesign";
import img1 from "../images/img1.jpg";
import img3 from "../images/img3.jpg";
import img2 from "../images/img2.jpg";
import img4 from "../images/img4.jpg";
import { IoWoman, IoDiamondOutline } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { FaToolbox } from "react-icons/fa";
import CountUp from "react-countup";
import "./About.css";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const About = () => {
  return (
    <>
      
      <div className=" about-title d-flex">
        <h2 className="container mt-4 all-heading-color">About US</h2>
       
        <Nav.Link className="  mt-4 mb-4 mx-5 " as={NavLink} to="/">
        About US \ Home
          
        </Nav.Link>
      </div>
      <h1 className="text-center mt-5 about-title-1">About US</h1>
      <div className="p-4">
        <p className="text-center pragraph-size">
          Eos accusam dolor duo elitr magna at. Vero amet et aliquyam kasd
          labore sed, eos dolores rebum ut sit diam.
        </p>
        <p className="text-center pragraph-size">
          Eos accusam dolor duo elitr magna at. Vero amet et aliquyam kasd{" "}
        </p>
      </div>
      <div className="container">
        <div className="row banner-text  p-5">
          <div className="col-lg-6 col-md-12  col-sm-12">
            <img className="w-100" src={img1} alt="" />
          </div>
          <div className="col-lg-6 col-md-12  col-sm-12">
            <p className="text-secondary">
              Morbi et pellentesque erat. Nulla luctus imperdiet pharetra. Nam
              dignissim risus at ultricies elementum. Nullam sit amet dolor quis
              libero sollicitudin commodo. Mauris sit amet quam enim. Fusce vel
              imperdiet orci. Aenean id quam non lorem condimentum venenatis.
            </p>
            <p className="mt-3 mb-3 text-secondary">
              Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque
              purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate
              eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo
              id, hendrerit ultricies magna. Duis bibendum quam in elit
              accumsan!
            </p>
            <button className="banner-button pragraph-size">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="heading-color p-5">
        <div className="container ">
          <div className="row mx-5 text-light">
            <div className="col-lg-4 col-md-4 col-12 ">
              <h1 >
                <IoWoman className="icns-background-shape-1 " size={40} />{" "}
                <CountUp end={10} />
                <HiPlus />
              </h1>
              <p className="pragraph-size-1 text-light">Specilist</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h1>
                <FaToolbox className="icns-background-shape-1" size={35} />{" "}
                <CountUp end={50} />
                <HiPlus />
              </h1>
              <p className="pragraph-size-1 text-light">Client</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h1>
                <IoDiamondOutline
                  className="icns-background-shape-1"
                  size={35}
                />{" "}
                <CountUp end={4} />
                <p className="pragraph-size-1 text-light ">Awards</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color">
      <div className="container">
        <div className="row banner-text  p-5">
          
          <div className="col-lg-6 col-md-12  col-sm-12">
            <h2 className="mb-4">Client-Oriented </h2>
            <p className="text-secondary">
              Morbi et pellentesque erat. Nulla luctus imperdiet pharetra. Nam
              dignissim risus at ultricies elementum. Nullam sit amet dolor quis
              libero sollicitudin commodo. Mauris sit amet quam enim. Fusce vel
              imperdiet orci. Aenean id quam non lorem condimentum venenatis.
            </p>
            <p className="text-dark mb-3 mt-3">We deliver value to our clients by:</p>
            <p className="mb-3 text-secondary">
              Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque
              purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate
              eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo
              id, hendrerit ultricies magna. Duis bibendum quam in elit
              accumsan!
            </p>
            
          </div>
          <div className="col-lg-6 col-md-12  col-sm-12">
            <img className="w-100 p-4" src={img2} alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="container">
        <div className="row banner-text  p-5">
          <div className="col-lg-6 col-md-12  col-sm-12">
            <img className="w-100 p-4" src={img3} alt="" />
          </div>
          <div className="col-lg-6 col-md-12  col-sm-12">
          <h2 className="mb-4">Mission</h2>
            <p className="text-secondary">
              Morbi et pellentesque erat. Nulla luctus imperdiet pharetra. Nam
              dignissim risus at ultricies elementum. Nullam sit amet dolor quis
              libero sollicitudin commodo. Mauris sit amet quam enim. Fusce vel
              imperdiet orci. Aenean id quam non lorem condimentum venenatis.
            </p>
            <p className="mt-3 mb-3 text-secondary">
              Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque
              purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate
              eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo
              id, hendrerit ultricies magna. Duis bibendum quam in elit
              accumsan!
            </p>
            <button className="banner-button pragraph-size">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="bg-color">
      <div className="container">
        <div className="row banner-text  p-5">
          
          <div className="col-lg-6 col-md-12  col-sm-12">
            <h2 className="mb-4">Vision </h2>
            <p>To be first choice software outsourcing company:</p>
            <p className="text-secondary">
              Morbi et pellentesque erat. Nulla luctus imperdiet pharetra. Nam
              dignissim risus at ultricies elementum. Nullam sit amet dolor quis
              libero sollicitudin commodo. Mauris sit amet quam enim. Fusce vel
              imperdiet orci. Aenean id quam non lorem condimentum venenatis.
            </p>
           
            <p className="mb-3 text-secondary">
              Nam ut dolor ullamcorper, imperdiet nunc vitae, pellentesque
              purus. Nulla ut turpis sed leo ornare consectetur. Duis vulputate
              eu risus eu sollicitudin. Mauris nisi lectus, pharetra eget leo
              id, hendrerit ultricies magna. Duis bibendum quam in elit
              accumsan!
            </p>
            
          </div>
          <div className="col-lg-6 col-md-12  col-sm-12">
            <img className="w-100 p-4" src={img4} alt="" />
          </div>
        </div>
      </div>
      </div>
      <Imgdesign />
    </>
  );
};

export default About;
