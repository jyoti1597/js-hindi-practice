console.log(2>1); // true
console.log(2>=1); // true
console.log(2<1); // false
console.log(2==1); // false
console.log(2 !=2); // true 


console.log('2' > 1); // true
console.log('01' == 1); // true

//avoid this kind of comparison, because it can lead to unexpected results. 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false


// ===
console.log("2" === 2); // false


//the reason is that an equality check == and comparison check >, <, >=, <= work differently.
//comparisons convert null to a number, treating it as 0. That's why null >= 0 is true, while null < 0 is false.