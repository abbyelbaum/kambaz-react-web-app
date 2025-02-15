import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentModuleControlButtons from "./AssignmentModuleControlButtons";
import AssignmentStartButtons from "./AssignmentStartButtons"
import { useParams } from "react-router";
import * as db from "../../Database"

export default function Assignments() {
  const {cid} = useParams();
  const assignments = db.assignments
    return (
      <div id="wd-assignments">
        <div className="d-flex align-items-center mb-3">
          <InputGroup className="w-50">
            <InputGroup.Text>
            <CiSearch/>
            </InputGroup.Text>
            <FormControl type="text" id="wd-search-assignment" placeholder="Search..."/>
          </InputGroup>
        
          <div className="ms-auto">
          <Button variant="danger" size="sm" className="me-2" id="wd-add-assignment-btn">
            <FaPlus className="me-1" /> Assignment
          </Button>
          <Button variant="secondary" size="sm" id="wd-add-group-btn">
            <FaPlus className="me-1" /> Group
          </Button>
        </div>
      </div>

        <ListGroup className="rounded-0" id="wd-assignments">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3"/> ASSIGNMENTS 
              <AssignmentModuleControlButtons/></div>

              {assignments.filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) =>
                  <ListGroup className="wd-lessons rounded-0">
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                      <AssignmentStartButtons/>
                      <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                        {assignment.title}
                      </a><br />
                      <span className="text-danger small">Multiple Modules</span> | 
                      <span className="fw-bold small"> Not available until</span> <span className="small">May 6 at 12:00am</span>
                      <br />
                      <span className="fw-bold small">Due</span> <span className="small">May 13 at 11:59pm | 100</span>
                      <AssignmentControlButtons/></ListGroup.Item>
                 </ListGroup>
                )
              }
              </ListGroup.Item>
            </ListGroup>
      </div>
  );}
  