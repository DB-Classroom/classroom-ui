import React, { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color"
import { ApiPostService } from '../api_services'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

const Login = ({ toggle }) => {
    let history = useHistory();

    const [data,setData]= useState( 
        { email:'', password:'' }
    )

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const login =async()=>{

        if (data.email==='' || data.pass==="") {
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

        if(data.password.length<5){
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
        
        let a=await ApiPostService(process.env.REACT_APP_LOGIN, {
            "email":data.email,
            "password":data.password
        });
        if(!a.success){
            toast.error(a.errors.description, {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            console.log(a);
        }
        else{
            history.replace("/");
        }
        console.log(a);
    }

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Login</h1>
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <FormControl className="px-3" type="email" placeholder=" Enter email" required value={data.email} onChange={handleChange} name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPwd">
                    <FormControl type="password" placeholder="Enter password" required value={data.password} onChange={handleChange} name="password" autoComplete='off' />
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
                <SubmitBtn className="form-control mt-4" onClick={login} type="button">Login</SubmitBtn>

            </FormTag>

            <div className="d-flex justify-content-center mt-5">
                <GLogin
                    className=""
                    clientId= "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Sign in with"
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button style={{ color: Bred, border: 'none', background: 'none' }} onClick={() => toggle(false)}>
                    <span className="text-muted">Don't have an account ? </span>Sign up
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
        </>
    )
}
export default Login;