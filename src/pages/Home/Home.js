/** @format */

import React, { useEffect, useState } from "react";
import "./Home.css";
import Services from "../Services/Services";
import TravelsWay from "../TravelsWay/TravelsWay";
import More from "./More/More";
import Slider from "./Slider/Slider";

const Home = () => {
  const [more, setMore] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/more")
      .then(res => res.json())
      .then(data => setMore(data));
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Travels Way
  const [travelWay, setTravelWay] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/travels_way")
      .then(res => res.json())
      .then(data => setTravelWay(data));
  }, []);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>
      <h2 className='mt-5'>Best places to visit in Bangladesh</h2>
      <div className='services'>
        {services.slice(0, 8).map(service => (
          <Services service={service} key={service._id}></Services>
        ))}
      </div>
      <div className='my-5'>
        {more.map(mr => (
          <More more={mr} key={mr._id}></More>
        ))}
      </div>
      <div>
        <h2 className='mt-5'>WAYS TO TRAVEL</h2>
        <div className='travels-way'>
          {travelWay.slice(0, 3).map(tWay => (
            <TravelsWay tWay={tWay} key={tWay._id}></TravelsWay>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
