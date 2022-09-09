"use strict";

import { casas_tabuleiro } from "../app.js";

const ganhou = (element) =>{

  return element === undefined; 

}

export const verificaVitoria = () => {
  const array_indices_vitória = new Array();

  for (let contador = 0; contador < 12; contador++) {
    const segundaClasse = casas_tabuleiro[contador].classList[1];

   
    array_indices_vitória.push(segundaClasse);

   
  }
  let verificaUndefined = array_indices_vitória.every(ganhou);
  const telaVitoria = document.querySelector('.modal');

  const mensagemVitoria = document.querySelector('.modal_message');

  if(verificaUndefined === true){

    mensagemVitoria.innerHTML = "Excelente!";

    telaVitoria.classList.remove("invisivel2");
  }

};


