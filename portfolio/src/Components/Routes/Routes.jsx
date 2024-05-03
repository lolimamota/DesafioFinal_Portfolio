import React from "react";
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import * as S from './StyleRoute.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//About Components
import MapPage from '../About/AboutRoute/MapPage.jsx'
import HTML from '../About/AboutRoute/HtmlPage.jsx';
import CSS from '../About/AboutRoute/CssPage.jsx';
import JS from '../About/AboutRoute/JavaScriptPage.jsx';
import ReactPage from '../About/AboutRoute/ReactPage.jsx';
import DEV from '../About/AboutRoute/Developer.jsx';
import ImgMenu from '../../assets/img responsive/iconcolored.png';


export default function Router() {
    return (
        <BrowserRouter>
            <S.Nav>
                <S.Menu>
                    <img src={ImgMenu} className="ImgMenu" alt="Três barras horizontais. Icone Cardápio, por Icon8 "/>
                    <li className="responsiveMenu"><Link to="/">Home</Link></li>
                    <li className="responsiveMenu"><Link to="/About">About</Link></li>
                    <li className="responsiveMenu"><Link to="/Projects">Projects</Link></li>
                </S.Menu>
            </S.Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/MapPage" element={<MapPage />} />
                <Route path="/HTML" element={<HTML />} />
                <Route path="/CSS" element={<CSS />} />
                <Route path="/JS" element={<JS />} />
                <Route path="/ReactPage" element={<ReactPage />} />
                <Route path="/DEV" element={<DEV />} />
            </Routes>
        </BrowserRouter>
    )
}