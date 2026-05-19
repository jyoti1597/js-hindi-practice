//Primitive

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


const score = 100
const scoreValue =100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId) // Output: false

const bigNumber = 9007199254740991n


//what is javascript type  static or dynamic?JavaScript is a dynamic type language, which means that the type of a variable can change at runtime. In the example above, the variable `score` is assigned a boolean value (`false`), but it can be reassigned to a different type (e.g., a number, string, etc.) later in the code without causing an error.

//Reference(Non-primitive)

//Array, Object, Function


const heros = ['Batman', 'Superman', 'Wonder Woman'];

const myObj = { name: 'John', age: 30, city: 'New York' };

const myFunc = function() {
    console.log('Hello, World!')
}   

// find the type of data

console.log(typeof heros) // Output: object


// in return all they give object as a type of data


// https://262.ecma-international.org/5.1/#sec-11.4.3