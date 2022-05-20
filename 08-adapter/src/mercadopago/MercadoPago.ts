import Token from "../utils/Token";
import IMercadoPagoPayments from "./IMercadoPagoPayments";

export default class MercadoPago implements IMercadoPagoPayments {
   
    private token: Token
    
    authToken(): Token {
        return new Token();
    }

    enviaPagamento(): void {
        this.token = this.authToken();
        console.log("Enviando pagamentos via MercadoPago.");
    }
    recebePagamento(): void {
        console.log("Recebendo pagamentos via MercadoPago.");
    }
    
}