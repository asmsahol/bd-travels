/** @format */

import React from "react";
import "./TravelsWay.css";
import { Card, CardGroup } from "react-bootstrap";

const TravelsWay = props => {
  const { name, img, last_update } = props.tWay;
  return (
    <div>
      <CardGroup>
        <Card className='t-way'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>{last_update}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default TravelsWay;
