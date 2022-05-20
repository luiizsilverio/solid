import MercadoPago from "../mercadopago/MercadoPago";
import IPayPalPayments from "../paypal/IPayPalPayments";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayments {
   
    // private token: Token;    

    constructor(private mercadoPago: MercadoPago) {
        console.log("Adaptando o MercadoPago utilizando os métodos padrões do PayPal.");
    }

    authToken(): Token {
        return this.mercadoPago.authToken()
    }
    
    paypalPayment(): void {
        return this.mercadoPago.enviaPagamento()
    }
    
    paypalReceive(): void {
        return this.mercadoPago.recebePagamento()
    }
    
}