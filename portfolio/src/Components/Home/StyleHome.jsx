import styled from 'styled-components';

export const Perfil = styled.img`
width: 250px;
border-radius: 50%;
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
};
`;

export const H1 = styled.h1`
text-align: center;
`;

export const H2 = styled.h2`
text-align: center;
font-weight: 100;
height: 10vh;
`;

export const Button = styled.button`
border-radius: 50px;
`;