import React from "react";
import * as S from './StyleAbout'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MapPage from './AboutRoute/MapPage.jsx'
import HTML from './AboutRoute/HtmlPage.jsx';
import CSS from './AboutRoute/CssPage.jsx';
import JS from './AboutRoute/JavaScriptPage.jsx';
import ReactPage from './AboutRoute/ReactPage.jsx';
import DEV from './AboutRoute/Developer.jsx';

export default function SubRouter(){
  return(
    <BrowserRouter>
    <nav>
      <ul>
        <li><Link to="/MapPage">Você está aqui!</Link></li>
        <li><Link to="/HTML">HTML</Link></li>
        <li><Link to="/CSS">CSS</Link></li>
        <li><Link to="/JS">JS</Link></li>
        <li><Link to="/ReactPage">REACT</Link></li>
        <li><Link to="/DEV">DEV</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/MapPage" element={<MapPage/>}/>
      <Route path="/HTML" element={<HTML/>}/>
      <Route path="/CSS" element={<CSS/>}/>
      <Route path="/JS" element={<JS/>}/>
      <Route path="/ReactPage" element={<ReactPage/>}/>
      <Route path="/DEV" element={<DEV/>}/>
    </Routes>
    </BrowserRouter>
  )
}