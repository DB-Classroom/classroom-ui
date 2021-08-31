import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Decol } from "../../themes/font";

export const Cards = styled(Card)`
    font-family: ${Decol};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19);
    font-weight: 500;
    object-fit: contain;
    background:#FF86D1;
`;