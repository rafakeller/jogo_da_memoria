"use strict";

import { restartGame } from "./functions/restartGame.js";
import { startButton } from "./functions/startButton.js";
import { verifica } from "./functions/verifica.js";

export const array_clicada = new Array();

export const array_indices = new Array();

export const verifyJogada = { jogadaFeita: false };

const figuras = ["haha","haha","angry","care","sad","care","like","sad","wow","like","angry","wow"];

figuras.sort(()=> Math.random() - 0.5);//vai embaralhar as figuras aleatóriamente

const tabuleiro = document.querySelector(".tabuleiro");
startButton();
figuras.forEach((figura,id)=>{
  const casa = document.createElement("button");
  casa.classList.add("casas");
  casa.classList.add("invisivel");//colocando classe
  casa.setAttribute("id", figura);//colocando identificador nas lis

  casa.addEventListener("click", () => {
  
    verifica(id);
    restartGame();

  });
  tabuleiro.appendChild(casa);//colocando filhos dentro de tabuleiro
})
export const casas_tabuleiro = document.querySelectorAll(".casas");

