class CircleGeometry {
    private PI: number = 3.14
    constructor(public radius: number) {

    }
    public area(): number {
        return this.PI * (this.radius ** 2)
    }

    public circumference(): number {
        return 2 * this.PI * this.radius
    }
}

const myCircle = new CircleGeometry(2)
console.log(myCircle.area());
console.log(myCircle.circumference());


const circleObj = new CircleGeometry(2)
const areaFromObj = circleObj.area()
const circumferenceFromObj = circleObj.circumference()

console.log(`
using CircleGeometry Class calculate radius 2 case :
Area :         ${areaFromObj}
Circumference: ${circumferenceFromObj}
`);
