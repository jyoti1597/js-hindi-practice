//const score = 400;

//const balance = new Number(100);
// console.log(score);
// console.log(balance);

//console.log(score.toString().length);
//console.log(balance.toFixed(2));

//const otherNumber = 13.24159;
//console.log(otherNumber.toPrecision(4)); // how many digits to show in total, including the ones before the decimal point. 

//const hundered = 100000;
//console.log(hundered.toLocaleString('en-IN')); 
// Output: 100,000 (it will format the number with commas as thousands separators) . it basied on indian locale it will show 1,00,000


//++++++++++++++++++++++++++math++++++++++++++++++++++++++++++
// this come in default with js, we can use it without importing it.

console.log(Math);
console.log(Math.abs(-5)); // 5 minus sign will be removed
console.log(Math.round(4.7)); // 5 it will round off 
console.log(Math.ceil(4.4)); // 5 it select top number means if 4.2 it will select 5
console.log(Math.floor(4.4)); // 4 it select bottom number means if 4.2 it will select 4
console.log(Math.max(1, 5, 3)); // 5 it will return the maximum number
console.log(Math.min(1, 5, 3)); // 1 it will return the minimum number

console.log(Math.random()); // it will return a random number between 0 and 1 maxmin we get 0 so in that case we will do below formula case

console.log((Math.random() * 10) + 1); // it will return a random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // it will return a random number between 1 and 10


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it will return a random number between 10 and 20