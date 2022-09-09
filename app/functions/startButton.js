"use strict";

export const startButton = () => {
  const startButton = document.querySelector(".startGame_button");
  const startGame = document.querySelector(".startGame_bakcground")
  const sectionJogo = document.querySelector(".jogo");
  startButton.onclick = () => {
    sectionJogo.classList.remove("comecaJogo");
    startGame.classList.add("comecaJogo");
  };
};
