import OtpInput from "react-otp-input";
import Countdown from "react-countdown";
import React, { useState } from "react";
import { Navyblue } from "../themes/color";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ApiPostService } from "../api/api_services";

// let originalOtp;

// export const fetchOtp = async (mail) => {
//   let value = await ApiPostService(process.env.REACT_APP_OTP_URL, {
//     email: mail,
//   });
//   originalOtp = value.otp;
//   // console.log(originalOtp);
// };

const OTPVerification = ({ oneTimePass, eMail }) => {
    let history = useHistory();
    const [orgOtp, setOrgOtp] = useState(oneTimePass);
    const [Otp, setOtp] = useState("");
    const [resend, setResend] = useState(false);
    const [timer, setTimer] = useState(Date.now() + 60000);
    console.log(orgOtp)
    const Otp_Resend = async () => {
        setTimer(Date.now() + 60000);
        setResend(false);
        let op = await ApiPostService(process.env.REACT_APP_RESEND_OTP, {
            email: eMail,
        });
        setOtp("");
        console.log(op);
        setOrgOtp(op.otp);
    };

    const verifyOtp = async (e) => {
        // e.preventDefault();
        if (orgOtp === Number(Otp)) {
            let op = await ApiPostService(
                process.env.REACT_APP_OTP_VERIFY,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                        )}`,
                    },
                }
            );
            if (op.success) {
                history.replace("/");
            }
        }
    };

    const handleTimer = () => {
        // e.preventDefault();
        setResend(true);
        setTimer(0);
    };

    return (
        <div>
            <h6
                style={{
                    textAlign: "center",
                    color: Navyblue,
                    marginBottom: "10%",
                    marginTop: "10%",
                }}
            >
                Please enter OTP to verify your Mail Id
            </h6>

            <OtpInput
                value={Otp}
                onChange={(otp) => {
                    setOtp(otp);
                }}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum={true}
                isInputSecure={true}
                inputStyle={{
                    width: "2em",
                    color: Navyblue,
                    marginRight: "5%",
                }}
                focusStyle={{ color: Navyblue }}
                className="my-3 mx-1 w-100 "
            />

            <Button type="submit" onClick={verifyOtp} className="my-4 w-100 ">
                Verify OTP
            </Button>

            {resend ? (
                <p
                    style={{
                        color: "blue",
                        textDecoration: "underline",
                        cursor: "default",
                    }}
                    onClick={Otp_Resend}
                >
                    Resend Otp
                </p>
            ) : (
                <>
                    <h6 style={{ color: "red" }}>OTP Expires in:</h6>
                    <Countdown
                        date={timer}
                        key={timer}
                        onComplete={handleTimer}
                    />
                </>
            )}
        </div>
    );
};

export default React.memo(OTPVerification);
