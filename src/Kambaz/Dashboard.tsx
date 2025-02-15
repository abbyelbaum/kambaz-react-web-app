import { Button, Card, Col, Row } from "react-bootstrap";
import * as db from "./Database"
import { Link } from "react-router-dom";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{width: "300px"}}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160} />
                  <Card.Body>
                    <Card.Title className="wd-dashbaord-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                      {course.description}</Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
