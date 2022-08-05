/*
Software components should be open for extension, but not for modification.
*/

//Bad way
class PassengerCar {
    public name: string;
    public color: string;
    public model: string;


    constructor(name: string, color: string, model: string) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
}

class Truck {
    public name: string;
    public countWheels: number;
    public color: string;
    public model: string;


    constructor(name: string, countWheels: number, color: string, model: string) {
        this.name = name;
        this.countWheels = countWheels;
        this.color = color;
        this.model = model;
    }
}

class DoCarMove {
    public movePassengerCar(passengerCar: PassengerCar): void {
        console.log(`${passengerCar.name} moving...`);
    }

    public moveTruck(truck: Truck): void {
        console.log(`${truck.name} moving...`);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

//Good way
interface Car {
    name: string;
    color: string;
    model: string;

    move():void;
}

class PassengerCar1 implements Car {
    color: string;
    model: string;
    name: string;


    constructor(color: string, model: string, name: string) {
        this.color = color;
        this.model = model;
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} moving...`);
    }
}

class Truck1 extends PassengerCar1{

    countWheels: number;

    constructor(color: string, model: string, name: string, countWheels: number) {
        super(color, model, name);
        this.countWheels = countWheels;
    }
}

(function () {
    let a = new Truck1("black", "bmw", "bilaz", 6);
    a.move();
})()