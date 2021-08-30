import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color";
import { ApiPostService } from "../api_services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpModal from "./OtpModal";
import { useHistory } from "react-router-dom";

let otp;
const Signup = ({ toggle }) => {
    let history = useHistory();
    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        pass: "",
        cnfrmpass: "",
    });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const signup = async () => {
        if (
            data.fname === "" ||
            data.lname === "" ||
            data.email === "" ||
            data.pass === "" ||
            data.cnfrmpass === ""
        ) {
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
        if(data.pass.length<5 || data.pass.length>15){
            toast.error("Password must contain 5-15 digits!", {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (data.pass !== data.cnfrmpass) {
            toast.error("Password doesn't match!", {
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

        let a = await ApiPostService(process.env.REACT_APP_REGISTER, {
            first_name: data.fname,
            last_name: data.lname,
            email: data.email,
            password: data.pass,
        });
        if (!a.success) {
            toast.error(a.errors.errors[0], {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            console.log(a.errors.errors[0]);
        } else {
            localStorage.setItem("isCRLogged", true);
            localStorage.setItem("access_token", a.tokens.access_token);
            localStorage.setItem("refresh", a.tokens.refresh);
            otp = a.otp;
            setShowModal(true);
        }
        console.log("A:", a);
    };

    const google_signin = async (e) => {
        let op = await ApiPostService(process.env.REACT_APP_GOOGLE_SIGNIN, {
            auth_token: e.tokenId,
        });
        if(op.success){
            localStorage.setItem("isCRLogged", true);
            localStorage.setItem("access_token", op.tokens.access_token);
            localStorage.setItem("refresh", op.tokens.refresh);
            history.replace("/")
        }
    };

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Signup</h1>
                <Form.Group className="mb-3 mt-5 row" controlId="formBasicFn">
                    <FormControl
                        className="px-3 mx-2 col"
                        type="text"
                        placeholder="First Name"
                        required
                        value={data.fname}
                        onChange={handleChange}
                        name="fname"
                    />
                    <FormControl
                        className="px-3 col"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={data.lname}
                        onChange={handleChange}
                        name="lname"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormControl
                        className="px-3"
                        type="email"
                        placeholder="Email address"
                        required
                        value={data.email}
                        onChange={handleChange}
                        name="email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPwd">
                    <FormControl
                        type="password"
                        placeholder="Password"
                        required
                        value={data.pass}
                        onChange={handleChange}
                        name="pass"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCpwd">
                    <FormControl
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={data.cnfrmpass}
                        onChange={handleChange}
                        name="cnfrmpass"
                    />
                </Form.Group>

                <SubmitBtn
                    className="form-control mt-4"
                    type="button"
                    onClick={signup}
                >
                    Signup
                </SubmitBtn>
            </FormTag>

            <div className="d-flex justify-content-center mt-5">
                <GLogin
                    className=""
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Sign in with Google"
                    cookiePolicy={"single_host_origin"}
                    onSuccess={google_signin}
                />
            </div>
            <div className="d-flex justify-content-center">
                <button
                    style={{ color: Bred, border: "none", background: "none" }}
                    onClick={() => toggle(true)}
                >
                    <span className="text-muted">
                        Already have an account ?{" "}
                    </span>
                    Log in
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
export default Signup;
