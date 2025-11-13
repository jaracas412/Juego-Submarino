export const UI = {
    status: null,
    table: null,
    sizes: null,
    btnComenzar: null,

    init: (config) => {
        UI.status = config.status;
        UI.table = config.table;
        UI.templateId = config.templateId;
        UI.btnStart = config.btnStart;
        UI.btnShot = config.btnShot;
        
    },
    setStatus: (message) => {
        UI.status.innerHTML = message;
    },
    
    displayTablero(total, templateId, tablaId) {
        const plantilla = document.getElementById(templateId);
        const tabla = document.getElementById(tablaId);
        tabla.style.gridTemplateColumns = "repeat(${total}, 1fr)";
        for (let i = 0; i < total * total; i++) {
            const clon = plantilla.content.cloneNode(true);
            clon.querySelector('.casilla').textContent = i + 1;
            tabla.appendChild(clon);
        }
    },

    start(game) {
        UI.game = game;
        UI.changeStatus("Juego iniciado");
        UI.btnStart.disabled = true;
        UI.btnShot.disabled = false;
    },

    changeStatus(message) {
        UI.setStatus(message);
    }
        
}