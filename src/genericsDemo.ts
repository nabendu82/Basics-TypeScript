//Array Type
const occupation: Array<string> = [];

//Promise type
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        num > 0.5 ? resolve('It is Success') : reject('It is Fail');
    }, 2000);
})

promise
    .then(data => console.log(data.split('')))
    .catch(err => console.log(err));

//Generic Function
function mergeObject<T extends object, U extends object>(obj1: T, obj2: U) {
    return { ...obj1, ...obj2 };
}

const merged = mergeObject({ name: 'John' }, { age: 30 });
console.log(merged);

//Generic Classes
class StoreData<T extends string | number>{
    constructor(public data: T[]) { }

    removeData(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getData() {
        return this.data;
    }
}

const stringData = new StoreData<string>(['John', 'Doe', 'Smith']);
const numberData = new StoreData<number>([21, 12, 31]);
stringData.removeData('John');
console.log(stringData.getData());
console.log(numberData.getData());

//Generic Utility
const family: Readonly<string[]> = ['Nabendu', 'Shikha', 'Hriday'];
// family.push('Raj');
// family.pop();
