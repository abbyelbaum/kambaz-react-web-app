import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const {pathname} = useLocation();
  const {cid} = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={`/Kambaz/Courses/${cid}/${link}`} as={Link} to={`/Kambaz/Courses/${cid}/${link}`} id="wd-course-home-link"
        className={`list-group-item ${pathname.includes(link) ? "active" : "text-danger"} border border-0`}>{link}</ListGroup.Item>
      ))}
    </div>
  );
}
