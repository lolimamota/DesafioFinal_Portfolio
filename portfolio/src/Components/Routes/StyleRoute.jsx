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
.ImgMenu{
    display: none;
}

@media (min-width: 320px) and (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 1rem;
    justify-content: flex-start;
    align-items: center;
    
    .ImgMenu{
        display: flex;
        width: 1.5rem;
    }
    .responsiveMenu{
        display: none;
    }
    }
`;