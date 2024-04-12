import styled from "styled-components";

export const Nav = styled.nav`
color: #ffeef2;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 10vh;
`;

export const Menu = styled.ul`
width:100%;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1.5rem;
text-transform: uppercase;
font-weight: 100;
:hover{
    color: #6d72c3;
    transition: transform 0.2s ease-in;
    transform: scale(1.1);
}
@media (min-width: 320px) and (max-width: 768px) {
    border: solid red;
    font-size: 0.8rem;
}
`;