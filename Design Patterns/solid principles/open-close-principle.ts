/**
 * OCP - Open Close Principle states that software entities (class, modules, functions)
 * should be open for extension but closed for modification
 */

/** Example violating this */

class AreaCalculator {
  calculateArea(shape: any) {
    if (shape.type === "circle") return Math.PI * shape.r * shape.r;
    if (shape.type === "square") return shape.a * shape.a;
  }
}

/** why this violates the principle */

/**
 * If there is a need to add another shape we would have to modify the main class
 * hence there is a violation of OCP
 */

interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  constructor(private side: number) {}

  calculateArea(): number {
    return this.side * this.side;
  }
}

class Triangle implements Shape {
  constructor(private base: number, private height: number) {}

  calculateArea(): number {
      return 0.5 * this.base * this.height;
  }
}

class AreaCalculator {
  calculateArea(shape: Shape) {
    return shape.calculateArea();
  }
}
n