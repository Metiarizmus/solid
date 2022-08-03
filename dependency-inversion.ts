/*
High-level modules should not depend on low-level modules, both should depend on abstractions.
Depend upon abstractions, [not] concretions.
*/

//Bad example
class ElectricCar {
    public addElectricity(): void {
        console.log('add electricity to electric car');
    }
}

class PetrolCar {
    public addPetrol(): void {
        console.log('add petrol to car');
    }
}

class RefillStation {

    public el: ElectricCar;
    public petr: PetrolCar;

    constructor() {
        this.el = new ElectricCar();
        this.petr = new PetrolCar();
    }

    public doRefill() {
        this.el.addElectricity();
        this.petr.addPetrol();
    }
}

////////////////////////////////////////////////////////////////////

interface Refill {
    refill(): void;
}

class ElectricCar1 implements Refill {

    refill(): void {
        this.addElectricity();
    }

    public addElectricity(): void {
        console.log('add electricity to electric car');
    }


}

class PetrolCar1 implements Refill {
    public addPetrol(): void {
        console.log('add petrol to car');
    }

    refill(): void {
        this.addPetrol();
    }
}


class RefillStation1 {
    public cars: Refill[];

    constructor(cars: Refill[]) {
        this.cars = cars;
    }

    public doRefill() {
        this.cars.forEach((car) => {
            car.refill();
        })
    }
}