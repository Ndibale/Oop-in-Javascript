class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);
        this.yearsOfExperience = _yearsOfExperience;
    }
    code() {
        document.write(`${this.name} is a professional developer`);
    }
}



// Polymorphism
class Animal {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    makeSound() {
        console.log("Generic animal sound!");
    }
}

class Dog extends Animal {
    constructor(_name, _age) {
        super(_name, _age);
    }
    makeSound() {
        super.makeSound();
        document.write(`${this.name} whose age is ${this.age} sounds Wof Wof! `);
    }
}

const a = new Animal("Dog", 4);
a.makeSound();
const b = new Dog("Simba", 2);
b.makeSound();

