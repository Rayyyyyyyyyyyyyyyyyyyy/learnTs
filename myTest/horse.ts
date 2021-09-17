export enum Color {
    White,
    Black,
    Brown,
    Grey,
    Rainbow
}

class Horse {
    constructor(
        public name: string,
        public color: Color,
        public readonly type: string,
        private noise: string = "MeeeeeeeEeeééeéeée~"
    ) { }
    public makeNoise() {
        console.log(this.noise);
    }
    public info() {
        console.log(this.infoText);
    }
    private infoText(): string {
        return 'It is ${this.name} the ${Color[this.color]} ${this.type}';
    }
}

let aRandomHorse = new Horse("Martin", Color.Black, "pony")

aRandomHorse = new Horse("Toby", Color.Rainbow, "Stallion")


let certainlyAHorsie: Horse = new Horse("Leo", Color.Black, "Bronco")

let certainlyAnotherHorsie = <Horse>(new Horse("Wendy", Color.White, "Mustang"))

let certainlyTheOtherHorsie = new Horse("Alexius", Color.Grey, "Foal") as Horse


type SomeType = {
    message: string
}
class SomeClass implements SomeType {
    constructor(public message: string = "hi") {
    }
}