class SingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean,
    ) {

    }
    private static Instace: SingletonPerson =
        new SingletonPerson("maxxw", 200, false)

    static getInstance(): SingletonPerson {
        return this.Instace
    }
}

const uniquePerson = SingletonPerson.getInstance()

console.log(uniquePerson);
console.log(uniquePerson.age);
console.log(uniquePerson.name);
console.log(uniquePerson.hasPet);

class SingletonC {
    private constructor() { }

    private static Instance: SingletonC = new SingletonC()

    static getInstance(): SingletonC {
        return this.Instance
    }
}