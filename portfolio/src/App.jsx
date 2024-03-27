import React from "react";
import {createGlobalStyle} from "styled-components";
import Routes from './Components/Routes/Routes.jsx';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  background-color:#230903
}
`;

export default function App(){
    return(
        <>
        <GlobalStyle/>
        <Routes/>
        </>
    )
}