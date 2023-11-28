const numbers = [11,22,33,44,55];
const filter = numbers.filter(num => num> 30);
console.log(filter);
// const numbers = [11,22,33,44,55];
// const filter = numbers.map(num => num> 30);
// console.log(filter);

const playersHight = [55,66,77,64, 57,69,72];
const selected = playersHight.filter(player => player > 80);
console.log(selected);
const friends = ['Mufassir', 'Nomayen', 'Omar', 'Mehedi'];

const Friend = friends.filter(frnd => frnd.length > 6);
console.log(Friend);