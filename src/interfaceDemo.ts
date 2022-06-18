interface Naming{
    readonly name: string;
    nickName?: string;
}

interface Greeting extends Naming{
    greet(sentence: string): void;
}

class Person implements Greeting {
    constructor(public name: string) {}
    greet(sentence: string): void {
        console.log(`${sentence} ${this.name}`);
    }
}

class Dog implements Greeting {
    nickName: string = "Doggy";
    constructor(public name: string) {}
    greet(sentence: string): void {
        console.log(`${sentence} ${this.name}`);
    }
}

let dog: Greeting = new Dog("Rocket");
console.log(dog.nickName);
dog.greet("Woow from");

let developer: Greeting = new Person('Kapil');
// developer.name = 'Rohit';
developer.greet('Hello from');