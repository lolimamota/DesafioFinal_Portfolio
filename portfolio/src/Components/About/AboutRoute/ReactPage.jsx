import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx';

import LogoReact from '../img/react.png'

function ReactPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <S.SectionReact>
    <S.BtnBack className="btnReact " onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack>
    <S.ImgHTML className='imgReact' src={LogoReact} alt="Logo do CSS" />
    <S.TextTech className='textReact'>O React permite construir interfaces de usuário a partir de peças individuais chamadas componentes. Crie seus próprios componentes React como , e . Em seguida, combine-os em telas, páginas e aplicativos inteiros. Quer você trabalhe sozinho ou com milhares de outros desenvolvedores, usar o React parece o mesmo. Ele foi projetado para permitir que você combine perfeitamente componentes escritos por pessoas, equipes e organizações independentes.React também é uma arquitetura. Os frameworks que o implementam permitem buscar dados em componentes assíncronos que são executados no servidor ou mesmo durante a construção. Leia dados de um arquivo ou banco de dados e transmita-os aos seus componentes interativos. Fonte: MDN Web Docs</S.TextTech>
    </S.SectionReact>
  )
}

export default ReactPage