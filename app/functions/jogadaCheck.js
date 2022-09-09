"use strict"

import { array_clicada, array_indices, casas_tabuleiro, verifyJogada } from "../app.js";
import { botaoClicado } from "./botaoClicado.js";
import { jogada } from "./jogada.js";

export const jogadaCheck = (idCasaGet, id) =>{
  
  if (array_indices.length < 2) {

    array_indices.push(id);
    
    jogada(casas_tabuleiro, id);

    botaoClicado(array_clicada, idCasaGet);

    verifyJogada.jogadaFeita = false;

  } else {
    verifyJogada.jogadaFeita = true;
  
  }
}

