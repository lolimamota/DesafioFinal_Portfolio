import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx';

function MapPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <>
    <S.BtnBack onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack >
    <S.H2>Não é de hoje que a tecnologia está presente...</S.H2>
    <S.Text>
    <S.Paragraph>Em 2012, fiz um curso de jogos digitais, tendo meu primeiro contato com programação lá.</S.Paragraph>
    <S.Paragraph>Confesso que não foi amor a primeira vista e por muitos anos, o IF e o ELSE assombravam meus sonhos rsrsrs...</S.Paragraph>
    <S.Paragraph>Mas a tech não desistiu de mim, e seja atráves dos amigos ou conhecimentos aleatórios, ela vez ou outra voltava pra miha vida!</S.Paragraph>
    <S.Paragraph>E chegamos em 2023, comigo pulando de corpo e alma nos aprendizados de diversas linguagens tecnologicas, vamos conhecer?</S.Paragraph>
    </S.Text>
    </>
  )
}

export default MapPage