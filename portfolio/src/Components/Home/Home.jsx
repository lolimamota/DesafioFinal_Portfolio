import React, {useEffect, useState} from 'react';
import Perfil from './img/Perfil.png';
import * as S from  './StyleHome.jsx';
import FotoA from './img/fotoA.png';
import FotoB from './img/fotoB.png';
import FotoC from './img/fotoC.png';
import FotoD from './img/fotoD.png';


function Home() {
  const [image, setImage] = useState(Perfil);

  return (
    <S.Main>
    <S.H1 className='h1title'>CONHEÇA A CAPITÃ DESSA AVENTURA:</S.H1>
    <S.Perfil className='perfilImg' src={image} alt="Foto de perfil de Lorrayne" />
    <button onClick={()=>{setImage(FotoA)}} className='btnName'>Nome</button>
    <button onClick={()=>{setImage(FotoB)}} className='btnHab1'>Habilidades1</button>
    <button onClick={()=>{setImage(FotoC)}} className='btnHab2'>Habilidades2</button>
    <button onClick={()=>{setImage(FotoD)}} className='btnFav'>FavThings</button>
    </S.Main>
  )
}

export default Home