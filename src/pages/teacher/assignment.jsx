import { Col, Row } from "react-bootstrap"
const Assignment = () => {
    return (<>
        <Row className="border p-3 mt-4">
            <Col xs={12}>
                <p className="text-muted">Assignment title</p>
                <p className="">Sockect Programming.</p>
            </Col>
            <Col md={10} xs={8}>
                <p className="text-muted">Description</p>
                <p className="">Write 10 java programs.</p>
            </Col>
            <Col>
                <p className="text-muted text-right">Last time to submit</p>
                <p>11.59pm : 31-8-2021</p>
            </Col>
        </Row>
    </>)
}
export default Assignment;
