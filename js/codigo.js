import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    status: document.getElementById("status"),     
    table: document.getElementById("tabla2"),   
    templateId: "casilla-template",     
    btnStart: document.getElementById("btnStart"),
    btnShot: document.getElementById("btnShot")           
});


const gameInstance = new GameSubmarine(UI);

UI.btnStart.addEventListener("click", () => {
  gameInstance.init({
    size: 2,
    templateId: "casilla-template",
    tablaId: "tabla2"
  });
  UI.btnStart.disabled = true;
  UI.btnShot.disabled = false;
});




UI.btnShot.addEventListener("click", () => {
  const x = parseInt(inputX.value);
  const y = parseInt(inputY.value);
  gameInstance.shot(x, y);
});

