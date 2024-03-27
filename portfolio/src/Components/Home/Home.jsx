import React from 'react';
import Perfil from './img/fotoB.jpg';
import * as S from  './StyleHome.jsx';

function Home() {
  return (
    <S.Main>
    <h1>CONHEÇA A CAPITÃ DESSA AVENTURA:</h1>
    <S.Perfil src={Perfil} alt="Foto de perfil de Lorrayne" />
    <button>Nome</button>
    <button>Habilidades1</button>
    <button>Habilidades2</button>
    <button>FavThings</button>
    </S.Main>
  )
}

export default Home