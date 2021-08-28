import styled from 'styled-components'
import { Navyblue, Bred } from '../../themes/color';
import { Decol, Lato, Sans } from '../../themes/font';
import { Container } from 'react-bootstrap'

export const Header = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    font-family:${Decol};
    font-weight: 600;
    color:${Navyblue};
    font-size: x-large;
    padding: .8rem 3rem .4rem 3rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25), 0 .4em .8em rgba(0,0,0,0.22);
`;

export const UserBox = styled(Container)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    font-size: large;
    font-family:${Lato};
    font-style: normal;
`;

export const Ul = styled.ul`
    list-style: none;
    font-size: large;
    font-family:${Lato};

`;
export const Li = styled.li`
    letter-spacing: .5ch;
`;

export const Text = styled.p`
    margin-left: .5em;
    font-size:medium;
    font-family:${Sans};
`;
export const TextLogo = styled.span`
    border-radius:50%;
    font-family:${Sans};
    color:#fff;
    padding:.3em;
    padding-left:.5em;
    background:${Bred};
    text-transform: capitalize;
`;