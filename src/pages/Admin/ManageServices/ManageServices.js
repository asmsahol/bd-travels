/** @format */

import Button from "@restart/ui/esm/Button";
import "./ManageServices.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/services")
      .then(res => res.json())
      .then(result => {
        setServices(result);
      });
  }, []);
  return (
    <div className='mx-2 manage-services'>
      <h2>Manage All Service</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Service ID</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {services.map(service => (
          <tbody>
            <tr>
              <td>{services.findIndex(sr => sr._id === service._id) + 1}</td>
              <td>{service._id}</td>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <Button className='btn-warning rounded'>Update</Button>
              </td>
              <td>
                <Button className='btn-danger rounded'>Delete</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageServices;
