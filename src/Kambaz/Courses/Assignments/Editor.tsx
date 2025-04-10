import { Col, Form, Row, Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const{ cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const existingAssignment = assignments.find((a: any) =>a._id === aid && a.course === cid);
    const [newAssignment, setNewAssignment] = useState({
        _id: existingAssignment?._id,
        title: existingAssignment?.title,
        description: existingAssignment?.description,
        points: existingAssignment?.points,
        dueDate: existingAssignment?.dueDate,
        availableFrom: existingAssignment?.availableFrom,
        availableUntil: existingAssignment?.availableTo,
        course: cid,
      });
    
      const handleChange = (e: any) => {
        setNewAssignment({ ...newAssignment, [e.target.id]: e.target.value });
      };

      const handleSave = async () => {
        if (existingAssignment) {
            await assignmentsClient.updateAssignment(newAssignment);
            dispatch(updateAssignment(newAssignment));
        } else {
            const assignment = await coursesClient.createAssignmentForCourse(cid!, newAssignment);
            dispatch(addAssignment(assignment));
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments`);
      };

    return ( 
    <div id="wd-assignments-editor" className="container mt-4">
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={5}>Assignment Name</Form.Label>
                <Col sm={12}>
                        <Form.Control type="text" id="title" defaultValue={newAssignment.title} onChange={handleChange}/>
                </Col>
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" id="description"
                            value={newAssignment.description} onChange={handleChange}/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4} className="text-end">Points</Form.Label>
                <Col sm={8}>
                    <Form.Control type="number" id="points" defaultValue={newAssignment.points} 
                        onChange={handleChange}/>
                </Col>
            </Form.Group>
            <Row className="mb-3">
                <Col sm={8}>
                    <Card className="p-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Due</Form.Label>
                            <Form.Control type="date" id="dueDate" defaultValue={newAssignment.dueDate} 
                        onChange={handleChange} />
                        </Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control type="date" id="availableFrom" defaultValue={newAssignment.availableFrom} 
                        onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control type="date" id="availableUntil" defaultValue={newAssignment.availableUntil} 
                        onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            
            <hr />
            
            <div className="text-end">
            <Button variant="secondary" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>Save</Button>
            </div>
        </Form>
    </div>
);}
