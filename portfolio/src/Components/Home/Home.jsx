import React, {useEffect, useState} from 'react';
import Perfil from './img/Perfil.jpg';
import * as S from  './StyleHome.jsx';
import FotoA from './img/fotoA.jpeg';
import FotoB from './img/fotoB.jpg';
import FotoC from './img/fotoC.jpg';
import FotoD from './img/fotoD.jpg';


function Home() {
  const [image, setImage] = useState(Perfil)

  

  return (
    <S.Main>
    <S.H1 className='h1title'>CONHEÇA A CAPITÃ DESSA AVENTURA:</S.H1>
    <S.Perfil className='perfilImg' src={image} alt="Foto de perfil de Lorrayne" />
    <button className='btnName'>Nome</button>
    <button className='btnHab1'>Habilidades1</button>
    <button className='btnHab2'>Habilidades2</button>
    <button className='btnFav'>FavThings</button>
    </S.Main>
  )
}

export default Home