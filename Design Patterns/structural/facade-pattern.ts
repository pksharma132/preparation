/** Facade pattern is a structural design pattern
 *  It gives a simplified interface to a larger, complex system
 *  Facade acts like a deskpoint which gives a clean and unified entry point to complex system
 *  Usecases
 *      1. provide a clean interface for a messy / legacy system
 *      2. wrapping multiple services / components
 *      3. used in frameworks such as spring, angular and libraries like lodash, jquery
 */

/** usage */

class Inventory {
    checkItem(item) {
        console.log('checked item', item);
        return true;
    }
}

class PaymentGateway {
    processPayment() {
        console.log("processing payment");
        return;
    }
}

class Shipping {
    scheduleShipping() {
        console.log("item scheduled for shipping!");
    }
}

class OrderFacade {
    private inventory: Inventory = new Inventory();
    private payment: PaymentGateway = new PaymentGateway();
    private shipping: Shipping = new Shipping();

    constructor(){}

    placeOrder(item) {
        if(this.inventory.checkItem(item)) {
            this.payment.processPayment()
            this.shipping.scheduleShipping();
        } else {
            console.log('order not placed, no inventory!');
        }

    }
    
}


/** usage */

const orderFacade = new OrderFacade();

orderFacade.placeOrder("item1");