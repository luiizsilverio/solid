import Transport from "./transport";
import Bicycle from "./vehicles/Bicycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export class BicycleTransport extends Transport {

    protected createTransport(): IVehicle {
        
        return new Bicycle();

    }

}