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
console.log(gameName.indexOf("o")) // Output: 5

const newString = gameName.substring(0, 5); // give and start number and end number and it will give you the string between those numbers
console.log(newString); // Output: Call

const newString2 = gameName.slice(0, -5); // give and start number and end number and it will give you the string between those numbers and also it can take negative numbers as well for reverse counting
console.log(newString2); // Output: Call

console.log(gameName.trim()) // Output: Call of Duty (it will remove the extra spaces from the string)


const url = "https://www.youtube.com/hitesh%20choudhary"

console.log(url.replace("%20", "-")) // Output: https://www.youtube.com/hitesh-choudhary (it will replace the %20 with -)

console.log(url.includes("sinder")) // Output: https://www.youtube.com/hitesh%20choudhary false (it will check if the string includes the word "sinder" or not)

console.log(url.split("/")) // Output: [ 'https://www.youtube.com/hitesh', 'choudhary' ] (it will split the string into an array based on the separator we provide)