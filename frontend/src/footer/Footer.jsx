// import React from 'react'
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo2 from "../assets/logo2.png";

import "./Footer.css";

function Footer() {
  return (
    <Row className="footer">
      <Col md={4} className="">
        <div className="foot-left   ">
          <div className="footlogo  mb-4 mt-4">
            <img src={logo2} alt=""></img>
          </div>
          <p>
            Devlacus Technologies is a software company that offers consulting
            and software development services for digital success.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <div>
          <div className="m-4 ">
            <h2>Our Services</h2>
          </div>
          <ul className="footer-menu mb-4  ">
            <li>APPLICATION SERVICES </li>
            <li>DATA & ANALYTICS</li>
            <li>TECHNOLOGY CONSULTING </li>
            <li>ARTIFICIAL INTELLIGENCE</li>
          </ul>
        </div>
      </Col>
      <Col md={4}>
        <div className=" contact">
          <div className="mb-4 mt-4 ">
            <h2>CONTACT ADDRESS</h2>
          </div>
          <div>
            <h5>UAE</h5>
            <p>Al Reyami Building, Second floor, Office No.202, Dubai, UAE</p>
          </div>
          <div>
            <h5>INDIA</h5>
            <p>F-11, Heavenly Plaza, Vazhakkala, Kochi, Kerala 682021</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
