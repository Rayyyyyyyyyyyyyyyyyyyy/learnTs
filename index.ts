class MyWindow {

    constructor(
        public geometry: Geometry
    ) {

    }

    public area() {
        return this.geometry.area()
    }

    public circumference() {
        return this.geometry.circumference()
    }
}


interface Geometry {
    area(): number
    circumference(): number
}

class Rectangle implements Geometry {
    constructor(
        public width: number,
        public height: number
    ) { }

    public area() {
        return this.width * this.height
    }

    public circumference() {
        return 2 * (this.width + this.height)
    }
}
class Circle implements Geometry {
    public static PI = 3.14

    constructor(
        public radius: number
    ) { }

    public area() {
        return Circle.PI * (this.radius ** 2)
    }

    public circumference() {
        return 2 * Circle.PI * this.radius
    }
}

class RectangulaWindow extends Rectangle {
    public readonly shape = "Rectangle"
}

class CicularWindow extends Circle {
    public readonly shape = "Circle"
}



let rectWindow = new MyWindow(new Rectangle(200, 1000))

console.log("Area of rectangular window: ", rectWindow.area());
console.log("Circumference of rectangular window: ", rectWindow.circumference());


let circularWindow = new MyWindow(new Circle(10))

console.log("Area of circular window: ", circularWindow.area());
console.log("Circumference of circular window: ", circularWindow.circumference());

