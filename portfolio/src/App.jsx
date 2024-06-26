import React from "react";
import {createGlobalStyle} from "styled-components";
import Routes from './Components/Routes/Routes.jsx';
import About from "./Components/About/About.jsx";

const GlobalStyle = createGlobalStyle`
*{
  color: #ffeef2;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  background-color:#230903;
  font-family: "Quicksand", sans-serif;
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