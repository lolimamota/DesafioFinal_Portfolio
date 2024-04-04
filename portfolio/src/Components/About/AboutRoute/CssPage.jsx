import React from 'react'
import {useNavigate} from 'react-router-dom';

function CssPage() {
  let navigate = useNavigate();

  const handleClickMBACK = ()=>navigate(-1);
  return (
    <>
    <button onClick={()=>handleClickMBACK()}>VOLTAR</button>
    </>
  )
}

export default CssPage