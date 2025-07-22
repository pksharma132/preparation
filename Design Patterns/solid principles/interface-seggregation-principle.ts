/**
 * Interface Seggregation Principle
 * States that clients should not be forced to implement the methods they don't need
 * In other words
 *      1. interfaces should be small and split into multiple ones instead of a one big bloated one.
 *      2. classes should only implement  what they need
 */

/** Violating example */

interface Worker {
    work(): void
    eat(): void;
    sleep(): void;
}

class Robot implements Worker {
    work(): void {
        console.log('working');
    }

    eat(): void {
        throw new Error("don't need to eat, just oil")
    }

    sleep(): void {
        throw new Error("don't need to sleep, just maintenance")
    }
}

/** clearly the client doesn't need to implement all the methods */

/** fixed one */

interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}

class RobotWorker implements Workable {
    work(): void {
        console.log("working");
    }
}

class HumanWorker implements Eatable, Sleepable, Workable {
    eat(): void {
        console.log("eats");
    }
    work(): void {
        console.log("works");
    }

    sleep(): void {
        console.log("sleeps");
    }
}

/** Another example */
/** this is bloated */

interface IPayment {
    swipeCard(): void;
    scanQR(): void;
}

/** this is to the point and allows to implement what is needed */
interface SwipeCard {
    swipeCard(): void;
}

interface ScanQR {
    scanQR(): void;
}

class QRPayment implements ScanQR {
    scanQR(): void {
        console.log("scan and make payment");
    }
}

class SwipePayment implements SwipeCard {
    swipeCard(): void {
        console.log("swipe and make payment");
    }
}