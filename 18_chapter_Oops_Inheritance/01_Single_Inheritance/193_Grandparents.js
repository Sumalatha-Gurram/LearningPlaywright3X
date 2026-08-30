class Grandparent {
    house() {
        console.log("Grandparent has a house");
    }
}

class Parent extends Grandparent {
    car() {
        console.log("Parent has a car");
    }
}

class Child extends Parent {
    bike() {
        console.log("Child has a bike");
    }
}

let c = new Child();

c.house();
c.car();
c.bike();