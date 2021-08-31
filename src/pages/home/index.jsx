import Navbar from "../../components/navbar";
import React, { useState, useEffect } from "react";
import { CardImg, ClassCard, Header } from "./styled";
import { Button, Col, Row, Card } from "react-bootstrap";
import { IoCreateSharp } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import CreateClass from "./createClass";
import JoinClass from "./joinClass";
import { useHistory } from "react-router-dom";
import { ApiGetService } from "../../api/api_services";

const images = ["1.jfif", "2.jpg", "3.jfif", "4.jpg"];
const index = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => {
    let history = useHistory();
    if (
        !localStorage.getItem("isCRLogged") ||
        localStorage.getItem("isCRLogged") === "false"
    ) {
        history.push("/signing");
    }
    const [createModal, setCreateModal] = useState(false);
    const [joinModal, setJoinModal] = useState(false);
    const [teachClass, setTeachClass] = useState([]);
    const [student, setStudent] = useState([]);

    function getImage() {
        let res = Math.floor(Math.random() * 10 + 1) % 4;
        let result = "images/" + images[res];
        return result;
    }
    useEffect(() => {
        const getData = async () => {
            let teach = await ApiGetService(
                process.env.REACT_APP_DASHBOARD,
                true
            );
            let stu = await ApiGetService(
                process.env.REACT_APP_DASHBOARD,
                true
            );
            setTeachClass(teach.data.class_rooms);
            setStudent(stu.data.subjects);
        };
        getData();
    }, []);
    return (
        <>
            <Navbar />
            <Header className="px-3 py-4">
                <h2>Classrooms</h2>
                <div>
                    <Button
                        variant="outline-success mx-4"
                        onClick={() => setCreateModal(true)}
                    >
                        <IoCreateSharp size={20} className="mx-2" />
                        Create{" "}
                        <span className="d-none d-lg-inline">Classroom</span>
                    </Button>
                    <Button
                        variant="outline-warning"
                        onClick={() => setJoinModal(true)}
                    >
                        <AiOutlineUsergroupAdd size={20} className="mx-2" />
                        Join{" "}
                        <span className="d-none d-lg-inline">Classroom</span>
                    </Button>
                </div>
            </Header>
            <Row className="m-1 m-lg-4">
                {student.length !== 0 && (
                    <h5 className="m-2">Enrolled Classes</h5>
                )}
                {student.map((e) => (
                    <Col lg={3} xs={6} md={4} className="p-1 p-md-5">
                        <ClassCard>
                            <CardImg variant="top " src={e.image} alt="..." />
                            <Card.Body className="text-center">
                                <p>{e.subject_name}</p>
                                <p>SENTHINAYAGI POINT</p>
                                <p>21 STUDENTS</p>
                            </Card.Body>
                        </ClassCard>
                    </Col>
                ))}
            </Row>
            <Row className="m-2 m-lg-4">
                {teachClass.length !== 0 && (
                    <h5 className="m-2">Teaching Classes</h5>
                )}

                {teachClass.map((e) => (
                    <Col lg={3} xs={6} md={4} className="p-1 p-md-5">
                        <ClassCard>
                            <CardImg variant="top " src={e.image} alt="..." />
                            <Card.Body className="text-center">
                                <p>{e.subject_name}</p>
                                <p>SENTHINAYAGI POINT</p>
                                <p>21 STUDENTS</p>
                            </Card.Body>
                        </ClassCard>
                    </Col>
                ))}
            </Row>
            <CreateClass show={createModal} setShow={setCreateModal} />
            <JoinClass show={joinModal} setShow={setJoinModal} />
        </>
    );
};
export default Home;
