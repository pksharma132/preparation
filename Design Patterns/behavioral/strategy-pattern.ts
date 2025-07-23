/** strategy pattern is a behavioral pattern which allows to choose different strategy / algorithms
 * at run-time. It helps to avoid if-else pattern in clients
 * 
 * 
 * Usecase: 
 * 1. Multiple strategies for payment like credit card, debit card, upi etc.
 * 2. Multiple delivary methods like store-pickup, home-delivary, curbside-pickup etc
 * 
 * 
 * Main idea:
 *  Define multiple strategies with their own classes
 *  let the client use the appropriate strategy while consuming the object.
 * 
 */


/** example */


interface PaymentMethod {
    payment(): void;
}

class CreditCard implements PaymentMethod {
    payment(): void {
        console.log("payed with credit card")
    }
}

class DebitCard implements PaymentMethod {
    payment(): void {
        console.log("payed with debit card")
    }
}

class UPI implements PaymentMethod {
    payment(): void {
        console.log("payed with UPI");
    }
}

class PaymentSelector {
    constructor(private strategy: PaymentMethod) {

    }

    setStrategy(strategy: PaymentMethod) {
        this.strategy = strategy;
    }

    pay() {
        this.strategy.payment();
    }
}


const upi = new UPI();

const payment = new PaymentSelector(upi);

payment.pay();

const credit = new CreditCard();

payment.setStrategy(credit);

payment.pay()