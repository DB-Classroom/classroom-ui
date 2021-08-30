import { useState } from "react"
import { Container, Nav } from "react-bootstrap"
import Navbar from "../../components/navbar"
import Assignment from "./assignment"
import Home from "./home"
import Review from "./review"

const Teacher = () => {
    const [show, setShow] = useState("home")
    return (
        <>
            <Navbar />
            <Nav className="justify-content-center mt-4" activeKey="/home">
                <Nav.Item>
                    <button className="nav-link border-0 bg-light" onClick={() => setShow("home")}>Home</button>
                </Nav.Item>
                <Nav.Item>
                    <button className="nav-link border-0 bg-light" onClick={() => setShow("assignment")}>Assignments</button>
                </Nav.Item>
                <Nav.Item>
                    <button className="nav-link border-0 bg-light" onClick={() => setShow("review")}>Review</button>
                </Nav.Item>
            </Nav>
            <Container>
                {
                    show === "home" && <Home />
                }
                {
                    show === "assignment" && <Assignment />
                }{
                    show === "review" && <Review />
                }
            </Container>
        </>
    )
}
export default Teacher