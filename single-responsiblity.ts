/*
Each class should be responsible for a single part or functionality of the system.
*/

//Bad example
class Car {
    public color: string;
    public modal: string;
    public type: string;

    constructor(color: string, modal: string, type: string) {
        this.color = color;
        this.modal = modal;
        this.type = type;
    }

    public getCarFromDb() {
        //some logic...
    }

    public parseCarFromJson() {
        //some logic...
    }

    //and other methods...
}

////////////////////////////////////////////////////////////////////////////////////////////

//Good example
class Car1 {
    public color: string;
    public modal: string;
    public type: string;

    constructor(color: string, modal: string, type: string) {
        this.color = color;
        this.modal = modal;
        this.type = type;
    }
}

class ServiceCar {
    public car:Car1;

    constructor(car: Car1) {
        this.car = car;
    }

    public getCarFromDb() {
        //some logic...
    }
}

class ParserCarJson {
    public car:Car1;

    constructor(car: Car1) {
        this.car = car;
    }

    public parseCarFromJson() {
        //some logic...
    }
}