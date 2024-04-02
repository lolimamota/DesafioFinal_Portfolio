import React, {useState} from 'react';
import Perfil from './img/Perfil.png';
import * as S from  './StyleHome.jsx';
import FotoA from './img/fotoA.png';
import FotoB from './img/fotoB.png';
import FotoC from './img/fotoC.png';
import FotoD from './img/fotoD.png';


function Home() {
  const [image, setImage] = useState(Perfil);
  const [text, setText] = useState("");

  return (
    <S.Main>
    <S.H1 className='h1title'>CONHEÇA A CAPITÃ DESSA AVENTURA:</S.H1>
    <S.Perfil className='perfilImg' src={image} alt="Foto de perfil de Lorrayne" />
    <S.Button onClick={()=>{setImage(FotoA) , setText("Capitã Lorrayne dos Beeeeeelos Horizontes de Minas Gerais!!")}} className='btnName'>Quem é?</S.Button>
    <S.Button onClick={()=>{setImage(FotoB) , setText("Aprendi linguagens tecnológicas e aos 28 anos, trago soluções criativas!")}} className='btnHab1'>Sabe fazer o que?</S.Button>
    <S.Button onClick={()=>{setImage(FotoC) , setText("Nããããããããão! Também tenho as habilidades socioemocionais! ♥")}} className='btnHab2'>Mas só aquilo?</S.Button>
    <S.Button onClick={()=>{setImage(FotoD) , setText("Comidinha na pancinha e gostar do que eu faço de verdade!")}} className='btnFav'>O que te move?</S.Button>
    <S.H2 className='text'>{text}</S.H2>
    </S.Main>
  )
}

export default Home