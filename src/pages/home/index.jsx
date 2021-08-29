import Navbar from "../../components/navbar"
import React from 'react';
import { ClassCard, Header } from './styled'
import { Button, Col, Row, Card } from "react-bootstrap";
import { IoCreateSharp } from 'react-icons/io5'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'

const images = ['1.jfif', '2.jpg', '3.jfif', '4.jpg']

const Home = () => {
    function getImage() {
        let res = Math.floor((Math.random() * 10) + 1) % 4;
        let result = "images/" + images[res];
        return result;
    }
    return (
        <>
            <Navbar />
            <Header className="p-4">
                <h2>Classrooms</h2>
                <div >
                    <Button variant="outline-success mx-4"><IoCreateSharp size={20} className="mx-2" />Create <span className="d-none d-lg-inline">Classroom</span></Button>
                    <Button variant="outline-warning"><AiOutlineUsergroupAdd size={20} className="mx-2" />Join <span className="d-none d-lg-inline">Classroom</span></Button>
                </div>
            </Header>
            <Row className="p-2 p-lg-4">
                <Col lg={4} xs={6} className="p-5">
                    <ClassCard>
                        <Card.Img variant="top p-5" src={getImage()} alt="..." height="300" />
                        <Card.Body className="text-center">
                            <Card.Title>CA5401</Card.Title>
                            <Card.Text>
                                JAVA PROGRAMMING
                            </Card.Text>
                            <Card.Text>
                                SENTHINAYAGI POINT
                            </Card.Text>
                            <Card.Text>
                                21 STUDENTS
                            </Card.Text>
                        </Card.Body>
                    </ClassCard>
                </Col>
                <Col lg={4} xs={6} className="p-5">
                    <ClassCard>
                        <Card.Img variant="top p-5" src={getImage()} alt="..." height="300" />
                        <Card.Body className="text-center">
                            <Card.Title>CA5401</Card.Title>
                            <Card.Text>
                                Unix
                            </Card.Text>
                            <Card.Text>
                                SENTHINAYAGI POINT
                            </Card.Text>
                            <Card.Text>
                                21 STUDENTS
                            </Card.Text>
                        </Card.Body>
                    </ClassCard>
                </Col>
                <Col lg={4} xs={6} className="p-5">
                    <ClassCard>
                        <Card.Img variant="top p-5" src={getImage()} alt="..." height="300" />
                        <Card.Body className="text-center">
                            <Card.Title>CA5401</Card.Title>
                            <Card.Text>
                                Web PROGRAMMING
                            </Card.Text>
                            <Card.Text>
                                SENTHINAYAGI POINT
                            </Card.Text>
                            <Card.Text>
                                21 STUDENTS
                            </Card.Text>
                        </Card.Body>
                    </ClassCard>
                </Col>
            </Row>
        </>
    )
}
export default Home;