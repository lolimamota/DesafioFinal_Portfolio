import React from "react";
import Home from '../Home/Home.jsx'
import About from '../About/About.jsx'
import Projects from '../Projects/Projects.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Router(){
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Projects" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
    )
}