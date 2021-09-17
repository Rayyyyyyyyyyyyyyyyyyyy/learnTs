
class StaticCircleGeometry {
    private static PI: number = 3.14

    static area(radius: number): number {
        return StaticCircleGeometry.PI * (radius ** 2)
    }
    static circumference(radius: number): number {
        return 2 * StaticCircleGeometry.PI * radius
    }
    static getValueOfPI(): number {
        return StaticCircleGeometry.PI
    }
}


const areaFromStaticMethod = StaticCircleGeometry.area(2)
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2)

console.log(`
useing StaticCircleGeometry Class calculate radius 2 case: 
Area:          ${areaFromStaticMethod}
Circumference: ${circumferenceFromStaticMethod}
`);
