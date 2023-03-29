import React from "react";
import { Nav } from "react-bootstrap";

function Catalogue() {
  return (
    <Nav className="flex-column">
      <Nav.Link href="#section1">Section 1</Nav.Link>
      <Nav.Link href="#section2">Section 2</Nav.Link>
      <Nav.Link href="#section3">Section 3</Nav.Link>
    </Nav>
  );
}

export default Catalogue;