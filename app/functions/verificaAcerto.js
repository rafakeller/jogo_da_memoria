"use strict";

import { array_clicada, array_indices, verifyJogada } from "../app.js";
import { figuraErrada } from "./figuraErrada.js";
import { limpaArray } from "./limpaArray.js";

export const verificaAcerto = (idCasaGet) => {

  if (array_indices.length === 2 && verifyJogada.jogadaFeita === false) {
    
    if (idCasaGet !== array_clicada[0]) {
      figuraErrada();
      
    } else {
      const botoesJogados = document.querySelectorAll(`#${array_clicada[0]}`);

      botoesJogados[0].disabled = true;
      botoesJogados[1].disabled = true;

      limpaArray();
    }
  }
};
