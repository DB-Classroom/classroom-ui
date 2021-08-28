import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import { BaseContainer, MidContainer } from "./styled";
const Auth = () => {
    const [show, setShow] = useState(true)
    return (
        <BaseContainer >
            <MidContainer>
                {
                    show ?
                        <Login toggle={setShow} />
                        :
                        <Signup toggle={setShow} />
                }
            </MidContainer>
        </BaseContainer>
    )
}
export default Auth;
