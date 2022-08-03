/*
No client should be forced to depend on methods that it does not use.
Many client-specific interfaces are better than one general-purpose interface.
*/

//Bad example
interface Car {
    charge();
    refuel();
}

class Truck implements Car{
    charge() {
        //without realizations
    }

    refuel() {
        console.log('truck refuel')
    }
}

///////////////////////////////////////////////////////////////

//Good example
interface ElectricCar {
    charge();
}

interface RefuelCar {
    refuel();
}

class Tesla implements ElectricCar {
    charge() {
        console.log('tesla is charging...')
    }

}
