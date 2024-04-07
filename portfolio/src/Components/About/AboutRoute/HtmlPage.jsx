import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx'

import HTML from '../img/HTML.png'

function HtmlPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <S.SectionHTML>
    <S.BtnBack className='btnHtml' onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack>
    <S.ImgHTML className='imgHtml' src={HTML} alt="Logo do Html" />
    <S.TextTech className='textHtml'>HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. "Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites. Links são um aspecto fundamental da web. Ao carregar conteúdo na Internet e vinculá-lo a páginas criadas por outras pessoas, você se torna um participante ativo na world wide web. O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. A marcação HTML inclui "elementos" especiais, como head, title, body, header, footer, article, section, p, div, span, img, aside, audio, canvas, datalist, details, embed, nav, output, progress, video, ul, ol, li e muitos outros. Fonte: MDN Web Docs</S.TextTech>
    </S.SectionHTML>
  )
}

export default HtmlPage