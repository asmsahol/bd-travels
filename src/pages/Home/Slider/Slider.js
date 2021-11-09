/** @format */

import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className='slider'>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/GmzJxy41/sundarban.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='text-white bg-success bg-opacity-50 rounded'>
            <h5>Sundarban Tour</h5>
            <p>
              Explore the largest mangrove forest on earth - Sundarbans, a
              UNESCO World Heritage Site
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/rsYQjRnm/coxsbazar.jpg'
            alt='Second slide'
          />
          <Carousel.Caption className='text-white  bg-success bg-opacity-50 rounded'>
            <h5>Bangladesh Cox's Bazar Sea Beach Excursion Tour</h5>
            <p>
              Cox's Bazar is the prime beach and tourist town in Bangladesh,
              situated alongside the beach of the Bay of Bengal, beside the
              Indian ocean, having unbroken
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.postimg.cc/Bn2BLz0t/sylhet.jpg'
            alt='Third slide'
          />
          <Carousel.Caption className='text-white  bg-success bg-opacity-50 rounded'>
            <h5>Sylhet Nature Tour Bangladesh </h5>
            <p>The 23 Best Places in Sylhet – Top Tourist Places</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
