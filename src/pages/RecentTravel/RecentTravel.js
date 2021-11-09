/** @format */

import { Card, CardGroup } from "react-bootstrap";
import "./RecentTravel.css";

const RecentTravel = props => {
  const { name, description, img } = props.recent;
  return (
    <div>
      <div>
        <CardGroup>
          <Card className='recent'>
            <Card.Img variant='top' src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default RecentTravel;
