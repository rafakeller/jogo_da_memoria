"use strict";

import { casas_tabuleiro } from "../app.js";
import { jogadaCheck } from "./jogadaCheck.js";
import { verificaAcerto } from "./verificaAcerto.js";
import { verificaVitoria } from "./verificaVitoria.js";

export const verifica = (id) => {
  const idCasaGet = casas_tabuleiro[id].getAttribute("id");

  jogadaCheck(idCasaGet, id);

  verificaAcerto(idCasaGet);

  verificaVitoria();
};
