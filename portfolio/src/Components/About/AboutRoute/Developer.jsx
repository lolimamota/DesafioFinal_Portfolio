import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx';

import WhatsApp from '../img/wpp.png';
import LinkedIn from '../img/lkd.png';
import GitHub from '../img/git.png';

function Developer() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <>
    <S.BtnBack onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack>
    <S.TextTech2>
      A proxima etapa é cloud, em breve concluirei a minha formação no Vai na Web (a primeira de muitas diga-se de passagem!), agora se com este portfólio, você viu o potencial dessa Sandy(&Junior) e quer me ver na equipe, é só entrar em contato comigo atraves das minhas redes!
    </S.TextTech2>
    <S.DivDev>
      <S.AnchorTag href="https://github.com/lolimamota" target="_blank">
        <img src={GitHub} alt="Logo do github" />
      </S.AnchorTag>

    <S.AnchorTag href="https://www.linkedin.com/in/lorraynelimamota/" target="_blank">
      <img src={LinkedIn} alt="logo do LinkedIn" />
    </S.AnchorTag>

    <S.AnchorTag href="https://api.whatsapp.com/send/?phone=%2B5531992539210&text&type=phone_number&app_absent=0" target="_blank">
    <img src={WhatsApp} alt="Logo do WhatsApp" />
    </S.AnchorTag>
    </S.DivDev>
    </>
  )
}

export default Developer