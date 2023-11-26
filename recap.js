
/* 

1. var-let- const
2. default parameter
3. template string
4. arrow function
5. destructuring
*/

const a = 54;
const numbers = [11,22,33,44,55];
const person = {
    name: 'Mufassir '
}

const message = `Hi, ${person.name} has a ${a} acces to ${numbers[1]}`;
console.log(message);

const square = x => x*x;
const sum = (a,b) => a+b;

const {age, name,...others} = {x: 2,a:5, age:21, name:ohin}