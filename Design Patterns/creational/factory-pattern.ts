/** Factory pattern is a creational pattern
 *  Define an interface to create object but let the subclasses handle creation of the object
 *  In other words instead of creating the objects with "new" keyword which makes the code more coupled
 *  We let the factory handle the creation based on the type passed
 */

/** not using factory pattern */

class Circle {
    draw () {
        console.log("drawing circle");
    }
}

class Square {
    draw () {
        console.log("drawing square");
    }
}

// usage

const circle = new Circle()
const square = new Square()
circle.draw();
square.draw();

/** this is not good as it is tightly coupled */

/** example with factory pattern */

interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log("drawing circle");
    }
}

class Square implements Shape {
    draw(): void {
        console.log("drawing square")
    }
}


class ShapeFactory {
    static createShape(shape: "circle" | "square"): Shape {
        if (shape === "circle") return new Circle();
        if (shape === "square") return new Square();
        throw new Error("unknown shape");
    }
}

/** usage */

const cir = ShapeFactory.createShape("circle");
const sqr = ShapeFactory.createShape("square");

cir.draw();
sqr.draw();


/** another example */

interface Notifier {
    notify(): void
}

class EmailNotifier implements Notifier {
    notify(): void {
        console.log("email notified");
    }
}

class MessageNotifier implements Notifier {
    notify(): void {
        console.log("message notified");
    }
}

class NotifierFactory {
    static createNotifier(notifier: "email" | "message"): Notifier {
        if (notifier === "email") return new EmailNotifier();
        if (notifier === "message") return new MessageNotifier();
        throw new Error("unknown type")
    }
}

const emailNotifier = NotifierFactory.createNotifier("email");
const messageNotifier = NotifierFactory.createNotifier("message");

emailNotifier.notify();
messageNotifier.notify();
