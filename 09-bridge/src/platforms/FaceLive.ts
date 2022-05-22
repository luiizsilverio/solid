import IPlatform from "./IPlatform";

export default class FaceLive implements IPlatform {
   
    constructor() {
        this.configureRMTP();
        console.log("Facebook Live: Transmissão Iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Facebook Live: Conta autorizada");
    }

    authToken(): void {
        console.log("Facebook Live: Autorizando aplicação");
    }    
    
}