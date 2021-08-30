import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
function JoinClass({ show, setShow }) {
    const [code, setCode] = useState('')
    const [detail, setDetail] = useState(false)
    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Join Classroom
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject Code</Form.Label>
                    <Form.Control type="text" placeholder="Subject Code" value={code} onChange={(e) => {
                        if (e.target.value.length <= 6) setCode(e.target.value)
                        if (e.target.value.length === 6) {
                            setDetail(true)
                        } else {
                            setDetail(false)
                        }
                    }} />
                </Form.Group>
                {detail &&
                    <>
                        <p>Java programming</p>
                        <p>Senthinayagi</p>
                        <p>21 students</p>
                    </>
                }
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <span>
                    <Button variant="warning px-5 mx-2" onClick={() => setShow(false)}>Join</Button>
                    <Button variant="outline-danger px-5 mx-2" onClick={() => setShow(false)}>Close</Button>
                </span>
            </Modal.Footer>
        </Modal>
    );
}

export default JoinClass;