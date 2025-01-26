import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashbaord-course-title">CS1234 React JS</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/4550/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/webdev.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4550 Web Dev</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Website Development</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/4400/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/pl.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS4400 PL</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Programming Languages</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/2110/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/sportscomm.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">COMM2110 Sports Comm</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Sports Communications</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/3500/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/ood.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3500 OOD</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Object Oriented Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/3650/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/systems.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS3650 Systems</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Computer Systems</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/2800/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/logic.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2800 Logic</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Logic and Computation</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/1210/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/coop.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS1210 Co-op</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Professional Development Co-op</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/2310/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/digdes.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">EECE2310 Digital Design</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Introduction to Digital Design</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/2550/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/fundies.png" width="100%" height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">CS2500 Fundies 1</Card.Title>
                  <Card.Text className="wd-dashboard-course-description">Fundamentals of CS I</Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
