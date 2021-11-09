/** @format */

import "./Booking.css";
import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";

const Booking = props => {
  const { serviceId } = useParams();
  const services = props.services;
  const service = services.filter(service => service._id === serviceId);
  const { user } = useAuth();
  const email = user?.email;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    data.status = "Pending";
    fetch("https://pure-falls-70781.herokuapp.com/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Confirm Order");
    alert("Order Successful");
  };
  return (
    <div className='booking-section'>
      <div>
        {service.map(singleService => (
          <Container>
            <h2 className='m-5'>Welcome to {singleService.name} Tour</h2>
            <CardGroup className='m-5'>
              <Card>
                <Card.Img variant='top' src={singleService.img} />
                <Card.Body>
                  <Card.Title>{singleService.name}</Card.Title>
                  <Card.Text>{singleService.description}</Card.Text>
                  <Card.Text>{singleService.price}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        ))}
      </div>
      {service.map(singleService => (
        <div className='order-section'>
          <h2 className='m-5 p-3'>Place Your Order</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("service")}
              value={singleService.name}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("email")}
              value={email}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("img")}
              value={singleService.img}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("date")}
              type='date'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("name", { required: true })}
              defaultValue={user?.displayName}
              type='name'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("address", { required: true })}
              placeholder='Address'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("phone", { required: true })}
              placeholder='Phone Number'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("price", { required: true })}
              value={singleService.price}
              className='w-100 p-2 m-2'
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type='submit'
              className='btn btn-success bd-btn'
              value='Order'
            />
          </form>
        </div>
      ))}
    </div>
  );
};

export default Booking;
