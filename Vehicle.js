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

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk());
console.log(myFirstVehicle.toString());