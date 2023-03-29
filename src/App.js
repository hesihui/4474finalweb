import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Card,
  Collapse,
  Button,
} from "react-bootstrap";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <header className="my-4">
            <h1>Final documentation -- CS4474</h1>
          </header>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Nav className="flex-column">
            <>
              <Button
                className="btn-light"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <Nav.Link href="#executiveSummary">
                  <h3>Executive Summary</h3>
                </Nav.Link>
              </Button>
              <Collapse in={open}>
                <Nav className="ml-4">
                  <Nav.Link href="#overview">Overview</Nav.Link>
                  <Nav.Link href="#motivation">Motivation</Nav.Link>
                </Nav>
              </Collapse>
            </>
            <Nav.Link href="#executiveSummary">
              <h3>Executive Summary</h3>
            </Nav.Link>
            <Nav className="ml-4">
              <Nav.Link href="#overview">Overview</Nav.Link>
              <Nav.Link href="#motivation">Motivation</Nav.Link>
            </Nav>
            <Nav.Link href="#designPrinciples">
              <h3>Navigational map</h3>
            </Nav.Link>
            <Nav.Link href="#designPrinciples">
              <h3>Design Principles</h3>
            </Nav.Link>
            <Nav className="ml-4">
              <ul>
                <li>
                  <Nav.Link href="#visibility">Visibility</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#consistency">Consistency</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#affordance">Affordance</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#colorContrast">Color and contrast</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#alignment">Alignment</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Mapping</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">
                    Iconic Representation
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Highlighting</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Feedback</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">
                    Accessibility
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Hierarchy</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Readability</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Fitts's Law</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Forgiveness</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">
                    Recognition over recall
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">
                    Progressive disclosure
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Control</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">
                    Aesthetic-Usability Effect
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Constraints</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Mimicry</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Confirmation</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#section1-subsection2">Causality</Nav.Link>
                </li>
              </ul>
            </Nav>
            <Nav.Link href="#section3">
              <h3>Heuristic evaluation</h3>
            </Nav.Link>
            <Nav.Link href="#designPrinciples">
              <h3>Thoughtful recommendations</h3>
            </Nav.Link>
          </Nav>
        </Col>

        <Col md={8}>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section1">Executive Summary</Card.Title>
              <Card.Title id="overview">
                <p>Overview</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                Our application is a redesigned car race game. The purpose of
                redesigning is to create an engaging and immersive experience
                for players with adding careful consideration of game mechanics,
                user interface and graphics. There are many intuitive user
                interfaces such as icon, windows, text, control wheel, timer,
                etc. are added to navigate players to select different functions
                of the game. To allow players to quickly learn the game
                mechanics, tutorial mode is added in the game. There are many
                pop-ups instruction windows in the tutorial to provide clear
                feedback to players. The game mechanics of our game involve
                controlling the speed and direction of the car using mouse or
                keyboard. The game also includes nitro boosts as power-ups
                function to give players and advantage during the race.
              </Card.Text>
              <Card.Title id="motivation">
                <p>Motivation</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The motivation of our group to redesign a car race game is to
                improve the user experience and add new functionalities to the
                game with various HCI design principles learned in the course.
                The previous game had usability issues: the game controls was
                difficult to use; lack of content issues: the game didn’t have
                any tutorial to guide user how to play the game. By addressing
                these issues, we believe our redesigned game can create a more
                immersive and enjoyable experience for players
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section2">Navigational Map</Card.Title>
              <Card.Text className="text-justify"></Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section2">Design Principles</Card.Title>
              <Card.Text className="text-justify"></Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section3">Heuristic evaluation</Card.Title>
              <Card.Text className="text-justify"></Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section3">Thoughtful recommendations</Card.Title>
              <Card.Text className="text-justify"></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
