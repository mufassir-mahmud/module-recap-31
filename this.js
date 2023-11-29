class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping Now`);
    }
    activity(){
        this.sleep()
    }
}

const kodom = new Person('Kodom Ali', 21);
console.log(kodom);
kodom.sleep();
const ohin = new Person('Nomayen Ohin', 23);
console.log(ohin);
ohin.sleep()