import React from 'react';
import Perfil from './img/fotoB.jpg';
import * as S from  './StyleHome.jsx';

function Home() {
  return (
    <S.Main>
    <h1 className='h1title'>CONHEÇA A CAPITÃ DESSA AVENTURA:</h1>
    <S.Perfil className='perfilImg' src={Perfil} alt="Foto de perfil de Lorrayne" />
    <button className='btnName'>Nome</button>
    <button className='btnHab1'>Habilidades1</button>
    <button className='btnHab2'>Habilidades2</button>
    <button className='btnFav'>FavThings</button>
    </S.Main>
  )
}

export default Home