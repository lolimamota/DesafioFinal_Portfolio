import styled from 'styled-components';
import Mapa from './img/mapa.png'

export const Main = styled.main`
width: 100%;
height:calc(100vh - 10vh);
background-image: url(${Mapa});
background-position: center;
background-repeat: no-repeat;
background-size: 80%;
`;

export const GridSec = styled.section`
display:grid;
grid-template-areas:
"html css js react dev"
"html css js react dev"
"html css js react dev"
"html css js react dev"
"html css js react dev"
;

.html{
    grid-area: html;
}
.css{
    grid-area: css;
}
.js{
    grid-area:js;
}
.react{
    grid-area: react;
}
.dev{
    grid-area: dev;
}
`;