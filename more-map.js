const numbers = [10,12,15,45,32];
const doubled = numbers.map(num => num *2);
console.log(doubled);
const fiveAdded = numbers.map(num => num + 5);
console.log(fiveAdded);

const halves = numbers.map(num => num/2);
console.log(halves);

const friends = ['Mufassir', 'Nomayen', 'Omar', 'Mehedi'];

const length = friends.map(frnd => frnd.length);
console.log(length);
const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);