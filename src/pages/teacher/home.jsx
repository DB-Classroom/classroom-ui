import { Button, Col, Image, Row } from "react-bootstrap"

const Home = () => {
    return (
        <>
            <Image fluid src="images/board1.jpg" alt="." />
            <div className="d-flex justify-content-end m-2 mt-4">
                <Button>Post Assignment</Button>
            </div>
            <Row>
                <Col xs={12}>Assignment Name</Col>
                <Col>
                    <p className="text-muted">Description</p>
                    <p className="">Write 10 java programs.</p>
                </Col>
                <Col>
                    <p className="text-muted">Last time to submit</p>
                    <p>31-8-2021</p>
                </Col>
            </Row>
        </>
    )
}
export default Home;
