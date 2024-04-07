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
text-align: center;
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
/* width: 100%;
display: inline-block;
white-space: nowrap;
overflow: hidden; */

/* img{
    border: solid white;
    width: 80px;
    margin: 0 0.2rem;
    animation: pegadinhas 1s infinite linear ;
}
@keyframes pegadinhas {
    0%{
        transform: translateX(0)
    }
    100%{
        transform: translateX(100%)
    }
} */

//--------------tentativa de estilização com as classes
overflow: hidden;
padding: 1rem 0;
white-space: nowrap;
position: relative;

&:before{
position:absolute;
top: 0;
width:40rem;
height: 100%;
content: "";
z-index: 2;
right:0;
background-image: linear-gradient(to right , transparent, #230903);
}
&:after{
position:absolute;
top: 0;
width:40rem;
height: 100%;
content: "";
z-index: 2;
left:0;
background-image: linear-gradient(to left ,  transparent , #230903);
}
&:hover .pezinhos-slide{
    animation-play-state: paused;
}
.pezinhos-slide{
    animation: 20s slide infinite linear;
    display: inline-flex;
}
.pezinhos-slide img{
    height: 80px;
    margin: 0 55px;
}
@keyframes slide {
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(100%)
    }
}
`;

