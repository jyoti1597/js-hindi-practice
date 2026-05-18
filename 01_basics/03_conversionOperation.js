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



//**********************operations****************************


let value = 3 ;
let negValue = -value;

console.log(negValue) // -3

let str1 = "hello";
let str2 = " world";
let str3 = str1 + str2;
console.log(str3); // "hello world"

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"
console.log("1" + "2") // "12"
console.log(1 + 2 + "3") // "33"
console.log("1" + 2 + 3) // "123"


console.log((3+4) *5 % 3) // 2

console.log(+true) // 1
console.log(+"") // 0


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCOunter = 100;
++gameCOunter; // 101
console.log(gameCOunter) // 101


// link to study
// https://tc39.es/ecma262/multiplepage/abstract-operations.html#sec-type-conversion