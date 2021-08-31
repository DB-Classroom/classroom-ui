import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { ApiPostService } from '../../api/api_services';

const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        resolve(event.target.result)
    };
    reader.readAsDataURL(file);
})

function CreateClass({ show, setShow }) {
    const [sub, setSub] = useState('')
    const [dataUri, setDataUri] = useState('')
    const onChangeImg = (file) => {
        if (!file) {
            setDataUri('');
            return;
        }

        fileToDataUri(file)
            .then(data => {
                setDataUri(data)
            })
    }
    const onSubmit = async () => {
        let payload = {
            "subject_name": sub,
            "image": dataUri
        }
        let res = await ApiPostService('/api/classroom/create/', payload, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "access_token"
                )}`,
            },
        })
        console.log(res)
    }
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
                    <Form.Control type="text" placeholder="Subject Name" value={sub} onChange={e => setSub(e.target.value)} name="subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="file" placeholder="Subject Name" accept="image/*" onChange={e => onChangeImg(e.target.files[0]) || null} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Button variant="warning  px-5" onClick={() => onSubmit()}>Create</Button>
                <Button variant="outline-danger px-5 mx-2" onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateClass;