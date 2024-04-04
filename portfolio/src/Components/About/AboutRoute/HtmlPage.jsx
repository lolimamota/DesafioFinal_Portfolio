import React from 'react'
import {useNavigate} from 'react-router-dom';

function HtmlPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <>
    <button onClick={()=>handleClickMBACK()}>VOLTAR</button>
    </>
  )
}

export default HtmlPage