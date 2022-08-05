/*
Objects of a superclass should be replaceable with objects of its subclasses without breaking the system.
*/


abstract class Car {

    private readonly countPassenger: number;


    constructor(countPassenger: number) {
        this.countPassenger = countPassenger;
    }

    getCountPassenger(): number {
        return this.countPassenger
    }
}

class Tractor extends Car {

}

class SportCar extends Car {

}

class PassengerCar extends Car {

}


const tractor1 = new Tractor(1);
const tractor2 = new Tractor(2);

const sportCar = new SportCar(2);

const passCar1 = new PassengerCar(4);
const passCar2 = new PassengerCar(2);

const cars = [tractor1, tractor2, sportCar, passCar1, passCar2];

function getCarsByCountPassengers(arr: Car[], count: number): Car[] {
    return arr.filter(car => car.getCountPassenger() === count);
}

console.log(getCarsByCountPassengers(cars, 2));
