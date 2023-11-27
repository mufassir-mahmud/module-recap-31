const numbers = [11,22,33,44,55];
const doubled = [];
for(const number of numbers){
    const double = number * 2;
    doubled.push(double)
}
console.log(doubled);

function doubleIt(num){
    console.log('Num Now', num);
    return num*2;
}
const result = numbers.map(doubleIt)
console.log(result);

const nums = [11,22,33]
