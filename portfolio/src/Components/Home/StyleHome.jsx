import styled from 'styled-components';

export const Perfil = styled.img`
width: 250px;
border-radius: 50%;
box-shadow: -15px 3px 90px 7px #ffe4f3;
@media (min-width: 320px) and (max-width: 768px) {
    width: 150px;        
}
`;

export const Main = styled.main`
width: 100%;
height: calc(100vh - 10vh);
padding: 10vh;
color: white;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-template-areas:
". h1title h1title h1title ."
"btnName . . . btnHab1"
". . perfilImg . ."
"btnHab2 . . . btnFav"
". . text . ."
;

.h1title{
    grid-area:h1title;
};
.perfilImg{
    grid-area: perfilImg;
};
.btnName{
    grid-area: btnName;
};
.btnFav{
    grid-area: btnFav;
};
.btnHab1{
    grid-area: btnHab1;
};
.btnHab2{
    grid-area: btnHab2;
};
.text{
    grid-area: text;
    @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    border-radius: 10px;
    background-image: linear-gradient(to left, #4b244a , #6d72c3);
    }
};
@media (min-width: 320px) and (max-width: 768px) {
<<<<<<< HEAD
    padding: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
=======
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(6, 1fr);
grid-template-areas:
". h1title h1title h1title ."
". perfilImg perfilImg perfilImg ."
"btnName btnName . btnHab1 btnHab1"
"btnHab2 btnHab2 . btnFav btnFav"
". . text . ."
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 650ee57 (commit sem margens)
=======
>>>>>>> parent of 650ee57 (commit sem margens)
=======
>>>>>>> parent of 650ee57 (commit sem margens)
}
`;

export const H1 = styled.h1`
text-align: center;
background-color: transparent;
transform: translateY(0px);
animation: float 5s ease-in-out infinite;
@keyframes float {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(-25px);
    }
    100%{
        transform: translateY(0px)
    }
};
@media (min-width: 320px) and (max-width: 768px) {
    font-size: 1.5rem;
};
`;

export const H2 = styled.h2`
text-align: center;
font-weight: 100;
height: 10vh;
background-color: transparent;
@media (min-width: 320px) and (max-width: 768px) {
<<<<<<< HEAD
=======
    height: 20vh;
    width: 50vw;
    border: solid red;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 650ee57 (commit sem margens)
=======
>>>>>>> parent of 650ee57 (commit sem margens)
=======
>>>>>>> parent of 650ee57 (commit sem margens)
    font-size: 1rem;
    color: white;
};
`;

export const Button = styled.button`
border-radius: 50px;
border: none;
&:hover{
    background-image: linear-gradient(to left, #4b244a , #6d72c3);
    transition-delay: transparent ease-in 0.2s;
};
@media (min-width: 320px) and (max-width: 768px) {
    &:hover{
    background-image: linear-gradient(to left, #4b244a , #6d72c3);
    transition-delay: transparent ease-in 0.2s;
};
}
`;