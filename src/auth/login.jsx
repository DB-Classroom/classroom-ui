import { Col, Row, Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color"

const Login = ({ toggle }) => {

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Login</h1>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <FormControl className="px-3" type="email" placeholder=" Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormControl type="password" placeholder="Enter password" required />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Check
                            type="checkbox"
                            id="Remember me"
                            label="Remember Me"
                        />
                    </Col>
                    <Col>
                        Forgot Password
                    </Col>
                </Row>
                <SubmitBtn className="form-control mt-4" type="submit">Login</SubmitBtn>

            </FormTag>

            <div className="d-flex justify-content-center mt-5">
                <GLogin
                    className=""
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Sign in with"
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button style={{ color: Bred, border: 'none', background: 'none' }} onClick={() => toggle(false)}>
                    <span className="text-muted">Don't have an account ? </span>Sign up
                </button>
            </div>
        </>
    )
}
export default Login;