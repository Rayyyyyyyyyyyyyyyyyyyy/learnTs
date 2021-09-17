class C1 {
    constructor(public prop: string) { }
    public publicMethod(): string {
        return this.prop
    }
}
class C2 {
    constructor(public prop: string) {

    }
    public publicMethod(): string {
        return this.prop
    }
}
let someObject: C1 = new C2("hello")






class AnotherC1 {
    constructor(
        public prop: string,
        private privateProp: number
    ) {

    }
    public publicMethod(): number {
        return this.privateMethod()
    }
    private privateMethod(): number {
        return this.privateProp
    }
}
class AnotherC2 {
    constructor(
        public prop: string,
        private privateProp: number
    ) { }
    public publicMethod(): number {
        return this.privateMethod()
    }
    private privateMethod(): number {
        return this.privateProp
    }
}
// let anotherObject: AnotherC1 = new AnotherC2("hollo", 32)



type TA = { hello: string }
type TB = { hello: string }

interface IA {
    hello: string
}
interface IB {
    hello: string
}
function logTypeA(obj: TA) {
    console.log(obj);
}

logTypeA(<TA>{ hello: "World" })
logTypeA(<TB>{ hello: "World" })
logTypeA(<IA>{ hello: "World" })
logTypeA(<IB>{ hello: "World" })