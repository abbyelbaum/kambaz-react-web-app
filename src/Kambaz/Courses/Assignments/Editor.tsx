import { Button, Col, Form, FormSelect, Row, Card } from "react-bootstrap";

export default function AssignmentEditor() {
    return ( 
    <div id="wd-assignments-editor" className="container mt-4">
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={5}>Assignment Name</Form.Label>
                <Col sm={12}>
                        <Form.Control type="text" id="wd-name" defaultValue="A1" />
                </Col>
            </Form.Group> 
            <Form.Group className="mb-3">
                        <div 
                    id="wd-description" 
                    contentEditable 
                    className="form-control" 
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    The assignment is <span className="text-danger">available online</span><br/><br/>
                    Submit a link to the landing page of your Web application running on Netlify.<br/><br/>
                    The Landing page should include the following:<br/><br/>
                    <ul>
                        <li>Your full name and section</li>
                        <li>Links to each of the lab assignments</li>
                        <li>Link to the Kambas application</li>
                        <li>Linsk to all relevant source code repositories</li>
                    </ul>
                    The Kambas application should include a link to navigate back to the landing page.
                    
                </div>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4} className="text-end">Points</Form.Label>
                <Col sm={8}>
                    <Form.Control type="number" id="points" defaultValue={100} />
                </Col>
            </Form.Group>
        
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4} htmlFor="assignment-group" className="text-end">
                    Assignment Group </Form.Label>
                <Col sm={8}>
                    <FormSelect id="assignment-group">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </FormSelect>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4} htmlFor="wd-display-grade-as" className="text-end">
                    Display Grade as</Form.Label>
                <Col sm={8}>
                    <FormSelect id="wd-display-grade-as">
                        <option selected value="PERCENTAGE">Percentage</option>
                        <option value="POINTS">Points</option>
                    </FormSelect>
                </Col>
            </Form.Group>

            <Row className="mb-3">
                <Col sm={4} className="text-end">
                    <Form.Label>Submission Type</Form.Label>
                </Col>
                <Col sm={8}>
                    <Card className="p-3">
                        <FormSelect id="wd-submission-type" defaultValue="ONLINE">
                            <option value="ONLINE">Online</option>
                        </FormSelect>
                        <Form.Label className="mt-2">Online Entry Options</Form.Label>
                        <div className="ms-3">
                            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
                            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
                        </div>
                    </Card>
                </Col>
            </Row>
            
            <Row className="mb-3">
                <Col sm={4} className="text-end">
                    <Form.Label>Assign</Form.Label>
                </Col>
                <Col sm={8}>
                    <Card className="p-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Assign to</Form.Label>
                            <Form.Control type="text" id="wd-assign-to" defaultValue="Everyone" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Due</Form.Label>
                            <Form.Control type="date" id="wd-due-date" defaultValue="2024-05-13" />
                        </Form.Group>
                        <Row>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Available from</Form.Label>
                                    <Form.Control type="date" id="wd-available-from" defaultValue="2024-05-06" />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group>
                                    <Form.Label>Until</Form.Label>
                                    <Form.Control type="date" id="wd-available-until" defaultValue="2024-05-20" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            
            <hr />
            
            <div className="text-end">
                <Button variant="secondary" id="wd-cancel" className="me-2">Cancel</Button>
                <Button variant="danger" id="wd-save">Save</Button>
            </div>
        </Form>
    </div>
);}
