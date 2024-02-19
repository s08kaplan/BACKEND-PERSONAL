class Vehicles {
  constructor(numberOfTyres, gear, year, model) {
    this.numberOfTyres = numberOfTyres;
    this.gear = gear;
    this.year = year;
    this.model = model;
  }
  getAgeOfVehicle() {
    let message
    const date = new Date().getFullYear() - this.year
    if(date < 1){
      return message = "brand new"
    }else if(date == 1){
      return message = "1 year old"
    }else {
      return message = `${date} years old`
    }
  }
  getInfo() {
    return `your vehicle has ${this.numberOfTyres} tyres, ${this.gear} gears, ${this.model} and ${this.getAgeOfVehicle()}`;
  }
}

class Car extends Vehicles {
  constructor(numberOfTyres, gear, year, model, color) {
    super(numberOfTyres, gear, year, model);
    this.color = color;
  }
}

class Trucks extends Vehicles{
    constructor(numberOfTyres,gear,year,model,load){
        super(numberOfTyres,gear,year,model)
        this.load = load
    }
}

class Bus extends Vehicles {
  constructor(numberOfTyres, gear, year, model, numberOfPassengers){
    super(numberOfTyres, gear, year, model)
    this.numberOfPassengers = numberOfPassengers
  }
}

const car1 = new Car(4, 5, 2010, "BMW", "white")
console.log(car1);
console.log(car1.getAgeOfVehicle());

const truck1 = new Trucks(20, 10, 2019, "MACK", "10tonnes")
console.log(truck1);
console.log(truck1.getInfo());