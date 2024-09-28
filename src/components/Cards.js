import React, { useState } from "react";
import Cardsdata from "./CardsData"; 
import { Card, Button } from "react-bootstrap"; 
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cards = () => {
  // Use a state to manage the card data
  const [data, setData] = useState(Cardsdata);
  const dispatch =useDispatch();
 
  const send =(item)=>{
    console.log("Adding to cart:", item);
    dispatch(ADD(item))
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Menu</h2>
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
              <Card className="h-100 shadow-sm">
            
                <Card.Img
                  variant="top"
                  src={item.imgdata}
                  alt={item.rname}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.rname}</Card.Title>
                  <Card.Text>
                    <p><strong>Address:</strong> {item.address}</p>
                    <p><strong>Rating:</strong> {item.rating} ★</p>
                    <p><strong>Price:</strong> ₹{item.price}</p>
                    <p><strong>Orders:</strong> {item.somedata}</p>
                  </Card.Text>
                 
                  <Button variant="primary" className="mt-auto" onClick={()=>send(item)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
