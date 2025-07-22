/** Liskov substitution Principle
 *  It states that objects of super class should be replaceable with objects of subclas
 *  without breaking the execution of the program
 */

/** Violating example */

class Bird {
  fly() {
    console.log("flying");
  }
}

class Crow extends Bird {}

class Penguin extends Bird {
    fly(): void {
        throw new Error("can't fly");
    }
}


/** fixed with LSP */

interface Bird {};

interface FlyingBird extends Bird {
    fly(): void;
}

class Crow implements FlyingBird {
    fly(): void {
        console.log("can fly");
    }
};
class Penguin implements Bird {
    walk(): void {
        console.log("can't fly only walk");
    }
};


/** another example */

class EngineVehicle {
    startEngine(): void {
      console.log("Engine started");
    }
  }
  
  class Car extends EngineVehicle {}
  
  class Bicycle extends EngineVehicle {
    startEngine(): void {
        throw new Error("oops no engine, only legs!")
    }
  }

interface Vehile {};
interface EngineVehicle {
    startEngine(): void;
}

class MotorBike implements EngineVehicle {
    startEngine(): void {
        console.log("engine started");
    }
}

class Bicycle implements Vehile {
    startPedalling(): void {
        console.log("started pedalling!");
    }
}