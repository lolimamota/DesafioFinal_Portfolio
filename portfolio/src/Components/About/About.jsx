import React from "react";
import * as S from './StyleAbout.jsx';
import { useNavigate } from "react-router-dom";
import Mapa from './img/mapa.png';



export default function SubRouter(){
  let navigate = useNavigate();

  const handleClickMAP = ()=>navigate("/MapPage");
  const handleClickHTML = ()=>navigate("/HTML");
  const handleClickCSS = ()=>navigate("/CSS");
  const handleClickJS = ()=>navigate("/JS");
  const handleClickREACT = ()=>navigate("/ReactPage");
  const handleClickDEV = ()=>navigate("/DEV");

  return(
    <>
    <nav>
      <S.Ul>
        <S.Li onClick={()=>handleClickMAP()}>trocando esse titulo</S.Li>
        <S.Li onClick={()=>handleClickHTML()}>HTML</S.Li>
        <S.Li onClick={()=>handleClickCSS()}>CSS</S.Li>
        <S.Li onClick={()=>handleClickJS()}>JS</S.Li>
        <S.Li onClick={()=>handleClickREACT()}>REACT</S.Li>
        <S.Li onClick={()=>handleClickDEV()}>DEV</S.Li>
      </S.Ul>
    </nav>
    <div>
      <S.Mapa src={Mapa} alt="Imagem de uma mapa do tesouro com os caminhos que percorri ate chegar aqui." />
    </div>
    </>
  );
}