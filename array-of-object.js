const products = [
    {id:1, name: 'walton', price: 43000},
    {id:2, name:'redmi', price: 20000 },
    {id:3, name: 'bottle', price: 150},
    {id:4, name: 'Pen', price:7}
]
// map
const name = products.map(product => product.name);
console.log(name);
const price = products.map(product => product.price);
console.log(price);
// forEach
products.forEach(p => console.log(p));
// filter
const filter = products.filter(product => product.price < 100);
console.log(filter);
// find
const find = products.find(p => p.price > 10000);
console.log(find);
// reduce

// const total = products.reduce((acum, current) => acum+current.price, 0);
// console.log(total);

const total = products.reduce((acum,current) => acum + current.price, 0);
console.log(total);