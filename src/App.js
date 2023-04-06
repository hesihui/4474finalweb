import React, { useState, useRef, useEffect } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./Component/DropDown";
import ImageMagnifier from "./Component/magnifier";
import storyBoard from "./Component/assets/storyboard.png";

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Container>
      <>
        {showButton && (
          <Button
            className="back-to-top-button"
            onClick={handleClick}
            variant="dark"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </Button>
        )}
      </>
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
          {/* <div ref={colRef}> */}
          <Nav className="flex-column">
            <>
              <Button
                onClick={() => setOpen(!open)}
                variant={open ? "secondary" : "light"}
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
                <Nav.Link href="#navimap">
                  <h3>Navigational map</h3>
                </Nav.Link>
              </Button>
            </>
            <>
              <Button
                variant={open1 ? "secondary" : "light"}
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
                variant={open2 ? "secondary" : "light"}
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
                      <Nav.Link href="#visibility">
                        Visibility of System Status
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#matchSystemReal">
                        Match Between the System and the Real World
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#userControl">
                        User Control & Freedom
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#consistencyStand">
                        Consistency and Standards
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#errorPrevent">Error Prevention</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#recognitionRecall">
                        Recognition vs. Recall in User Interfaces
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#flexibilityEfficien">
                        Flexibility and Efficiency of Use
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#aestheticMini">
                        Aesthetic and Minimalist Design
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#helpUserRecognize">
                        Help Users Recognize, Diagnose and Recover from Errors
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#helpDocumentation">
                        Help & Documentation
                      </Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </Collapse>
            </>
            <>
              <Button
                variant={open3 ? "secondary" : "light"}
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
                  <ul>
                    <li>
                      <Nav.Link href="#asp">Advanced Setting Page</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#gs">Garage System</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#vc">Virtual Community</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#mgm">More Game Modes</Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#gui">
                        Improvement on the Game User Interface
                      </Nav.Link>
                    </li>
                  </ul>
                </Nav>
              </Collapse>
            </>
          </Nav>
          {/* </div> */}
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
              <Card.Title id="navimap">Navigational Map</Card.Title>
              <Card.Text className="text-justify">
                <DropDown />
                <ImageMagnifier
                  src={storyBoard}
                  width={"800px"}
                  height={"400px"}
                />
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section2">Design Principles</Card.Title>
              <Card.Title id="visibility">
                <p>Visibility</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                Important elements are visible and easily accessible, which
                clearly shows the current status of the game, and the player can
                sense it visually. In the game, the nitro box will turn blue if
                the player gathers a usable nitrogen engine so that the player
                knows it can be used. The nitro box is gray if no nitrogen
                engine, indicating that it is unusable.
              </Card.Text>
              <Card.Title id="consistency">
                <p>Consistency</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game maintains a consistent look and feels across the
                interface. All the texts use the same font (VT323), which is a
                pixel-style font. The graphs and elements are all in pixel art,
                which creates a harmonious cartoon-like and retro visual style.
              </Card.Text>
              <Card.Title id="Affordance">
                <p>affordance</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                It refers to an attribute of an object that allows people to
                know how to use it. There are two ways to control the kart. The
                game allows the players to use WSAD or the arrow keys to control
                the kart if they prefer the keyboard. The control wheel can be
                dragged (just as in the real world) to turn left/right if the
                player prefers mouse control.
              </Card.Text>
              <Card.Title id="alignment">
                <p>Alignment</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The placement of elements such that edges line up along common
                rows or columns, or their bodies along a common center.
                Instruction windows are shown in the middle top of the players’
                screen to read easily
              </Card.Text>
              <Card.Title id="mapping">
                <p>Mapping</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game logically groups relevant elements and information into
                separate windows that can be opened by players (through clicking
                a button), so that players can easily perceive the effect when
                they select a category and find what they want. In the game,
                before racing, the player must select the kart and the map. The
                player can click either the button “MAP” or “KART” to toggle
                between the map and kart selecting window.
              </Card.Text>
              <Card.Title id="feedback">
                <p>Feedback</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game provides a sufficient amount of feedback so that the
                player knows what action they have done and the corresponding
                effect. When the player collects the nitrogen engine on the map,
                they will hear the sound effect that the nitrogen engine is
                installed and usable (if they had no nitrogen engine before); at
                the same time, the nitrogen icon on the top left will turn into
                blue (from gray) to indicate that the player can use nitrogen to
                accelerate. If the player already has a nitrogen engine, they
                cannot collect one more and will be reminded by the sound effect
                as well.
              </Card.Text>
              <Card.Title id="accessibility">
                <p>Accessibility or Externalization of Information (p.13)</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game realizes that it might be difficult for new players to
                remember all the operations. Some key information is
                externalized at the appropriate time to guide players’
                subsequent actions without requiring them to memorize anything.
                For example, when the player gathers a nitrogen engine, they may
                forget which key to press to use the nitrogen engine or memorize
                it wrong; therefore, the game shows a line of blinking text
                “Press SPACE to boost” at the top of the screen to guide
                players.
              </Card.Text>
              <Card.Title id="fittsLaw">
                <p>Fitts's Law</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game puts all the important buttons geometrically close to
                each other, even if they are on different screens, so players
                can easily navigate through multiple windows without high
                operational costs. For instance, when the player is on the
                initial page, after clicking “Press To Start”, the “Start Game”
                and “Tutorial” buttons (the two most important buttons) on the
                next page are very close to the pointer, so there is no need to
                move the mouse for a long distance to reach these buttons.
                Moreover, on the selecting kart (or map) page, all the buttons
                are gathered at the middle. The proximity of these buttons
                provides a smooth and comfortable user experience.
              </Card.Text>
              <Card.Title id="progressiveDis">
                <p>Progressive disclosure</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                Reveal information and options progressively as needed. When
                players do something first time in the tutorial mode, the
                corresponding instructions will show up to guide the player to
                recognize each element in the game, like acceleration blocks and
                nitro engines. Those instructions will not show up in the racing
                mode (to prevent interfering with the game).
              </Card.Text>
              <Card.Title id="control">
                <p>Control</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game gives users control over the interface and allows them
                to undo actions. In the menu, players can select different
                things based on their preferences, like selecting the kart and
                the map (each kart has a set of default attributes that is
                either strong in acceleration or turning). The player can also
                select the appropriate difficulty based on their familiarity to
                the game and whether they want to challenge themselves.
              </Card.Text>
              <Card.Title id="constraints">
                <p>Constraints</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game limits user actions to prevent errors (or any
                unexpected consequences) and simplify the interface. When the
                player selects the kart, each kart has a predetermined set of
                attributes (including speed, boost, acceleration, friction, and
                so on). These sets of attributes perfectly balance the
                advantages and weaknesses of each kart so that the game is
                playable and challenging at the same time. If players can adjust
                the attributes themselves, then the kart is either too strong or
                too weak, leading to a decreased playing experience. So, the
                game constrains the players’ abilities to adjust the attributes
                and provides preset options.
              </Card.Text>
              <Card.Title id="confirmation">
                <p>Confirmation</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                A technique for preventing unintended actions by requiring
                verification of the actions before they are performed. When the
                player pauses the game, they can select back to the main menu or
                continue the game; if they click on returning to the main menu,
                there will be a confirmation request to make sure the action by
                the players is intended.
              </Card.Text>
              <Card.Title id="causality">
                <p>Causality</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game tries to prevent any false causality and provide enough
                cues on the relationships between actions and reactions. For
                instance, when players hit different objects, different sound
                effects are triggered so that players can know what happens
                visually, but also based on audio cues. Moreover, when the
                player has no enough time to finish the race, the countdown on
                the top right will turn red and blink. The player will
                immediately receive the message when they fail the game, so they
                clearly know running out of time will lead to their failure.
              </Card.Text>
              <Card.Title id="gestaltLaw">
                <p>Gestalt Law</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The design of “How to Play” utilizes several principles in
                Gestalt Law to make the tutorial text more readable and easier
                to be understood by the player. For instance, proximity is used
                by writing the tutorial in paragraphs and separating each
                paragraph by a new line. Each paragraph focuses on introducing
                the same set of functionalities, so it is more logical to grasp
                what to remember. Moreover, similarity is used by coloring some
                important texts: players tend to focus more on these colored
                texts since they look different than others, in other words,
                more salient.
              </Card.Text>
              <Card.Title id="familiarity">
                <p>Familiarity</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game tries to mimic the scenario of driving a car in the
                real world to activate players’ mental models. For instance, the
                technique of skeuomorphism is applied: dragging the steel wheel
                indicates how drivers turn the direction in reality. The
                speedometer also provides feedback about the current speed to
                help players decide when to speed up or down. However, these
                elements are simplified versions, only necessary information is
                preserved to prevent irrelevant details and maintain the
                consistency of the game art.
              </Card.Text>
              <Card.Title id="feedforward">
                <p>Feedforward</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game provides enough visual cues and reactions based on
                players’ actions. For instance, the steel wheel in the game is
                specifically designed to guide the players to use it (even if
                they have read the tutorial in text form): the button on the
                steel wheel indicates that it is clickable (to accelerate the
                kart); after clicking it, the color of the button is turned to
                show that the player is dragging the steel wheel. The arrows on
                both sides of the button indicate that the steel wheel can be
                dragged to both sides to make the kart turn left or right.
              </Card.Text>
              <Card.Title id="chunking">
                <p>Chunking</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The UI in the game window applies chunking to group relevant
                information together to make the process of retaining
                information more easily. For instance, the remaining time and
                the remaining round are put together on the top right since they
                both relate to whether players can succeed in the game or not:
                if players want to check whether they can finish the game, they
                do not need to look for information by searching multiple areas
                to prevent being distracted too much.
              </Card.Text>
              <Card.Title id="hickLaw">
                <p>Hick's law (p.84)</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The main menu provides fewer choices than the original design of
                the game: most of the players wants to either learn how to play
                or jump right into the game; therefore, only “Start Game” and
                “Tutorial” are listed in text form since they are mostly chosen
                options and need to be more salient. Other less important
                options, like Credit and Settings, are put at the corner of the
                screen in icon form. All these changes commit to faster
                decision-making to start the game.
              </Card.Text>
              <Card.Title id="positiveTransfer">
                <p>Positive Transfer (p.93)</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game’s operation commits to utilizing players’ prior
                knowledge that is gained from other games by applying common
                practices among racing games so that players that play the game
                for the first time feel no difficulty getting started. The
                keyboard control scheme allows players to either press WSAD or
                arrow keys to control the kart. The space bar is to release
                nitrogen, which is also utilized in the Need For Speed Series.
                ESC can be pressed to pause the game, which is natural if the
                player has tried other games before.
              </Card.Text>
              <Card.Title id="recognition">
                <p>Recognition over recall</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                The game utilizes color to make objects, actions, and options
                recognizable to minimize memory load. For example, yellow
                objects are related to the acceleration functionality that is an
                innate part of each map; meanwhile, blue objects are related to
                the collectible boosting tool: the nitrogen engines scattered on
                the map are blue, the nitrogen box is blue when the nitrogen is
                usable, the pointer on the speedometer is also blue.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section3">Heuristic evaluation</Card.Title>
              <Card.Title id="visibility">
                <p>Visibility of System Status</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The game sometimes provides players with
                sufficient information to perceive the game’s status, including
                what is going on and the relationship between actions (from
                players) and reactions (how the system responds). On the setting
                page, players can turn on or off the music and the sound effect.
                Not only is the feedback offered in audio form (the music
                immediately stops or starts), but the player’s choice is also
                shown in text form (no music, muted, and all). Players can also
                easily perceive whether they have a nitrogen engine to use: the
                blue nitrogen box indicates that the nitrogen is usable, while a
                grey box means empty. The player will see the color of the
                nitrogen box turning when collecting a nitrogen engine, or they
                can hear the sound effect. <br></br>
                <b>Negative:</b> The game does not display the final decision of
                the kart and the map before the beginning of a race, which is
                prone to mistakes since players may memorize their decisions
                wrongly. Without the affirmative message displayed on the
                window, players cannot easily perceive the game status led by
                their actions. Moreover, players are not reminded of the
                running-out time. Even though they can see the remaining time in
                the top right corner, they may be too concentrated on the game
                to manage the time appropriately. Players may more easily lose
                the game if they are not aware of the game status regarding the
                time. <br></br>
                <b>Possible Solutions:</b> Add a confirmation window that
                displays the chosen kart and the map before leaving the
                selection page. Change the color and the size of the remaining
                time text (from yellow to red), or add some sound effects to
                create a tense atmosphere.
              </Card.Text>
              <Card.Title id="matchSystemReal">
                <p>Match Between the System and the Real World</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The language the game uses is easily understood
                by players since all components are described in plain language
                and conform to the communication habits of people. In the
                tutorial, basic operations are introduced in the form of “action
                + reaction” (for instance, “Use WASD to control the Super
                Charrio Kart”) to clearly specify the functionalities and what
                the player should expect after their actions The game
                interactions are designed based on the convention of the real
                world; in other words, how players operate in the game follows
                their physical interactions with the real world. When the player
                chooses the mouse control, the player first clicks on the button
                at the top of the digital steel wheel and drags it in two
                directions: left and right. In the physical world, the driver
                puts his or her hands onto the steel wheel and rotates it either
                left or right; therefore, the game mimics real-world
                interactions. <br></br>
                <b>Negative:</b>
                The design of the Nitrogen Engine icon may be difficult to
                understand, especially if the player is not familiar with the
                racing game or does not have the corresponding knowledge. From
                the perspective of the semiotic, “N2O” is a symbolic metaphor
                that should be taught, which may or may not motivate the mental
                models of people. Thus, the design of this icon does not really
                match the real world in a good way. <br></br>
                <b>Possible Solutions:</b> Redesign the nitro icon. For
                instance, acceleration is a concept that can be more easily
                expressed and understood and is related to the nitrogen engine.
                Thus, a “boosting” icon is better.
              </Card.Text>
              <Card.Title id="userControl">
                <p>User Control & Freedom</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The player is allowed to return to previous
                pages when navigating the user interface of the game or exiting
                the game. If the player wants to exit the game in the middle,
                they can either press ESC or click on the three-dot symbol on
                the top left to pause the game, then, the player can freely
                choose to return to the main menu or perform other tasks. In
                each window, including the kart/map selection, difficulty
                selection, and setting windows, the player can return to the
                previous window similarly. If the players choose the kart, map,
                or difficulty wrongly, they can always leave the game and choose
                again. In words, players can safely navigate any components and
                do not worry about getting stuck somewhere, unintentionally or
                not.
                <br></br>
                <b>Negative:</b> The game needs more game modes to satisfy the
                different needs of the players to make the most advantages of
                the game. For instance, it is inconvenient for players to
                practice repeatedly since they have to re-enter the game again
                and again (now, players can only be removed from the race if
                they complete it); it would be better if they are allowed to
                stay in the game and continue practicing. Players cannot
                customize or upgrade the karts to personalize the game. Even
                though it is a method that prevents players from altering values
                in unreasonable ways, the freedom and control of the game are
                also deprived.<br></br>
                <b> Possible Solutions:</b> Add a “Practice Mode”, where players
                can run endlessly; there will be no countdown to interrupt the
                game; players are allowed to stay all the time unless they want
                to quit themselves. Allow players to alter the values of the
                karts, but only in reasonable ranges.
              </Card.Text>
              <Card.Title id="consistencyStand">
                <p>Consistency and Standards</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The game design follows both internal and
                external consistency to prevent making players confused. For
                internal consistency, all the texts and images are in pixel art
                so that they do not interfere with each other when put together:
                the harmonious combination of elements makes players enjoyable
                and believe that what they are playing is a complete and united
                game.<br></br>The game maintains high external consistency by
                applying common practices in racing games: There are two common
                ways to move an object (like a kart): either WSAD or arrow keys;
                the game accepts both ways of control so that players can choose
                as they like without learning any new things. SPACE is used to
                release nitrogen; players can guess this if they have played
                other racing games before without any tutorial.<br></br>
                <b>Negative:</b>The texts used on buttons are not consistent in
                some places: “Back” could mean both “return to the previous page
                (when in the difficulty selection page)” and “return to the main
                menu (when in the pause menu)”. Such inconsistency will cause
                confusion and errors. Moreover, the feedback on clickable items
                is not consistent: normally, clickable items will change color
                when the mouse is on them; however, on the selection page, the
                up/down triangular buttons do not have such feedback to indicate
                they are clickable.<br></br>
                <b>Possiblr Solutions:</b>Use “Back to the Main menu” and “Back”
                to distinguish two different actions. Make the up/down buttons
                change color.
              </Card.Text>
              <Card.Title id="errorPrevent">
                <p>Error Prevention</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The game tries to prevent errors from happening
                or solve the existing errors if the player is unfamiliar with
                the game. For the keyboard player, a common mistake is pressing
                the wrong key (or forgetting the right key to click) when
                performing some actions. In the game, the player will
                occasionally use nitrogen to boost the kart’s speed: if they
                press the wrong key, they fail to accelerate the kart, and it is
                even more critical if their time is about to run out; players
                may also feel ashamed for the wrong operation and get
                distracted, which lead to more errors. Therefore, once players
                have a nitrogen engine to use, there will be a blinking line of
                text that reminds them of the correct key to press: “Press SPACE
                to boost the kart.”<br></br>Each map of the game is designed to
                prohibit players from getting too far away from the track by
                using the fence (a kind of uncrossable wall with a very deep
                color). This is even more critical when the player uses the
                nitrogen engine in the wrong direction or time, which makes the
                kart rush out of the track fast. Therefore, the game can stop
                players’ unintentional (or intentional) actions in time by
                setting the boundaries of their movements.<br></br>
                <b>Negative:</b>
                Selective attention shows that players cannot notice other
                things if they are concentrating on a certain task: driving the
                kart; thus, it is difficult for them to notice the time. If they
                pay no attention to the time, they will likely make mistakes
                because of optimism, especially when there are no visible
                changes that make the time salient.<br></br>Players are likely
                to make mistakes if they are not told about their final
                decisions on the kart and the map (they may forget what their
                choices are or accidentally choose the wrong thing). If they are
                not told, they will only notice it when in the game.<br></br>The
                game does not have the settings for key bindings, which leads to
                potential operational errors since players have different
                habits. They will likely remember things wrong if they are
                forced to use the default key bindings.<br></br>
                <b>Possible Solutions:</b>Add sound effects and color changes to
                indicate the running-out time; display the final decision and
                the corresponding confirmation window; develop the functionality
                of re-binding the keys.
              </Card.Text>
              <Card.Title id="recognitionRecall">
                <p>Recognition vs. Recall in User Interfaces</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive: </b>The user interface includes many cues that help
                players remember the functionality and reduce the workload. When
                the player navigates through the pages, if they want to return
                to the previous page, they can simply press ESC. However, a
                button with “Back” is also provided to perform the similar task
                in case when the player has to recall which key to press.
                Moreover, the color system in the game is designed to be easily
                recognized: blue indicates intractability (the player can
                perform some tasks based on these statuses), including the
                draggable steel wheel and the usable nitrogen engine. Red, on
                the other hand, contrasts with blue, which shows that the player
                has successfully interacted with the object. For instance, the
                button on the steel wheel will turn red when dragged by the
                player: this kind of feedback can let the player perceive the
                current status of the game and perform correct actions later.
                <br></br>
                <b>Negative:</b>The mini version of the full map is not shown
                during the game, which forces players to remember some specific
                locations to respond strategically. For instance, players have
                to memorize certain locations that have barriers to avoid them.
                This will frustrate the players who play the map for the first
                time and make it harder to succeed unnecessarily.<br></br>
                <b>Possible Solutions:</b>Display a small map that marks all the
                important locations on the right side of the screen (can also
                only focus on a part of the map that includes the current
                location).
              </Card.Text>
              <Card.Title id="flexibilityEfficien">
                <p>Flexibility and Efficiency of Use</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> The game uses some accelerators to speed up the
                interactions between veterans and the user interface. For
                instance, ESC is a shortcut to pause the current game or return
                to the previous page.<br></br>The game has enough flexibility
                that enables different groups of players to select the way they
                prefer to proceed with the game. For absolute newcomers that are
                either familiar with the racing games or not, they can choose
                “Tutorial Mode” before starting a game to learn the basic
                operations. If they are confident, they can simply read the text
                and exit the tutorial; if they want more practice, there is a
                special map designed for them to learn all the functionalities
                in the game by playing. Certainly, a confident player might just
                overlook the tutorial and jump right into the game.<br></br>The
                game has three difficulties that are suitable for people ranging
                from novices to veterans. The players are allowed to choose the
                difficulties based on their needs and abilities and enjoy the
                game to the most extent.<br></br>
                <b>Negative:</b> The game seems to have the flexibility to allow
                players to achieve certain tasks in multiple ways; however, some
                ways are inefficient and not supported enough. For instance, the
                mouse control is much harder than the keyboard control, even for
                those players that prefer the mouse control. Players using the
                mouse are harder to get higher marks; therefore, they will
                abandon the mouse control.<br></br>
                <b>Possible Solutions: </b> Balance the difficulty of using the
                mouse and the keyboard. Simplify the mouse control in some ways,
                like turning more easily. If doing this, then the player must
                specify which way of control to use before the game (they cannot
                combine the use of the mouse and the keyboard).
              </Card.Text>
              <Card.Title id="aestheticMini">
                <p>Aesthetic and Minimalist Design</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive:</b> Several main components, including the main
                menu, the selection windows, and the game user interface, all
                apply the minimalist design that prohibits adding too much
                irrelevant stuff. Compared to the original game, the options in
                the main menu are reduced to only three: only essential options
                are preserved, like racing mode, tutorial mode, and setting.
                Since very few people want to see Credit (information about the
                game) when they enter for the first time, we move Credit to a
                not salient corner, trying to reach a higher signal-to-noise
                ratio.<br></br>The game UI uses skeuomorphism to mimic the
                physical objects in the real world and the interactions related
                to them. However, it is not like pure copy-and-paste: the game
                only preserves necessary components and information when driving
                a car, including the steel wheel and the speedometer. The
                digital speedometer is also simplified, with only the movable
                pointer and the number that indicates the speed. By only
                presenting important information and reducing decoration (or
                unnecessary details), the player can better perceive the
                reactions of the game and act accordingly.<br></br>
                <b>Negative:</b> The game user interface is not minimal enough
                for players who are already familiar with the game. For
                instance, the speedometer, the text of the remaining time, and
                even the steel wheel can be removed so that players can fully
                enjoy the background: these elements serve for the strategy
                adoption and the visibility of the status. If the players are
                really familiar with the map, these things might be a burden.
                <br></br>
                <b>Possible Solutions:</b> Provide players with the option to
                turn off the user interface element on the advanced setting
                page. Add the accelerators (some keys) to turn off (or on) these
                elements rapidly during the game.
              </Card.Text>
              <Card.Title id="helpUserRecognize">
                <p>Help Users Recognize, Diagnose and Recover from Errors</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive: </b>When players do not perform well, the game will
                inform them in several ways. If players are out of the track,
                the kart will slow down or immediately stop, forcing them to
                return to the track.<br></br>The new players might be unfamiliar
                with the user interface and functionality. They may accidentally
                enter some pages. The game offers the undo option on each page:
                by pressing ESC or clicking on the “Back” button to return to
                the previous page. In this case, players can easily recover from
                errors and not feel punished.<br></br>
                <b>Negative:</b> Players cannot restart the game if they think
                they do not perform well during the game. To restart the game,
                they have to exit and re-enter, which is inefficient. Moreover,
                if players want to practice more on a part of the map, and when
                they make mistakes, they are not allowed to rewind to get rid of
                the outside land (where the karts go slow).<br></br>There is no
                error message, not to mention any recovery suggestion messages
                displayed when players encounter system errors like bad
                connections. It may cause confusion and frustration that destroy
                the user experience.<br></br>
                <b>Possible Solutions:</b> Let players restart through the pause
                menu or some accelerators (pressing “R”); Display error messages
                and diagnose the reason if the connection fails.
              </Card.Text>
              <Card.Title id="helpDocumentation">
                <p>Help & Documentation</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                <b>Positive: </b>The game provides help in many different forms.
                Firstly, it provides a comprehensive tutorial in text form,
                which is easy to search since it is accessible from the main
                menu (just need to click on “Tutorial mode”). The tutorial
                provided also focuses on the user’s task since it allows the
                user to learn things through playing: the game first introduces
                the basic operations (how to make the kart move) to let players
                focus on moving the kart. Then, when players hit something new,
                the tutorial will introduce this new feature in this specific
                context so that players can better know what consequences are
                caused by their actions. For instance, when players hit a fence
                (an uncrossable area), the kart immediately stops, then the
                tutorial introduces the fence, which is a kind of area the
                player should avoid.<br></br>The tutorial in text form provides
                help in a progressive manner (in several steps), ordered in the
                importance of the functionality. It first specifies how the
                player moves the kart (through the keyboard or the mouse); then,
                it talks about other actions the player can perform, including
                using the nitrogen engines.<br></br>
                <b>Negative:</b> There is no guidance when players encounter
                system failures that hinder the game’s progress. Moreover, there
                is not enough tutorial on the mouse control mode (which is a
                harder way to control). There are also no strategic suggestions
                on how to succeed in the game: players may know the
                functionalities, but they could be unaware of the strategies and
                features in the game, which construct the basic gameplay.
                <br></br>
                <b>Possible Solutions:</b> Develop the error detection,
                analysis, and report system; Design a Q&A session where common
                questions and strategies are listed to guide players to become
                experts.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-4">
            <Card.Body>
              <Card.Title id="section3">Thoughtful recommendations</Card.Title>
              <Card.Title id="asp">
                <p>Advanced Setting Page</p>
              </Card.Title>
              <Card.Text className="text-justify">
                {" "}
                To increase user control and freedom, the list of settings is
                expanded to allow players to customize their games to a larger
                extent. The new settings page consists of three parts: audio,
                video, and control. The audio part opens/closes the sound
                effects and the background music; the video part toggles the
                full screen and displays/hides the user interface component
                based on the needs of the player (according to the minimalist
                evaluation, experts may want to hide a part of the user
                interface). The control part allows players to view all the
                actions and their corresponding key bindings; at the same time,
                players can alter the key bindings of each action to meet their
                habits. This is an error-prevention technique to prevent players
                from pressing the wrong keys.<br></br>All the choices will be
                memorized (stored as an external file) so that players do not
                need to set all the things again each time they enter the game,
                which increases the efficiency of the user tasks.
              </Card.Text>
              <Card.Title id="gs">
                <p>Garage System</p>
              </Card.Title>
              <Card.Text className="text-justify">
                Players can use collectable tools to upgrade their karts’
                attribute values to obtain improved performance. The upgrading
                is restricted to limited ranges, which means that the karts will
                reach their maximum status and are unable to continue upgrading.
                In the garage system, players may also personalize the
                decorations of the karts by using other cartoon figures or color
                combinations.<br></br>Accordingly, there will be more
                challenging maps since players are allowed to have upgraded
                karts. To comply with the evaluation of the user control and the
                error recovery, players can undo any upgrades of the karts since
                it may sacrifice some other attributes.{" "}
              </Card.Text>
              <Card.Title id="vc">
                <p>Virtual Community</p>
              </Card.Title>
              <Card.Text className="text-justify">
                The virtual community can be accessed through the link or within
                the game, which contains all the questions asked previously to
                help players solve the problems that are either related to the
                system errors or the strategic adoption. Moreover, some
                potential or hard-to-discover features and techniques can be
                shared and taught to improve other players’ game experiences.
                <br></br>Reasonable labeling or categorizing the type of
                questions is also necessary to increase the efficiency of use
                since players can locate and find the answers more easily.{" "}
              </Card.Text>
              <Card.Title id="mgm">
                <p>More Game Modes</p>
              </Card.Title>
              <Card.Text className="text-justify">
                To expand user flexibility, more game modes are added for
                different purposes. For instance, the “practice mode” is used to
                practice certain maps without any countdown. Artificial
                Intelligence can be applied to the game to expand the user goal:
                it can also be challenging for expert players that are familiar
                with the maps since the highest-difficulty AI tends to choose
                the shortest path and has decent performance.{" "}
              </Card.Text>
              <Card.Title id="gui">
                <p>Improvement on the Game User Interface</p>
              </Card.Title>
              <Card.Text className="text-justify">
                To comply with the Recognition vs. Recall heuristics evaluation,
                a small map that shows a part of the map with the current
                location will be displayed on the right side of the screen so
                that players can pay attention to certain locations that have
                barriers or accelerators.<br></br>To prevent errors, after
                selecting the kart and the map, a confirmation window will show
                up before the player enters the game to make sure that the
                decision is correct. Players can close it if they don’t need it.
                <br></br>The text on the buttons will be modified to be
                consistent.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
