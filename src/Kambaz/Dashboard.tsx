import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProtectedFacultyRoute from "./ProtectedFacultyRoute";
import ProtectedStudentRoute from "./ProtectedStudentRoute";
import {fetchUserEnrollments} from "./Enrollments/client.ts"
//import { enrollCourse, unenrollCourse } from "./reducer"

export default function Dashboard( { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse, enroll, unenroll, allCourses }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; 
    enroll: (courseId: string) => void;
    unenroll: (courseId: string) => void;
    allCourses: any[]}) {
  const {currentUser} = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  const filteredCourses = showAllCourses
    ? allCourses
    : courses
      ;
      const fetchEnrollments = async () => {
        try {
          const data = await fetchUserEnrollments();
          setEnrolledCourses(data);
        } catch (error) {
          console.error("Error fetching enrollments", error);
        }
      };
      
      // Fetch enrollments on mount
      useEffect(() => {
        fetchEnrollments();
      }, []);
      
      const handleEnroll = async (cid: string) => {
        await enroll(cid);
        fetchEnrollments(); // Refresh the enrollments
      };
      
      const handleUnenroll = async (cid: string) => {
        await unenroll(cid);
        fetchEnrollments(); // Refresh the enrollments
      };

      
      
    
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <ProtectedFacultyRoute>
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3} 
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        <hr />
      </ProtectedFacultyRoute>

      <ProtectedStudentRoute>
        <Button
            variant="primary"
            className="float-end mb-3"
            onClick={() => setShowAllCourses(!showAllCourses)}>
            {showAllCourses ? "Show My Enrolled Courses" : "Show All Courses"}
          </Button>
      </ProtectedStudentRoute>

      
      <h1 id="wd-dashboard-published">Published Courses ({courses.length})</h1><hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course) => (
            <Col className="wd-dashboard-course" style={{width: "300px"}}>
              <Card>
                {enrolledCourses.some((enrolledCourse: any) => enrolledCourse._id === course._id) ? (
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                          className="wd-dashboard-course-link text-decoration-none text-dark">
                      <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160} />
                    </Link>
                  ) : (
                    <Card.Img variant="top" src="/images/reactjs.webp" width="100%" height={160} style={{ filter: "grayscale(100%)" }} />
                  )}
                  <Card.Body>
                    <Card.Title className="wd-dashbaord-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{height: "100px"}}>
                      {course.description}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => navigate(`/Kambaz/Courses/${course._id}/Home`)}
                        disabled={!enrolledCourses.some((enrolledCourse: any) => enrolledCourse._id === course._id)}
                      >
                        Go
                      </Button>

                      <ProtectedStudentRoute>
                      {currentUser && (
                        <Button
                        variant={enrolledCourses.some((enrolledCourse: any) => enrolledCourse._id === course._id) ? "danger" : "success"}
                        className="float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          enrolledCourses.some((enrolledCourse: any) => enrolledCourse._id === course._id)
                            ? handleUnenroll(course._id)
                            : handleEnroll(course._id);
                        }}
                      >
                        {enrolledCourses.some((enrolledCourse: any) => enrolledCourse._id === course._id) ? "Unenroll" : "Enroll"}
                      </Button>
                      
                    )}

                    </ProtectedStudentRoute>
                    <ProtectedFacultyRoute>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">Delete</button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    </ProtectedFacultyRoute>
                  </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
