// CLASS AND OBJECT

let name = ["vijay", "anand", "kishore"]
let age =  [25, 23, 22]

class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    
    }

    personDetail(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

let person1 = new Person("Vijay", 22)
let person2 = new Person("Vijay1", 23)

person1.personDetail()
person2.personDetail()