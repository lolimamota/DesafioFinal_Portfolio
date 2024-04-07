import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx';

import LogoCSS from '../img/CSS.png'

function CssPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <S.SectionCss>
    <S.BtnBack className="btnCss " onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack>
    <S.ImgHTML className='imgCss' src={LogoCSS} alt="Logo do CSS" />
    <S.TextTech className='textCss'>CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias. CSS é uma das principais linguagens da open web e é padronizada em navegadores web de acordo com as especificação da W3C. Desenvolvido em níveis, o CSS1 está atualmente obsoleto, o CSS2.1 é uma recomendação e o CSS3, agora dividido em pequenos módulos, está progredindo para a sua padronização. Fonte: MDN Web Docs</S.TextTech>
    </S.SectionCss>
  )
}

export default CssPage