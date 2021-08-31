import React, { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color";
import { ApiPostService } from "../api/api_services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import OtpModal from "./OtpModal";

let otp;

const Login = ({ toggle }) => {
    let history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const [data, setData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const login = async () => {
        if (data.email === "" || data.pass === "") {
            toast.error("All fields are required!", {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (data.password.length < 5) {
            toast.error("Invaild Email / Password. Try again", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        let a = await ApiPostService(process.env.REACT_APP_LOGIN, {
            email: data.email,
            password: data.password,
        });
        if (!a.success) {
            toast.error(a.errors.description, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } else {
            let name=a.tokens.data.first_name+" "+a.tokens.data.last_name
            localStorage.setItem("user_name", name)
            localStorage.setItem("user_email", a.tokens.data.email)
            localStorage.setItem("isCRLogged", true);
            localStorage.setItem("access_token", a.tokens.access_token);
            localStorage.setItem("refresh", a.tokens.refresh);
            if (!a.is_verified) {
                otp = a.otp;
                setShowModal(true);
            } else {
                history.replace("/");
            }
        }
    };
    const google_login = async (e) => {
        let op = await ApiPostService(process.env.REACT_APP_GOOGLE_LOGIN, {
            auth_token: e.tokenId,
        });
        if (!op.success) {
            console.log(op.errors.auth_token[0]);
            toast.error(op.errors.auth_token[0], {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            let name=op.tokens.data.first_name+" "+op.tokens.data.last_name
            localStorage.setItem("user_name", name)
            localStorage.setItem("user_email", op.tokens.data.email)
            localStorage.setItem("isCRLogged", true);
            localStorage.setItem("access_token", op.tokens.access_token);
            localStorage.setItem("refresh", op.tokens.refresh);
            history.replace("/");
        }
    };

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Login</h1>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <FormControl
                        className="px-3"
                        type="email"
                        placeholder=" Enter email"
                        required
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPwd">
                    <FormControl
                        type="password"
                        placeholder="Enter password"
                        required
                        value={data.password}
                        onChange={handleChange}
                        name="password"
                        autoComplete="off"
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Check
                            type="checkbox"
                            id="Remember me"
                            label="Remember Me"
                        />
                    </Col>
                    <Col>Forgot Password</Col>
                </Row>
                <SubmitBtn
                    className="form-control mt-4"
                    onClick={login}
                    type="button"
                >
                    Login
                </SubmitBtn>
            </FormTag>

            <div className="d-flex justify-content-center mt-5">
                <GLogin
                    className=""
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    cookiePolicy={"single_host_origin"}
                    onSuccess={google_login}
                />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button
                    style={{ color: Bred, border: "none", background: "none" }}
                    onClick={() => toggle(false)}
                >
                    <span className="text-muted">Don't have an account ? </span>
                    Sign up
                </button>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
            <OtpModal
                show={showModal}
                setShow={setShowModal}
                otp={otp}
                email={data.email}
            />
        </>
    );
};
export default Login;
