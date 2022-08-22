import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Card from "../Card/Card";
import MobileApp from "../MobileApp/MobileApp";
import Service from "../Service/Service";
import Websites from "../Websites/Web";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const ServiceNav = () => {
  return (
    <>
      <div className=" about-title d-flex ">
        <h2 className="container mt-4  all-heading-color">Showcase</h2>

        <Nav.Link className="  mx-5  mt-4 mb-4" as={NavLink} to="/">
          Showcase \ Home
        </Nav.Link>
      </div>

      <Navbar className="nav-bar container p-5">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav "
          className="nav-toggle"
        />

        <Tabs id="basic-navbar-nav">
          <TabList className="ms-auto d-flex  ">
            <Tab className="nav-link">View All</Tab>
            <Tab className="nav-link">App Development</Tab>
            <Tab className="nav-link">Web Development</Tab>
            
          </TabList>

          <TabPanel>
            <Service />
          </TabPanel>
          <TabPanel>
            <Websites />
          </TabPanel>
          <TabPanel>
            <MobileApp />
          </TabPanel>
        </Tabs>
      </Navbar>
    </>
  );
};

export default ServiceNav;
