import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { ApiPostService } from '../../api/api_services';
function JoinClass({ show, setShow }) {
    const [code, setCode] = useState('')
    const [detail, setDetail] = useState(false)
    const [msg, setMsg] = useState("")
    const join =async(e)=>{
        let data={
            "room":code
        }
        let res = await ApiPostService(process.env.REACT_APP_JOIN, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "access_token"
                )}`,
            },
        })
        console.log(res);
        if(res.success){
            setMsg(res.message)
        }
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
                {msg}
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <span>
                    <Button variant="warning px-5 mx-2" onClick={join}>Join</Button>
                    <Button variant="outline-danger px-5 mx-2" onClick={() => setShow(false)}>Close</Button>
                </span>
            </Modal.Footer>
        </Modal>
    );
}

export default JoinClass;