import { Modal, Button, Form } from 'react-bootstrap'
function CreateClass({ show, setShow }) {
    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Classroom
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject Name</Form.Label>
                    <Form.Control type="text" placeholder="Subject Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="file" placeholder="Subject Name" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="warning  px-5" onClick={() => setShow(false)}>Create</Button>
                <Button variant="outline-danger px-5 mx-2" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateClass;