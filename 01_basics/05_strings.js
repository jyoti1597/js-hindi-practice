const name= "jyoti"
const repoCount = 100

//console.log(name + repoCount + " repos") // Output: jyoti100 repos

console.log(`Hello, my name is ${name} and my repo count is ${repoCount} repos`) // Output: Hello, my name is jyoti and my repo count is 100 repos

// string interpolation - we made placeholder whatever value we want to put in that place we can put it in ${} and it will be replaced by the value of that variable


const gameName = new String("Call of Duty");

// tp access a prototype of a string we can use __proto__ property
console.log(gameName[1].__proto__) // Output: String.prototype

console.log(gameName.length) // Output: 12

console.log(gameName.toUpperCase()) // Output: CALL OF DUTY

console.log(gameName.charAt(1)) // Output: a