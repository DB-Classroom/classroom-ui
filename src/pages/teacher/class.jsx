import { useState } from "react"
import { Button, Col, Row, Modal, Form } from "react-bootstrap"
import { Cards } from "./styled"

const Class = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="row">
                <h4 className="col">Upcomming Classes</h4>
                <Button variant="outline-primary" className="col-2" onClick={() => setShow(true)}>Schedule class</Button>
                <Modal
                    show={show}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Schedule meeting
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="formBasictitle">
                            <Form.Label>Meeting Title</Form.Label>
                            <Form.Control type="text" placeholder="Subject Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicdate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicstart">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicEnd">
                                    <Form.Label>End Time</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button variant="warning  px-5" onClick={() => setShow(false)}>Create</Button>
                        <Button variant="outline-danger px-5 mx-2" onClick={() => setShow(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {
                false &&
                <div className="text-center">
                    Their is no scheduled Classes
                </div>
            }
            <Row>
                <Col xs={6} lg={4}>
                    <Cards className="p-3 mt-3 text-center">
                        <Cards.Title>Introduction</Cards.Title>
                        <p>Start time : 10.30</p>
                        <p>End time : 11.25</p>
                    </Cards>
                </Col>
                <Col xs={6} lg={4}>
                    <Cards className="p-3 mt-3 text-center">
                        <Cards.Title>Introduction</Cards.Title>
                        <p>Start time : 10.30</p>
                        <p>End time : 11.25</p>
                    </Cards>
                </Col>
                <Col xs={6} lg={4}>
                    <Cards className="p-3 mt-3 text-center">
                        <Cards.Title>Introduction</Cards.Title>
                        <p>Start time : 10.30</p>
                        <p>End time : 11.25</p>
                    </Cards>
                </Col>
            </Row>
        </>
    )
}
export default Class