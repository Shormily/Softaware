import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiFillStar } from "react-icons/ai";
import "./Swipers.css";
import card from "../images/card.jpg";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import img1 from "../images/img1.jpg";
import img4 from "../images/img4.jpg";

const Swipers = () => {
  return (
    <>
    <div className="container">
      <h1 className="banner2 text-center mt-5  ">Our Latest Cards</h1>
      <p className="text-center mt-3 pragraph-size">Stet et dolor voluptua diam eos sit no sea, rebum nonumy voluptua rebum  ipsum .</p>
      <p className="text-center pragraph-size">Stet et dolor voluptua diam eos sit no sea. </p>
    </div>
      <div className="container p-5">
        <div className="row">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="p-5"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              570: {
                slidesPerView: 1,
              },

              525: {
                slidesPerView: 1,
              },
              490: {
                slidesPerView: 1,
              },
              440: {
                slidesPerView: 1,
              },
              430: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      {/* <p>{id</p> */}
                      <h3>Drem Theme</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card1} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>E-commerce</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card2} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Medical app</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card3} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Drem Dev</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card4} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Death Horgin</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card5} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Construction </h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={card6} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Hosting </h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={img4} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Book Prestation</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="col-lg-3 col-md-6 col-sm-12 mb-4 ">
                <div className="card-container ">
                  <div className="image-container">
                    <img src={img1} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="card-title text-center text-danger">
                      <h3>Computer Lab</h3>
                      <div className="text-warning font">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                  <div className="btnservice p-3">
                    <button className="btnsdesigns px-4 pragraph-weight text-light  ">
                      View as
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Swipers;
