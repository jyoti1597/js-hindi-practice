let score = "33"

console.log(typeof score) // number;
console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber) // number;
console.log(valueInNumber) // number;

//"33"=>33
//"3abc"=>NaN
//true=>1 ;false=>0


let isLoggedIn = 1;
let boleanIsLoggedIn = Boolean(isLoggedIn);


console.log(boleanIsLoggedIn) // true

//1=>true
//0=>false
//""=>false
//"abc"=>true

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber) // "33"
console.log(typeof stringNumber) // string
