import React from 'react'
import {useNavigate} from 'react-router-dom';
import * as S from '../StyleAbout.jsx'

function Developer() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <>
    <S.BtnBack onClick={()=>handleClickMBACK()}>VOLTAR</S.BtnBack>
    <p>
      A proxima etapa é cloud, em breve concluirei a minha formação no Vai na Web(a primeira de muitas diga-se de passagem!), agora se com este portfólio, você viu o potencial dessa Sandy(&Junior) e quer me ver na equipe, é só entrar em contato comigo atraves das minhas redes!
    </p>
    {/* <img src={GitHub} alt="Logo do github" />
    <img src={LinkedIn} alt="logo do LinkedIn" />
    <img src={WhatsApp} alt="Logo do WhatsApp" /> */}
    </>
  )
}

export default Developer