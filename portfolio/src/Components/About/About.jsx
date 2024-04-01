import React from 'react';
import * as S from './StyleAbout.jsx';
import CardHover from './CardHover.jsx'

function About() {
  return (
      <S.Main>
        <S.GridSec>
        <CardHover className="html" name="HTML"/>
        <CardHover className="css" name="CSS"/>
        <CardHover className="js" name="JS"/>
        <CardHover className="react" name="REACT"/>
        <CardHover className="dev" name="DEV"/>
        </S.GridSec>
      </S.Main>
  )
}

export default About
