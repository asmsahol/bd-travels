/** @format */

import Button from "@restart/ui/esm/Button";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  // All Order
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/booking")
      .then(res => res.json())
      .then(result => {
        setOrders(result);
      });
  }, [orders]);

  // Handle Delete
  const handleDelete = id => {
    fetch(`https://pure-falls-70781.herokuapp.com/booking/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Delete Confirm ");
        alert("Delete Successful");
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {};
  return (
    <div className='px-2'>
      <h2>Manage All Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Date</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders.map(order => (
          <tbody>
            <tr>
              <td>{orders.findIndex(or => or._id === order._id) + 1}</td>
              <td>{order.date}</td>
              <td>{order.email}</td>
              <td>{order.service}</td>
              <td>{order.price}</td>
              <td>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <select>
                    <option value='pending'>{order.status}</option>
                    <option value='approved'>Approved</option>
                  </select>
                  {/* <input type='submit' className='text-warning' /> */}
                </form>
              </td>
              <td>
                <Button className='btn-warning rounded'>Update</Button>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(order._id)}
                  className='btn-danger rounded'
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageOrders;
