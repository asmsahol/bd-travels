/** @format */

import React from "react";
import "./Admin.css";
import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import AddService from "../Services/AddService";
import ManageServices from "./ManageServices/ManageServices";
import ManageOrders from "./ManageOrders/ManageOrders";

const Admin = () => {
  const [control, setControl] = useState("add_service");
  return (
    <div>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className='text-white bg-dark pt-3 mb-5 admin_list'
          >
            <li onClick={() => setControl("add_service")}>
              <ListGroup.Item>Add Service</ListGroup.Item>
            </li>
            <li onClick={() => setControl("manage_services")}>
              <ListGroup.Item>Manage Service</ListGroup.Item>
            </li>
            <li onClick={() => setControl("manage_orders")}>
              <ListGroup.Item>Manage Order</ListGroup.Item>
            </li>
          </Col>
          <Col xs={12} md={8}>
            {control === "add_service" && <AddService></AddService>}
            {control === "manage_services" && <ManageServices></ManageServices>}
            {control === "manage_orders" && <ManageOrders></ManageOrders>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
