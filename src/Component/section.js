import React from "react";
import { Card } from "react-bootstrap";

function Section({ id, title, content }) {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title id={id}>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Section;