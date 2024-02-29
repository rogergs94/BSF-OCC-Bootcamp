//Encapsulation

//We are going to create a class followed by the name of the object that we want to create. Inside we will create properties
class BankAccount {
    constructor(accountNumber, balance){
        this.accountNumber = accountNumber; 
        this.balance = balance;
    }//Now we create methods. A method can accept a parameter

    deposit(amount){
        this.balance += amount;
    }

    withdrawal(amount){
        if (this.balance >= amount) {
            this.balance -= amount;
        }else{
            console.log("Insufficient balance!");
        }
    }

    getAccountInfo(){
        return `Your account number is ${this.accountNumber}, your balance is ${this.balance}`;
    }
}
//Up to here, this is not an object, it is a blueprint of the object.

const myAccount = new BankAccount("123456789", 1000); //the bankaccount has 2 parameters according to the constructor
const regelAccount = new BankAccount("987654321", 6000);

//What if I want to deposit 500 in Regel's account?

regelAccount.deposit (500);
console.log(regelAccount.getAccountInfo());

regelAccount.withdrawal(6501);
console.log(regelAccount.getAccountInfo());

regelAccount.withdrawal(501);
console.log(regelAccount.getAccountInfo());

//What if I want to add 10000 in my account?

myAccount.deposit(10000);
console.log (myAccount.getAccountInfo());