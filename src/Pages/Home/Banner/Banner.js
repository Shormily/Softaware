import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slide from '../images/slide.png';
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Container fluid className="banner-section p-0">
        <Carousel variant="ligth" fade>
          <Carousel.Item className="carousel-one">
            <Container className="px-md-5">
              <Row className="banner-text">
                <Col sm={12} lg={12}>
                  <div className="add-title mt-5">
                  <img className="" src={slide} alt=''/>
                    <h1 className="banner-title mb-2 text-shadow text-center text-light">
                      Softaware Development
                    </h1>
                    <h1 className="banner-titleS mb-2 text-shadow text-center text-light">
                      DONE RIGHT
                    </h1>
                    <button
                      className="banner-button text-center mx-5 mt-5  "
                      to="/aboutus"
                    >
                      LEARN MORE ABOUT US
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-two">
            <Container className="px-md-5">
              <Row className="banner-text">
                <Col sm={12} lg={12}>
                  <div className="add-title mt-5">
                  <img className="" src={slide} alt=''/>
                    <h1 className="banner-title mb-2 text-shadow text-center text-light">
                      Softaware Development
                    </h1>
                    <h1 className="banner-titleS mb-2 text-shadow text-center text-light">
                      DONE RIGHT
                    </h1>
                    <button
                      className="banner-button text-center mt-5 "
                      to="/aboutus"
                    >
                      LEARN MORE ABOUT US
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-three">
            <Container className="px-md-5">
              <Row className="banner-text">
                <Col sm={12} lg={12}>
                  <div className="add-title">
                  <img className="" src={slide} alt=''/>
                    <h1 className="banner-title mb-2 text-shadow text-center text-light">
                      Softaware Development
                    </h1>
                    <h1 className="banner-titleS mb-2 text-shadow text-center text-light">
                      DONE RIGHT
                    </h1>
                    <button
                      className="banner-button text-center mt-5  "
                      to="/aboutus"
                    >
                      LEARN MORE ABOUT US
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Banner;
