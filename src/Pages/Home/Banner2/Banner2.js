import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdGroups,MdOutlineComputer } from "react-icons/md";
import { AiTwotoneSwitcher, AiTwotoneLike } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import {
  BsFillDiagram3Fill,
  BsCheckSquareFill,
  BsFillLightbulbFill,
} from "react-icons/bs";
import { IoRocketSharp, IoDiamondOutline } from "react-icons/io5";
// import { IoDiamondOutline } from "react-icons/gr";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <>
      <h1 className="banner2 text-center mt-5  ">
        <strong className="banars">W</strong>hat are you Looking for ?
      </h1>
      
      <p className="text-center  pragraph-size">
        We are software outsourcing company lorem ipsum dolor. We provide
      </p>
      <p className="text-center pragraph-size">
        bibendum leo scelerisque glavrida dolor.
      </p>

      <div className="container mb-5   ">
        <div className="row mt-5 mx-5">
          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <MdOutlineComputer className=" icns-background-shape mx-auto d-block" />
            <p className="textes text-center mt-2">Web Application</p>
            <p className="textes2 text-center "> Development</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <FaMobileAlt className="icns-background-shape mx-auto d-block" />
            <p className="textes text-center mt-2">Mobile Applicatiob</p>
            <p className="textes2 text-center ">Development</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <MdGroups className="icns-background-shape  mx-auto d-block" />
            <p className="textes text-center mt-2">Agile Team</p>
          </div>
          
        </div>
      </div>
      <div className="bg-color p-5 ">
        <div className="container">
          <div className="row">
            <h1 className="banner2 text-center mt-5  ">
              How can <strong className="banars">We</strong> help you ?{" "}
            </h1>
            <p className="text-center  pragraph-size ">
              We are software outsourcing company lorem ipsum dolor. We provide
            </p>
            <p className="text-center  pragraph-size">
              bibendum leo scelerisque glavrida dolor.
            </p>
          </div>
        </div>
        <div className="container mt-5  ">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 banner2 mb-5 ">
              <p>
                <MdGroups className="mx-2 icns-color mb-2 " size={32} /> Agile team
              </p>
              <p>
                <BsFillDiagram3Fill className="mx-2 icns-color mb-2" size={32} />{" "}
                Scrum
              </p>
              <p>
                <AiTwotoneSwitcher className="mx-2 icns-color mb-2" size={32} /> TDD
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 banner2 mb-5 ">
              <p>
                <HiCode className="mx-2 icns-color mb-2" size={32} /> Clean code
              </p>
              <p>
                <AiTwotoneLike className="mx-2 icns-color mb-2" size={32} /> Quality
                Software
              </p>
              <p>
                <IoRocketSharp className="mx-2 icns-color mb-2" size={32} />{" "}
                Innovative
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 banner2 mb-5 ">
              <p>
                <IoDiamondOutline className="mx-2 icns-color mb-2" size={32} /> Cost
                effective
              </p>
              <p>
                <BsCheckSquareFill className="mx-2 icns-color mb-2" size={25} />{" "}
                Transparent & honest
              </p>
              <p>
                <BsFillLightbulbFill className="mx-2 icns-color mb-2" size={28} />{" "}
                Creative
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center heading-color p-5 text-light">``The time is always right to do what is right!``</h1>
      </div>
    </>
  );
};

export default Banner2;
