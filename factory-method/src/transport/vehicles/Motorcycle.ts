import IVehicle from './interfaces/IVehicle';

export default class Motorcycle implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega por moto...");
    }

    getCargo(): void {
        console.log("Já pegamos a encomenda!");
    }

}