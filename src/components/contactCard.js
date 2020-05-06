import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const CardContact = (props) => {
  const handleDelete = () => {
    axios.delete(
      `http://localhost:5001/delete_contact/${props.contact._id.valueOf()}`
    );
  };
  return (
    <Card
      style={{ width: "18rem", magin:"5px" }}
      className="shadow col-md-4"
      key={props.contact.id}
    >
      <Card.Body>
        <Card.Title>Contact info : </Card.Title>
        <div className="text-info">
          <p> <span>Contact Name :  </span> {props.contact.name}</p>
          <p><span>Contact Email : </span> {props.contact.email}</p>
          <p><span> Contact téléphone :  </span>{props.contact.telephone}</p>
        </div>

        <Link to={`/updatecontact/${props.contact._id}`} >
            <Button className="btn">Update</Button>
          </Link>
        <Button variant="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CardContact;
