"use strict";

// class Person {
// constructor(firstName, lastName, occupation, salary, department){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.occupation = occupation
//     this.salary = salary
//     this.department = department
// }
// get personInfo(){
//     return
// }
// }

// **********************************************

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- */
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// !Class Declaration:

// class PascalCaseName{....}

// ! Class Expression:

// const PascalCaseName = class {
//     undefinedProperty // only definition(undefinedProperty = undefined)
// propertyName = "value"

// !"new Class" ile obje oluştururken parametre göndermek için "constructor isminde bir netod kullanırız"
// constructor(parametre1, parametre2 = "default-value"){
// this.parametre1 = parametre1
// this.parametre2 = parametre2
// }

// methodName1() {
//     return this
// }
// }

// ! INSTANCE = Bir class'tan türetilen objedir

// const PascalCaseInstanceName = new PascalCaseName("school", "book")
// console.log(PascalCaseInstanceName);
// console.log(PascalCaseInstanceName.parametre1);
// console.log(PascalCaseInstanceName.parametre2);
// console.log(PascalCaseInstanceName.methodName1());

// class Car {

// isRunning = false

//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true
//     console.log("Engine is running");
//     return this.isRunning
//   }
// }


// const Ford = new Car("Ford", "Mustang", 1967)
// console.log(Ford);
// Ford.runEngine()
// console.log(Ford)


// const Mercedes = new Car("Mercedes", "CLK200", 2010)
// console.log(Mercedes);
// const Renault = new Car("Renault", "TOROS", 1990)
// console.log(Renault);

// ! INHERITANCE 
//? THIS: Child Class - SUPER: Parent Class

// class Vehicle {
//     vehicleActive = false

// constructor(VehicleType){
//     this.VehicleType = VehicleType
// }

// }

// class Car extends Vehicle{

// isRunning = false

//   constructor(brand, model, year, VehicleType) {
    //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
//     super(VehicleType)
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true
//     console.log("Engine is running");
//     return this.isRunning
//   }
// }

// const Renault = new Car("Renault", "TOROS", 1990)
// console.log(Renault);


// class Accessory extends Car {
//     constructor(accessoryName, brand, model, year){
//         super(brand, model, year)
//         this.accessoryName = accessoryName
//     }
// }

// const TorosClimate = new Accessory("Cam Ac", "Renault", "TOROS", 1990 )

// console.log(TorosClimate);


//? Polymorphism: Miras aldığımız sınıfın özellik/methodlarını yeniden yazabilme.
//? Override: Üst metodla aynı isim ve yapıda yeni bir metod yazma. (ezme / iptal etme / önceliğini alma)
//? Overload: Üst metodla aynı isimde ama farklı yapıda (farklı adet/tip) yeni method oluşturma. (aynı anda ikisi de aktif) (JS desteklemez)

// class Vehicle {
//     vehicleActive = false

// constructor(VehicleType){
//     this.VehicleType = VehicleType
// }

// getDetails() {
//     console.log("Vehicle.getDetails runned");
//     return this.VehicleType
// }

// }

// class Car extends Vehicle{

// isRunning = false

//   constructor(brand, model, year, VehicleType) {
//     //? super() parametresi en tepede olmalı (Önce parent constructor çalıştırılmalı)
//     super(VehicleType)
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   runEngine() {
//     this.isRunning = true
//     console.log("Engine is running");
//     return this.isRunning
//   }

//   getDetails() {
//     console.log("Car.getDetails runned");
//     // return this.VehicleType
//     return super.getDetails()
//   }

// }

// const Renault = new Car("Renault", "TOROS", 1990)
// console.log(Renault.getDetails());

//? JS PUBLIC: Genel erişime açık.
//? JS PROTECTED: Sadece Tanımlı olduğu class ve Inherit edilen child-class erişebilir.
//? -* JS/ES12 öncesi desteklemiyor: Genel erişime açık ama lütfen dokunmayın :) 
//? JS PRIVATE: Sadece tanımlı olduğu class içinde erişim var.



// class Vehicle {

    // #privateProperty = 'private-value' // PRIVATE PROPERTY
    // #privateMethod() { return this } // PRIVATE METHOD

    // _protectedProperty = 'protected-value' // PROTECTED PROPERTY
    // _protectedMethod() { return this } // PROTECTED METHOD

//     vehicleIsActive = false
//     #privateProperty = "private-value"

//     constructor (vehicleType) {
//         this.vehicleType = vehicleType
//     }

//     #privateMethod() {
//         return this
//     }

//     getDetails() {
//         console.log('Vehicle.getDetails runned.')
//         return this.vehicleType
//     }
// }

// class Car extends Vehicle { // Inheritance

//     isRunning = false

//     constructor (brand, model, year, vehicleType = 'Car') {
//         super(vehicleType)
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine runned')
//         return this.isRunning
//     }
    
//     getDetails() {
//         console.log('Car.getDetails runned.')
//         // return this
//         return super.getDetails() // Ezdiğimiz methodu çalıştırma yöntemi.
//     }
// }

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford.getDetails())

//? GETTER & SETTER METHODS: Görevi veri getirme (getter) ve veri güncelleme (setter) olan metodlardır.
//? "STATIC" KEYWORD: Class'dan direkt erişim. (Instance erişemez.)

// class Car {

//     isRunning = false
// #price
//     constructor (brand, model, year) {
//         this.brand = brand
//         this.model = model
//         this.year = year
//     }

//     runEngine() {
//         this.isRunning = true
//         console.log('Engine runned')
//         return this.isRunning
//     }

//     set setPrice(newPrice){
//         this.#price = newPrice
//     }

//     get getPrice(){
//         return this.#price
//     }

//         //? Direkt class ile erişmek istediklerimizi static ile işaretleriz.
//     //? Statik property veya methodlara intance ile erişilmez.
// static staticProp = "static-value"
//   //? Static methodlarda this ifadesi sadece statikleri çağırır.
// static staticMethod() {
//     console.log("Static method is running");
//     return this
// }

// }

// const Ford = new Car('Ford', 'Mustang', 1967)
// console.log(Ford)

//? ABSTRACTION: Soyutlama/Modelleme (Class ile obje üretebilme. Aynı amaç için kullanılan değişken ve methodların bir class içinde yazıyor //olması)
//? ENCAPCULLATION: Kapsülleme/Ayrıştırma (Kodların gizliliği, private değişkenlere erişilemiyor olması ve birbirinden bağımsız çalışmaları.)