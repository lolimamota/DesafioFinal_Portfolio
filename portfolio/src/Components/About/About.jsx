import React from 'react';
import * as S from './StyleAbout.jsx';
import styled from 'styled-components';
import Mapa from './img/mapa.png';


const Main = styled.main`
background-image: url(${Mapa});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
width: 100%;
height: 90vh;
`;


export default function About() {
  return (
    <Main>
      <S.Div className='html'>html</S.Div>
      <S.Div className='css'>css</S.Div>
      <S.Div className='js'>js</S.Div>
      <S.Div className='react'>react</S.Div>
      <S.Div className='dev'>dev</S.Div>
    </Main>
  )
};