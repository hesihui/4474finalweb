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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
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
                className="btn-light btn-outline-light"
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
            <>
              <Button
                className="btn-light btn-outline-light"
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <Nav.Link href="#executiveSummary">
                  <h3>Navigational map</h3>
                </Nav.Link>
              </Button>
            </>
            <>
              <Button
                className="btn-light btn-outline-light"
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
              >
                <Nav.Link href="#executiveSummary">
                  <h3>Design Principles</h3>
                </Nav.Link>
              </Button>
              <Collapse in={open1}>
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
                      <Nav.Link href="#alignment">Alignment</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#mapping">Mapping</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#feedback">Feedback</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#accessibility">Accessibility</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#fittsLaw">Fitts's Law</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#progressiveDis">
                        Progressive disclosure
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#control">Control</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#constraints">Constraints</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#confirmation">Confirmation</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#causality">Causality</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#gestaltLaw">Gestalt Law</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#familiarity">Familiarity</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#feedforward">Feedforward</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#chunking">Chunking</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#hickLaw">Hick’s law (p.84)</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#positiveTransfer">
                        Positive Transfer (p.93)
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#recognition">
                        Recognition over recall
                      </Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </Collapse>
            </>
            <>
              <Button
                className="btn-light btn-outline-light"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
              >
                <Nav.Link href="#executiveSummary">
                  <h3>Heuristic evaluation</h3>
                </Nav.Link>
              </Button>
              <Collapse in={open2}>
                <Nav className="ml-4">
                  <ul>
                    <li>
                      <Nav.Link href="#visibility">Visibility of System Status</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#matchSystemReal">Match Between the System and the Real World</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#userControl">User Control & Freedom</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#consistencyStand">Consistency and Standards</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#errorPrevent">Error Prevention</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#recognitionRecall">Recognition vs. Recall in User Interfaces</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#flexibilityEfficien">Flexibility and Efficiency of Use</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#aestheticMini">Aesthetic and Minimalist Design</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#helpUserRecognize">Help Users Recognize, Diagnose and Recover from Errors</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#helpDocumentation">Help & Documentation</Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </Collapse>
            </>
            <>
              <Button
                className="btn-light btn-outline-light"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
              >
                <Nav.Link href="#executiveSummary">
                  <h3>Thoughtful recommendations</h3>
                </Nav.Link>
              </Button>
              <Collapse in={open3}>
                <Nav className="ml-4">
                  <Nav.Link href="#overview">Overview</Nav.Link>
                  <Nav.Link href="#motivation">Motivation</Nav.Link>
                </Nav>
              </Collapse>
            </>
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
