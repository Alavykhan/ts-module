{
    // 

    // Abstraction can be used in two types: 1. interface 2. Abstract

    // idea:
    interface Vehicle1{
        startCar(): void;
        stopCar(): void;
        move(): void;
    }

    // implementation:

    class Car implements Vehicle1{
        startCar(): void {
            console.log(`I'm starting the car`)
        };
        stopCar(): void {
            console.log(`stop the car`)
        }
        move(): void {
            console.log(`i'm moving the car`)
        }
        test(){
            console.log(`i'm just testing the car`)
        }
    }

    const toyotaCar= new Car();
    toyotaCar.stopCar()


    // abstract class
    // idea
 abstract class car2{
    abstract startCar(): void;
    abstract stopCar(): void;
    abstract move(): void;
    test(){

    }
 }

//  implementation

class toyotaCar2 extends car2{
    startCar(): void {
        console.log(`start toyota car`)
    }
    stopCar(): void {
        console.log(`stop car`)
    }
    move(): void {
        console.log(`car is moving`)
    }
}

const res2= new toyotaCar2()
res2.startCar()




    // 
}