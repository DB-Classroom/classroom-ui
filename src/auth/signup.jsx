import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { FormControl, GLogin, SubmitBtn, FormTag } from "./styled";
import { Bred } from "../themes/color"
import { ApiPostService } from '../api_services';

const Signup = ({ toggle }) => {

    const [data,setData]= useState( 
        { fname:'', lname:'' , email:'' , pass:'' , cnfrmpass:'' }
    )

    const handleChange = e => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signup =()=>{
        
        let a=ApiPostService(process.env.REACT_APP_REGISTER, {
            "email":data.email,
            "password":data.pass
        });
        console.log(a);
    }

    return (
        <>
            <FormTag onSubmit={() => console.log("done")}>
                <h1>Signup</h1>
                <Form.Group className="mb-3 mt-5 row" controlId="formBasicFn">
                    <FormControl className="px-3 mx-2 col" type="text" placeholder="First Name" required value={data.fname} onChange={handleChange} name='fname' />
                    <FormControl className="px-3 col" type="text" placeholder="Last Name" required value={data.lname} onChange={handleChange} name='lname' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FormControl className="px-3" type="email" placeholder="Email address" required value={data.email} onChange={handleChange} name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPwd">
                    <FormControl type="password" placeholder="Password" required value={data.pass} onChange={handleChange} name='pass' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCpwd">
                    <FormControl type="password" placeholder="Confirm password" required value={data.cnfrmpass} onChange={handleChange} name='cnfrmpass' />
                </Form.Group>

                <SubmitBtn className="form-control mt-4" type="button" onClick={signup} >Signup</SubmitBtn>

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