/** @format */

import Button from "@restart/ui/esm/Button";
import "./More.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const More = props => {
  const { name, description, img } = props.more;
  return (
    <div>
      <Card className='bg-dark text-white'>
        <Card.Img src={img} alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button className='bg-success p-2 more'>
            <Link className='bg-success p-2 more-btn' to='/recent'>
              Learn more
            </Link>
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default More;
