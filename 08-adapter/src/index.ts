import IPayPalPayments from "./paypal/IPayPalPayments";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import MercadoPago from "./mercadopago/MercadoPago";
import Payonner from "./payonner/Payonner";
import PayPal from "./paypal/PayPal";


// const payment: IPayPalPayments = new PayPal();
// const payment: IPayPalPayments = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayments = new MercadoPagoAdapter(new MercadoPago());

payment.paypalPayment();
payment.paypalReceive();

