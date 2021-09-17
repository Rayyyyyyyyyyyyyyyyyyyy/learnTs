enum Role {
    Swordsman = "Swordsman",
    Warlock = "Warlock",
    Highwayman = "Highwayman",
    BountyHunter = "BountyHunter",
    Monster = "Monster"
}

interface ICharacter {
    name: string
    role: Role
    attack(target: ICharacter): void
}

interface Istats {
    health: number // hp
    mana: number // mp 
    strength: number // 力量
    defense: number // 防禦
}

class Character implements ICharacter, Istats {
    public health: number = 50
    public mana: number = 10
    public strength: number = 10
    public defense: number = 5
    constructor(
        public name: string,
        public role: Role
    ) { }

    public attack(target: ICharacter) {
        let verb: string

        switch (this.role) {
            case Role.Swordsman: verb = "attacking"; break
            case Role.Warlock: verb = "cursing"; break
            case Role.Highwayman: verb = "ambushing"; break
            case Role.BountyHunter: verb = "threatening"; break
            default: throw new Error(`${this.role} didn't exist !`)

        }
        console.log(`${this.name} is ${verb} ${target.name}`);

    }
}

const character1 = new Character("Maxwell", Role.Swordsman)
const character2 = new Character("Martin", Role.Highwayman)

// character1.attack(character2)
// character2.attack(character1)

let character = new Character("Maxwell", Role.Swordsman)

let certainlyAcharacter: ICharacter = new Character("Martin", Role.Highwayman)


class Monster implements ICharacter {
    public role = Role.Monster
    constructor(public name: string) { }

    public attack(target: ICharacter) {
        console.log(`${this.name} is attacking the ${target.role} - ${target.name}`);

    }
}

let aHumanCharacter = new Character("Maxwell", Role.Swordsman)
let aMonster = new Monster("STicky Slime")

aHumanCharacter.attack(aMonster)
aMonster.attack(aHumanCharacter)


class BountyHunter extends Character {
    public hostagers: ICharacter[] = []
    constructor(name: string) {
        super(name, Role.BountyHunter)
    }

    public capture(target: ICharacter, successRate: number) {
        const randomNumber = Math.random()
        let message: string
        let targetTitle = `${target.name} the ${target.role}`


        if (randomNumber > (1 - successRate)) {
            this.hostagers = [...this.hostagers, target]
            message = `${this.name} has captured ${targetTitle}`
        } else {
            message = `${this.name} failed to capture ${targetTitle}`
        }
        console.log(message);
    }


    public sellHostages() {
        const totalPrice = this.hostagers.length * 1000
        const hostagesInfo = this.hostagers.map((hostage) => `${hostage.name} the ${hostage.role}`).join('\n');
        console.log(`${this.name} sells all the hostages, including: ${hostagesInfo}
    Receive Gold: $${totalPrice}
    `);
        this.hostagers = []
    }
}

const bountyHunter = new BountyHunter("Maxewll")

const wantedCharacter = new Character("Martin", Role.Highwayman)

const wantedMonster = new Monster("Eikthyrnir")

const desperado = new Character("legendary Joe", Role.Highwayman)

bountyHunter.capture(wantedCharacter, 1)

bountyHunter.capture(wantedMonster, 0.5)

bountyHunter.capture(desperado, 0.01)

bountyHunter.sellHostages()