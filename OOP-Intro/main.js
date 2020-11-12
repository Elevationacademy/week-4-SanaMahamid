class Animal {
    constructor(name, numLegs, children) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        this.children.push(name)
    }
}

const dog = new Animal("Liza",4)
console.log(dog.name)
dog.giveBirth("Dolly")
console.log(dog.children)

class Human {
    constructor(name, age, isFriendly){
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const sana = new Human("Sana",26,true)
console.log(sana)

class Vehicle {
    constructor(x, y, speed, fuel){
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel
        Vehicle.carsSold++
    }

    static getInfo(){
        console.log("We've sold " + Vehicle.carsSold + " vehicles.")
    }

    static calculateMoney(){
        console.log("Made " + (Vehicle.carsSold * 30000) + " dollars.")
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed(){
        return this._speed
    }

    set fuel(fuel){
        if(fuel < 0 || fuel > 150){
            console.log("Fuel must be between 0 and 150")
        }
        this._fuel = fuel
    }

    get fuel(){
        return this._fuel
    }
    
}

Vehicle.carsSold = 0
const car1 = new Vehicle(1,1,200)
const car2 = new Vehicle(2,2,220)
Vehicle.getInfo()
Vehicle.calculateMoney()
const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed) // prints undefined
c.speed = 10
console.log(c.speed)
