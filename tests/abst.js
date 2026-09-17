// class car{

//     startEngine(){
//         console.log('engine started')
//     }

//     drive(){
//         this.startEngine();
//         console.log('car is running')
//     }
// }
// let cars = new car()
// cars.drive();

class bike{
    start(){
        console.log('bike is started')
    }
    run(){
        this.start();
        console.log('bike is running')
    }
}
let bi = new bike()
bi.run();