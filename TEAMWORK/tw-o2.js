"use strict"

class Person {
    constructor(name){
        this.name = name
    }

    sayName(){
        return this.name
    }
}

class BankAccount extends Person{
    #balance
    constructor(name, balance){
        super(name)
        this.#balance = balance
    }

       deposit(amount){
           console.log(amount);
       return  this.#balance += amount
    }

    withdraw(requiredAmount){
        //  requiredAmount < #balance ? `${requiredAmount}`: "Sorry your balance is not enough"
        if(requiredAmount <= this.#balance){
            return this.#balance -= requiredAmount
        }else{
            return "Sorry you are broke"
        }
    }

    get balance(){
        return this.#balance
    }
}

const person1 = new BankAccount("Ali",5000)
console.log(person1);
console.log(person1.sayName());
console.log(person1.deposit(1000));
console.log(person1.withdraw(6000));
