"use strict";

import { array_indices } from "../app.js";
import { casas_tabuleiro } from "../app.js";
import { limpaArray } from "./limpaArray.js";


export const viraCarta = () => {
  
  if(array_indices.length === 2){
    casas_tabuleiro[array_indices[0]].classList.add("invisivel");
    casas_tabuleiro[array_indices[1]].classList.add("invisivel");
  }
  
  limpaArray();
  
};
