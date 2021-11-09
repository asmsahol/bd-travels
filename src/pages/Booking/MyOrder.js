/** @format */

import Button from "@restart/ui/esm/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  // My Order
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/booking")
      .then(res => res.json())
      .then(data => setMyOrder(data));
  }, [myOrder]);

  // Handle Delete
  const handleDelete = id => {
    fetch(`https://pure-falls-70781.herokuapp.com/booking/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Confirm to Delete Order");
      });
  };
  const orders = myOrder.filter(order => order?.email === user?.email);
  return (
    <div className='services'>
      {orders.map(order => (
        <Card
          className='service shadow-sm p-3 mb-5 bg-body rounded'
          style={{ width: "18rem" }}
        >
          <Card.Img variant='top' src={order.img} />
          <Card.Body>
            <Card.Title>{order.service}</Card.Title>
            <Card.Text>{order.price}</Card.Text>
            <Button
              onClick={() => handleDelete(order._id)}
              className='btn btn-d bd-btn btn-danger'
            >
              Cancel
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default MyOrder;
