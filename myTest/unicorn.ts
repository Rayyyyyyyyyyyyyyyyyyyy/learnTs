import { Color } from "./horse"

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
    protected infoText(): string {
        return 'It is ${this.name} the ${Color[this.color]} ${this.type}';
    }
}

class Unicorn extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Rainbow,
            "Mystical Unicorn",
            "Nheeeeeeeeheeeeheheheeeee~~"
        )
    }
    protected infoText(): string {
        return `It's a mystical unicorn!! It's name is ${this.name}!!`
    }

    public puke(): void {
        console.log("Puking rainbow vomit !!");

    }
}

let aRandomUnicorn = new Unicorn("Maxwell")

let anotherHorsie: Horse = new Unicorn("Maximilian")

aRandomUnicorn.puke()

let shouldBeUnicorn = new Unicorn("Nyeeeeee~")
console.log(shouldBeUnicorn);


class Stallion extends Horse {
    constructor(name: string) {
        super(
            name,
            Color.Brown,
            "Stallion"
        )
    }
}