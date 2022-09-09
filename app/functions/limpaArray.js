"use strict"
import { array_clicada } from "../app.js"
import { array_indices } from "../app.js"

export const limpaArray = () =>{
  if(array_indices.length >= 2 && array_clicada.length >= 2){
    
    array_indices.splice(0,2);

    array_clicada.splice(0,2);
  }

}
