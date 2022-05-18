import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {

    startRoute(): void {
        this.wind();
        this.getCargo();
        console.log("Iniciando a decolagem...");
    }

    getCargo(): void {
        console.log("Encomenda colocada no drone!");
    }

    wind(): void {
        console.log("Ventos as 25km, pode enviar o drone");
    }
}