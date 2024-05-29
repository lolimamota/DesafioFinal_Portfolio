import React from 'react';
import { Carousel } from 'nuka-carousel';
import * as S from '../Projects/StyleProjects.jsx';

import Fantastika from './img/cao.png';
import Cartoon from './img/cartoon.png';
import Cruzeiro from './img/cruzeiro.png';
import TheWitcher from './img/fogo.png';
import Parceiros from './img/patrocinadores.png';
import TDCacho from './img/tdc.png';

function Projects() {
  const Challenges = [
    { image: Fantastika, title: 'Fantastika', link: "https://fantastikapetshop.vercel.app/", description: "Página desenvolvida com as seguintes tecnologias: HTML e CSS, aplicando tecnicas como indentação e responsividade" },
    { image: Cartoon, title: 'CartoonNetwork', link: "https://cn-exercise.vercel.app/", description: "Usando Vite+React, as tecnicas de map, styled-components, useState, useEffect, filter foram aplicadas" },
    { image: Cruzeiro, title: 'Cruzeiro Christmas Emotions', link: "https://christimas-emotions.vercel.app/", description: "Usando JavaScript, houve desenvolvimento da Logica, use o F12 e veja!" },
    { image: TheWitcher, title: 'The Witcher', link: "https://the-red-project.vercel.app/", description: "Linguagens como HTML, CSS foram aplicadas além de implementação do responvivo mobile e z-index" },
    { image: Parceiros, title: 'Patrocinadores Talentos Digitais', link: "https://patriocinio-vnw.vercel.app/", description: "Brincando com os Hooks do React, utilizamos DOM, useEffect e useState para fazer o funcionamento e mudanças no click" },
    { image: TDCacho, title: 'Projeto Tô de Cacho', link: "https://todecacho.vercel.app/", description: "Desenvolvimento melhor visualizado ainda no mobile, apresenta um menu suspenso com addEventListener, criado com o intuito de desenvolver um projeto do zero sem supervisão" }
  ]

  const Carrousel = {
    width: "99vw",
    height: "80vh",
  };

  const params = {
    wrapAround: true,
    animation: 'zoom',
    slidesToShow: 1, //de 3 em 3 imagens
    style: Carrousel,
    autoplay: true, //passar sozinho
    autoplayInterval: 3000, //passar de 3 em 3 seguntos automático
    cellAlign: 'left',
    swiping: true, //arrastar o carousel,
    zoomScale: 0.85,
    className: 'teste',

    defaultControlsConfig: {

      nextButtonText: '»',
      nextButtonStyle: {
        //position:"relative",
        // top:"-6.5vh",
        marginRight: '3.8vw',
        // color: "#ffffff",
        color: 'red',
        fontSize: '192px',
        backgroundColor: 'transparent',
        width: '2vw',
        // height: '8vh',
        fontFamily: "Inconsolata",
      },

      prevButtonText: '«',
      prevButtonStyle: {
        // position: "relative",
        // top:"-6.5vh",
        // color: "#ffffff",
        color: 'red',
        fontSize: '192px',
        backgroundColor: 'transparent',
        width: '2vw',
        // height: '8vh', 
        fontFamily: "Inconsolata",
        Dots: "red",
      },
    }

  }


  return (
    <>
      <Carousel {...params} autoplay showDots>

        {Challenges.map((item) => (
          <S.Div>
            <a href={item.link} target="_blank"><img src={item.image} alt={item.title} />   </a>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
          </S.Div>
        ))}
      </Carousel>

    </>

  )
}

export default Projects