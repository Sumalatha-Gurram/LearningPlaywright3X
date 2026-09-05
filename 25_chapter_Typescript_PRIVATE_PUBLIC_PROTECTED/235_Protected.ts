class Vehicle {
    protected speed: number = 80;
}

class Car extends Vehicle {
    showSpeed() {
        console.log(this.speed);
    }
}

let car = new Car();

car.showSpeed();