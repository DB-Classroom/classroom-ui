import styled from 'styled-components'
import { Card, Container } from "react-bootstrap";
import { Decol, Lato } from '../../themes/font';

export const Header = styled(Container)`
    width:100%;
    display:flex;
    justify-content: space-between;
    font-family: ${Lato};
    @media(min-width:1000px){
        font-size: x-small;
    }
`;

export const ClassCard = styled(Card)`
    font-family: ${Decol};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    font-weight: 600;
    object-fit: contain;
`;
export const CardImg = styled(Card.Img)`
    object-fit: cover;
    height:10em;
    @media(mix-width:1000px){
        height:8em;
    }
    @media(mix-width:700px){
        height:6em;
    }
`;