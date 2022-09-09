"Use strict"

export const restartGame = () =>{
  const botaoRestart = document.querySelector('.botaoNovoJogo');

  botaoRestart.addEventListener("click", ()=>{
    location.reload();
  })
}