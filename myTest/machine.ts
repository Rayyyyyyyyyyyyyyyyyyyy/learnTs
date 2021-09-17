
type TUSerAccount = {
    account: string
    password: string
    money: number
}

interface AccountSystem {
    signIn(account: string, password: string): void

    sigOut(): void
}
interface TransactionSystem {
    deposit(amount: number): void

    withdraw(amount: number): void
}
interface ICashMachine extends TransactionSystem, AccountSystem { }


class CashMachine implements ICashMachine {
    constructor(private users: TUSerAccount[]) { }
    private currentUser: TUSerAccount | undefined

    signIn(account: string, password: string) {
        for (let i = 0; i < this.users.length; i++) {
            const user = this.users[i]
            if (user.account == account && user.password == password) {
                this.currentUser = user
                break
            }
        }
        if (this.currentUser == undefined) {
            throw new Error("user not found")
        }
    }
    sigOut() {
        this.currentUser = undefined
    }
    deposit(amount: number) {
        if (this.currentUser != undefined) {
            this.currentUser.money += amount
        } else {
            throw new Error("no user signed in")
        }
    }
    withdraw(amount: number) {
        if (this.currentUser != undefined) {
            this.currentUser.money -= amount
        } else {
            throw new Error("no user signed in")
        }
    }

}


function printAccountInfo(input: TUSerAccount | undefined) {
    if (input == undefined) {
        console.log("no user");
    } else {
        console.log(`
        current user: ${input.account}
        money: ${input.money}
        `);
    }
}

// const machine = new CashMachine()
// console.log("initialized:  ");
// printAccountInfo(machine.currentUser)


// machine.signIn('maxxx', '12123')
// console.log('signin')
// printAccountInfo(machine.currentUser);

// machine.withdraw(900)
// console.log('After withdraw  ');
// printAccountInfo(machine.currentUser)


// machine.sigOut()
// console.log('signed out   ');
// printAccountInfo(machine.currentUser)
