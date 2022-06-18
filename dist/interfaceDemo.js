"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(sentence) {
        console.log(`${sentence} ${this.name}`);
    }
}
class Dog {
    constructor(name) {
        this.name = name;
        this.nickName = "Doggy";
    }
    greet(sentence) {
        console.log(`${sentence} ${this.name}`);
    }
}
let dog = new Dog("Rocket");
console.log(dog.nickName);
dog.greet("Woow from");
let developer = new Person('Kapil');
// developer.name = 'Rohit';
developer.greet('Hello from');
