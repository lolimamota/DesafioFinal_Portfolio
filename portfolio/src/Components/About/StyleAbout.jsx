import styled from 'styled-components';

export const Ul = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10vh;
`;

export const Li = styled.li`
border-radius: 60px 60px 0px 0px / 58px 58px 0px 0px;
border: solid 1px;
width: 20%;
text-align: center;
`;

export const BtnBack = styled.button`
margin-top: 5vh;
background-image: linear-gradient(to left, #4b244a , #6d72c3);
transition-delay: transparent ease-in 0.2s;
border-radius: 50px 50px 50px 50px;
border:none;
width:15%;
height: 5vh;
`; 

export const H2 = styled.h2`
text-align: center;
font-weight: 100;
`;

export const Text = styled.div`
height: 40vh;
display:flex;
justify-content: space-around;
align-items: center;
`;

export const Paragraph = styled.p`
width: 20%;
height: 25vh;
text-align: justify;
border: solid 0.5px #6d72c3;
border-radius: 5px;
&:hover{
    transform: scale(1.2);
}
`;

export const Mapa = styled.img`
width: 100%;
padding: 10vh;
`;

export const PegadasAnimadas = styled.section`
width: 100%;
height: 15vh;
border: solid red;
&:hover{
    animation: to left 0.5s ease-out;
}
`;