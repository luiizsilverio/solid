import Drone from "../aerial/Drone";
import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicle";
import Patinete from "../land/Patinete";
import ITransportFactory from "./ITransportFactory";

export default class LimeTransport implements ITransportFactory {
    
    createTransportVehicle(): ILandVehicle {
        return new Patinete()
    }
    
    createTransportAircraft(): IAircraft {
        return new Drone()
    }

}