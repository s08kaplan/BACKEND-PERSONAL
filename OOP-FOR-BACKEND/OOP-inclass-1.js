// "use strict";

const { type } = require("os")

// // ! bir object veya class içinde tanımlanmış fonksiyona metod denir

// // const exampleObject = {
// //     methodName: function() {
// //         return "methodName is a method"
// //     },
// //     methodAlternative() {
// //         return " this is a method"
// //     }
// // }

// // const Car = {
// //   brand: "Ford",
// //   model: "Mustang",
// //   year: 1967,
// //   isAutoGear: true,
// //   colors: ["white", "red"],
// //   details: {
// //     color1: "white",
// //     color2: "red",
// //     engineSize: 4900,
// //   },
// //   startEngine: function () {
// //     return "engine runned";
// //   },
// // };

// // console.log(Car.brand);
// // console.log(Car.colors[0]);
// // console.log(Car.details.color1);
// // console.log(Car.startEngine());

// // ! Alternative style

// // console.log(Car["startEngine"]());
// // =====================================================

// // ! THIS KEYWORD
// // const Car = {
// //     brand: "Ford",
// //     model: "Mustang",
// //     year: 1967,
// //     isAutoGear: true,
// //     colors: ["white", "red"],
// //     details: {
// //       color1: "white",
// //       color2: "red",
// //       engineSize: 4900,
// //     },
// //     startEngine: function () {
// //       return "engine runned";
// //     },
// //     getDetails: function() {
// //         // return this
// //         // return this.brand + " " + this.model + " " + this.year
// //         return this.startEngine()
// //     },
// //     arrowMethod: () => {
// //         return this // Arrow func. is a global scope that's why this keyword does NOT work here
// //     }
// //   };

// //   console.log(Car.getDetails());
// //   console.log(Car.arrowMethod());

// // ! ARRAY DESTRUCTURING

// const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

// // ? aRRAY LERDE DEST. İŞLEMİ YAPARKEN sıralama ÖNEMLİDİR

// const [var0, var1, var2, ...var9] = testArray
// console.log(var9);

// //? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
// const [firstItem, secondItem, ...others] = testArray
// console.log(firstItem, secondItem, others)

// //? Sıralama Önemli!
// const [var0, var1, var2, ...var9] = testArray
// console.log(var0, var1, var2, var9)

// //? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
// const [firstItem, secondItem, ...others] = testArray
// console.log(firstItem, secondItem, others)

// //? Spread Operator (Dağıtıcı) (Eşittirin sağ tarafında)
// const newArray = [...testArray, 'value5', 'value6']
// // const newArray = ['value0', 'value1', 'value2', 'value3', 'value4', 'value5', 'value6']
// console.log(newArray)


// const Car = {

//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'white',
//         color2: 'red',
//         engineSize: 4900
//     },
//     startEngine: function() {
//         return 'Engine Runned.'
//     }
// }

// const { year, brand, model, ...others} = Car
// console.log(year,model, brand, others);

// ! SPREAD OPERATOR

// const newObj = {
//     ...Car,
//     newKey: "new-value"
// }

// console.log(newObj);


// ! OBJECT TO JSON

// const json = JSON.stringify(Car)
// console.log(json);


// ! JSON TO OBJECT

// const obj = JSON.parse(json)
// console.log(obj);


// !  OBJECT TO ARRAY

// const arrKey = Object.keys(Car)
// console.log(arrKey);


// const arrValues = Object.values(Car)
// console.log(arrValues);


// const arrAll = Object.entries(Car)
// console.log(arrAll);

// // * CONSTRUCTOR

// const constructorFunction = function() {
//     this.property = "Haci Murad"
// }

// ! NEW KEYWORD

const carConstructor = function(brand, model, year) {
this.brand = brand
this.model = model
this.year = year

this.startEngine = function () {
    return "Engine runned!";
}

}


const newCar = new carConstructor("Haci Murad", "124", 1969)

console.log(typeof newCar, newCar);
console.log(newCar.brand);
console.log(newCar.startEngine());

const newCar2 = new carConstructor("Sahin", "s", 1990)
console.log(newCar2.brand);
console.log(newCar2.startEngine());