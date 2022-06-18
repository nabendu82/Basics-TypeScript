"use strict";
const emp1 = {
    name: 'John',
    startDate: new Date(),
    skills: ['Cisco', 'Python', 'Perl'],
    access: ['admin', 'user']
};
console.log(emp1);
function moveMammal(mammal) {
    switch (mammal.type) {
        case 'human':
            console.log(`Human is moving at ${mammal.walkingSpeed} km/h`);
            break;
        case 'horse':
            console.log(`Horse is moving at ${mammal.runningSpeed} km/h`);
            break;
    }
}
moveMammal({ type: 'human', walkingSpeed: 10 });
moveMammal({ type: 'horse', runningSpeed: 40 });
//Type Casting
const inputUser = document.getElementById('input-user');
inputUser === null || inputUser === void 0 ? void 0 : inputUser.addEventListener('input', (event) => {
    const target = event.target;
    console.log(target.value);
});
const errorMessages = {
    name: 'Name is required',
    email: 'Email is required',
    password: 'Password is required'
};
function addElements(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addElements(1, 2);
const result2 = addElements('Nabendu', ' Biswas');
const result3 = addElements('Nabendu ', 2);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result2.split(''));
//Nullish Coalescing
const theInput = '';
const storedInput = theInput || 'Default';
console.log(storedInput);
const theInput2 = '';
const storedInput2 = theInput2 !== null && theInput2 !== void 0 ? theInput2 : 'Default 2';
console.log(storedInput2);
const theInput3 = null;
const storedInput3 = theInput3 !== null && theInput3 !== void 0 ? theInput3 : 'Default 3';
console.log(storedInput3);
