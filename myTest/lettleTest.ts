class TestsuperClass {
    constructor(
        public p1: number,
        public p2: string,
        public p3: boolean
    ) {

    }
}
class TestChildClass1 extends TestsuperClass {
    constructor(
        p1Child: number,
        p2Child: string,
        p3Child: boolean,
    ) {
        super(p1Child, p2Child, p3Child)
    }
}

const objFromChildClass1 = new TestChildClass1(123, "helllllo", true)
console.log(objFromChildClass1);

class TestChildClass2 extends TestsuperClass { }
const objFromChildClass2 = new TestChildClass2(333, "$214", false)