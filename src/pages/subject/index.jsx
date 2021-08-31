import { Container, Row, Col, Button } from 'react-bootstrap'
import Navbar from '../../components/navbar'
import { Cards } from './styled'
const sam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Subject = () => {
    return (
        <>
            <Navbar />
            <Container className="mt-4">
                <h3>Java Programming</h3>
                <Row className="mt-5">
                    <Col xs={7} md={9}>
                        <p><span className="h5">Staff :</span> Point mani</p>
                    </Col>
                    <Col>
                        <p><span className="h5">Number of students :</span> 21</p>
                    </Col>
                </Row>
                <h5 className="mt-3">Students list :</h5>
                <Row className="mt-2 justify-content-center justify-content-md-start justify-content-lg-start">
                    {sam.map(e => (
                        <Col xs={2} md={1} key={e} className="mt-2 p-2 m-2">
                            <Button variant="outline-dark">Yuvi</Button>
                        </Col>
                    ))}
                </Row>
                <h4 className="mt-4">Upcomming Classes</h4>
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
            </Container>
        </>
    )
}

export default Subject;