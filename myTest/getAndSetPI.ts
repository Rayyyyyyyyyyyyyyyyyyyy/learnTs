class CircleGeometryV2 {
    private PI: number = 3.14


    constructor(public radius: number) {
    }

    get area() {
        return this.PI * (this.radius ** 2)
    }
    set area(vaule: number) {
        this.radius = (vaule / this.PI) ** 0.5
    }


    public circumference(): number {
        return 2 * this.PI * this.radius
    }
}

const radomCircle = new CircleGeometryV2(2)
// console.log(radomCircle.area);


radomCircle.radius = 40
// console.log(radomCircle.area);

const anotherRandomCircle = new CircleGeometryV2(2)
console.log(anotherRandomCircle.radius);

console.log(anotherRandomCircle.area)

anotherRandomCircle.area = 3.14 * (5 ** 2);

console.log(anotherRandomCircle.radius);
