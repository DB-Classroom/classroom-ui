import { Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color"

const Signup = ({ toggle }) => {

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Signup</h1>
                <Form.Group className="mb-3 mt-5 row" controlId="formBasicFn">
                    <FormControl className="px-3 mx-2 col" type="text" placeholder="First Name" required />
                    <FormControl className="px-3 col" type="text" placeholder="Last Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormControl className="px-3" type="email" placeholder="Email address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPwd">
                    <FormControl type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCpwd">
                    <FormControl type="password" placeholder="Confirm password" required />
                </Form.Group>

                <SubmitBtn className="form-control mt-4" type="submit">Signup</SubmitBtn>

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
                <button style={{ color: Bred, border: 'none', background: 'none' }} onClick={() => toggle(true)}>
                    <span className="text-muted">Already have an account ? </span>Log in
                </button>
            </div>
        </>
    )
}
export default Signup;