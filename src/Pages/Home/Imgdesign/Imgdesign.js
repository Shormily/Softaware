import React from 'react';
import "./Imgdesign.css"

const Imgdesign = () => {
    return (
        <>
         <div className='img-designs ' >
            <div className='container'>
                <div className='row add-title'>
                    <h1 className='w-50 text-center '>Have a project you'd like to talk about?</h1>
                    <p className='w-50 text-center '>Voluptua dolor eos diam sanctus stet elitr, sanctus et tempor et sed sit est, sit clita amet diam invidunt. Invidunt.</p>
                    <div className='add-button-flex'>
                    <button
                      className="banner-button text-center mx-3 mt-5  "
                      to="/aboutus"
                    >
                      CONTACT US 
                    </button>
                    <button
                      className="banner-button text-center mx-3 mt-5  "
                      to="/aboutus"
                    >
                      VIEW SHOWCASE
                    </button>
                    </div>
                  
                </div>
            </div>
            </div> 
        </>
    );
};

export default Imgdesign;