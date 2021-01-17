import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Item = ({item}) => {

    return (
        <div className="col-md-4 mt-4" >
        <Card >
                <Card.Img variant="top" src={item.images[0].original} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                       DESCRIPTION
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;