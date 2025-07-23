/**  i don't completely understand this yet ;-( */

/** 
 * Allows an object to change its behavior when its internal state changes.
   It appears as if the object changed its class.
 * 
 */


/** example */

// State interface
interface OrderState {
  proceed(order: Order): void;
  name(): string;
}

// Context
class Order {
  constructor(private state: OrderState) {}

  setState(state: OrderState) {
    this.state = state;
  }

  proceed() {
    this.state.proceed(this);
  }

  getStateName() {
    return this.state.name();
  }
}

// Concrete States
class PlacedState implements OrderState {
  proceed(order: Order): void {
    console.log("📦 Order shipped");
    order.setState(new ShippedState());
  }
  name() {
    return "Placed";
  }
}

class ShippedState implements OrderState {
  proceed(order: Order): void {
    console.log("🚚 Order delivered");
    order.setState(new DeliveredState());
  }
  name() {
    return "Shipped";
  }
}

class DeliveredState implements OrderState {
  proceed(order: Order): void {
    console.log("✅ Order already delivered");
  }
  name() {
    return "Delivered";
  }
}


const order = new Order(new PlacedState());

console.log(order.getStateName()); // Placed
order.proceed(); // 📦 Order shipped

console.log(order.getStateName()); // Shipped
order.proceed(); // 🚚 Order delivered

console.log(order.getStateName()); // Delivered
order.proceed(); // ✅ Order already delivered
