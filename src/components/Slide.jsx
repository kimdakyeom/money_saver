import imgA from '../img/1.jpg';
import imgB from '../img/2.jpg';
import imgC from '../img/3.jpg';
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slide() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={imgA}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={imgB}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "400px" }}
          className="d-block w-100"
          src={imgC}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}