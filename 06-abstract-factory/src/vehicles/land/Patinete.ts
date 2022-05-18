import ILandVehicle from "./interfaces/ILandVehicle";

export default class Patinete implements ILandVehicle {

    startRoute(): void {
        this.getCargo();
        console.log("Iniciando o trajeto (patinete)");
    }
    
    getCargo(): void {
        console.log("Já pegamos a encomenda (patinete)");
    }
    
}