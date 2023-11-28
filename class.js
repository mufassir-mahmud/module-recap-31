const products = [
    {id:1, name: 'walton', price: 43000},
    {id:2, name:'redmi', price: 20000 },
    {id:3, name: 'bottle', price: 150},
    {id:4, name: 'Pen', price:7}
]

class Product{
    country = "Bangladesh";
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`Talking About ${talk}`);
    }
}

const lenovo = new Product('Buying Lenovo');
console.log(lenovo);
lenovo.speak('Oba kita kow');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const masud = new Teacher('Masud', 'Math');
console.log(masud);

const jhankar = new Teacher('Jhankar Mahbub', 'MERN');
console.log(jhankar);