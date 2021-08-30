import { Modal } from "react-bootstrap";
import OTPVerification from "./OTPVerification";


const OtpModal = ({show, setShow, otp, email}) =>{
    return(
            <Modal
                show={show}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className="justify-content-center">
                    <OTPVerification oneTimePass={otp} eMail={email} />
                </Modal.Body>
            </Modal>
    )
}

export default OtpModal;