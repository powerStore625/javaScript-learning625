function printer() {
    console.log("hello I am rio")
}

printer();

let x = function print() { // fun name not neccessay // x = function() {....}
    console.log("that's new way");
}

x();

let y = () => {
    console.log("hi")
}

y();

let jod = function(a) { // a is parameter
    return a*a;
}
jod(3); // arguments

myFun = () => {
    let a = 20;
    let b = 30;
    return(a+b);
}
console.log(myFun());

//IIFE // function ke calling ko display ke andar store
const display = (function () {
    let a = "welcome to edu";
    return a;
}) ();

console.log(display);

// generator 
let gen = function* () {
    yield 1; // val daalta generator ke andar
    yield "rio";
    yield "hellusination";
}
let gen1 = gen();
console.log(gen1.next().value);

/*
Generator function kya hota hai?

function* (star ke saath function) ek special function hota hai jise generator function kehte hain.

Ye function pause (ruk) kar sakta hai apni execution ko yield keyword ke zariye, aur values ko ek ek karke "generate" karta hai jab aap usse request karte hain.

Yield ka matlab?

yield keyword function execution ko pause karta hai aur ek value return karta hai.

Jab next() call karte hain generator object par, to generator next yield statement tak execute karta hai, wahan rukta hai, aur value deta hai.

Code me kya ho raha hai?

let gen = function* () { ... }
Ye ek generator function define karta hai jo 3 values produce karega:
1, "rio", aur "hellusination".

let gen1 = gen();
Yahan gen() ko call karne par hum ek generator object milta hai gen1.

gen1.next().value
gen1.next() call karne par generator function run hota hai first yield tak aur wahan se value return karta hai.
.value se us returned object me se actual value milti hai.

To, console.log(gen1.next().value); output karega:

1


Kyunki pehla yield statement 1 return kar raha hai.
*/