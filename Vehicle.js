class Vehicle {
    constructor(make, model, year) {
        if (typeof make !== 'string' || make === "") {
            throw new Error("The make must be a non-empty string.");
        }
        if (typeof model !== 'string' || model === "") {
            throw new Error("The model must be a non-empty string.");
        }
        if (isNaN(year) || !Number.isFinite(year) || year <= 0) {
            throw new Error("The year must be a finite, nonzero, positive number.")
        }

        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        if (isNaN(capacity) || !Number.isFinite(capacity) || capacity <= 0) {
            throw new Error("The garage capacity must be a finite, nonzero, positive number.")
        }
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle_to_add) {
        if (!(vehicle_to_add instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        } else if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full";
        }
        this.vehicles.push(vehicle_to_add);
        return "Vehicle added!";
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString());
console.log(myFirstCar.honk());
console.log(myFirstCar.numWheels);

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString());
console.log(myFirstMotorcycle.honk());
console.log(myFirstMotorcycle.revEngine());
console.log(myFirstMotorcycle.numWheels);

let garage = new Garage(2);
console.log(garage.vehicles);
console.log(garage.add(new Car("Hyundai", "Elantra", 2015)));
console.log(garage.vehicles);
console.log(garage.add("Taco"));
console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
console.log(garage.vehicles);
console.log(garage.add(new Motorcycle("Harley-Davidson", "Nightster", 2023)));
console.log(garage.vehicles);
