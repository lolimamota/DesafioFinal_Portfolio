import React from 'react';
import * as S from './StyleAbout.jsx';

function About() {
  return (
      <S.Main>
      <S.Section>
        <S.Div className='html'>HTML</S.Div>
        <S.Div className='css'>CSS</S.Div>
        <S.Div className='js'>JS</S.Div>
        <S.Div className='react'>REACT</S.Div>
        <S.Div className='dev'>DEV</S.Div>
      </S.Section>
      </S.Main>
  )
}

export default About
