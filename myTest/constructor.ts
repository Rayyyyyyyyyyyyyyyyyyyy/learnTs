

class CPersonalInfo {
    name: string 
    age: number 
    hasPet: boolean 

    constructor(
        name: string = 'maxxx',
        age: number = 30,
        hasPet: boolean = false
        ){
            this.name = name
            this.age = age
            this.hasPet = hasPet
        }
    printInfo(){
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Pet?: ${this.hasPet}
        `);
        
    }
}
let maxInfoFromClass1 = new CPersonalInfo()
console.log(maxInfoFromClass1);
maxInfoFromClass1.printInfo()


let maxInfoFromClass2 = new CPersonalInfo('binn', 200, true)
console.log(maxInfoFromClass2);
maxInfoFromClass2.printInfo()