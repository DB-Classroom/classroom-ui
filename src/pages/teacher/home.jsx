import { Button, Col, Form, Row } from "react-bootstrap"
const sam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Home = () => {
    return (
        <>
            <h3>
                Blockchain Technology
            </h3>
            <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Invite Students</Form.Label>
                    <Form.Control className="w-25" type="text" readonly value="12345" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEm">
                    <Form.Label>Subject Name</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="Enter student email" />
                    <Button variant="outline-warning my-2">Invite</Button>
                </Form.Group>
            </div>
            <h4>
                Enrolled Students
            </h4>
            <Row>
                {sam.map(e => (
                    <Col xs={1} key={e} className="mt-2 p-2 m-2">
                        <Button variant="outline-dark">Yuvi</Button>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Home;
