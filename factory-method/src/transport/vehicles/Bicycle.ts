import IVehicle from './interfaces/IVehicle';

export default class Bicycle implements IVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando a entrega por bicicleta...");
    }

    getCargo(): void {
        console.log("Já entregamos a encomenda!");
    }

}