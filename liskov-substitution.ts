/*
Objects of a superclass should be replaceable with objects of its subclasses without breaking the system.
*/

//bad example
class Car {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(): void {
        console.log(`${this.name} move`);
    }

    public refuel(): void {
        console.log(`${this.name} refuel`);
    }
}

class ElectricCar extends Car {

    //because this is a electric car. It runs on electricity
    refuel() {
        throw new Error('Not implemented')
    }

    charge(): void {
        console.log(`${this.name} charge...`)
    }
}

(function () {
    let electricCar: ElectricCar = new ElectricCar("tesla");
    console.log(electricCar.charge());
})()

///////////////////////////////////////////////////////////////////////////////////////

//Good example
interface GasPoweredCar {
    name: string;

    refuel(): void;
}

interface ElectricPoweredCar {
    name: string;

    charge(): void;
}

class ElectricCar1 implements ElectricPoweredCar {

    name: string;

    charge(): void {
        console.log(`${this.name} charge...`)
    }

}


