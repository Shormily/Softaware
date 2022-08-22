import React from 'react';
import "./Card.css";
import { HiChevronDoubleRight } from "react-icons/hi";

const Card = ({service}) => {
    const {  name, img,explain } = service;
    return (
        <>
          
          <div className="col-lg-4 col-md-6 col-12 mb-3 mt-5">
        <div className="card-containers rounded-2">
          <div className="">
            <div className="image-containers">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-center pragraph-weight mt-3 text-primary">
              {name}
            </h4>
           <p className='text-center px-4 mt-3 mb-1'>{explain}</p>
            <div className="btnservice p-3">
              <button
                className="btnsdesigns px-4 pragraph-weight text-light bg-primary rounded-2"
               
              >
                Details <HiChevronDoubleRight size={25}/>
              </button>
              {/* <NavLink as={NavLink} to={`/cardShipping/${_id}`}
                 >

                <button className='btnsdesigns  px-4 pragraph-weight text-light bg-primary rounded-2'  >Book Now </button>
                </NavLink> */}
              
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Card;