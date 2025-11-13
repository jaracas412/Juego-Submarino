import { Tablero } from "./Tablero.js";

export class GameSubmarine {
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.tablero = new Tablero();
    }

     init(config) {
        this.tablero.init(config);
        this.UIControl.start(this);
        this.UIControl.changeStatus("Tablero iniciado");
        console.log(`El submarino esta en (${this.tablero.submarino.x}, ${this.tablero.submarino.y})`);
    }


    shot(x, y) {
    const acierto = this.tablero.dispara(x, y);


    if (acierto) {
      this.UIControl.changeStatus("Has acertado");
      this.UIControl.btnShot.disabled = true;
    } else {
      this.UIControl.changeStatus("Has fallado, el submarino se ha movido.");
    }
  }
}