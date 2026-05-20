// array


const myArray = [0,1,2,3,4,5];
// it resizeable, mix and match arrays

console.log(myArray[0]);

//it create shallow  copy - shallow copy means it copy the reference of the array not the actual array

// deep copy - deep copy means it copy the actual array not the reference of the array

const myArray2 = new Array(1, 2, 3, 4, 5);

console.log(myArray2[0]);

// array methods

myArray.push(6); // add element at the end of the array

console.log(myArray);


myArray.pop(); // remove element from the end of the array

console.log(myArray);

myArray.unshift(-1); // add element at the beginning of the array

console.log(myArray);

myArray.shift(); // remove element from the beginning of the array

console.log(myArray);

console.log(myArray.includes(3)); // check if the array includes the element true or false

console.log(myArray.indexOf(3)); // return the index of the element if it is found in the array otherwise return -1

const newArr = myArray.join();// join the array elements into a string

console.log(newArr); // join the array elements into a string

console.log(typeof newArr); // original array is not modified

// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1, 4); // slice(start, end) - it returns a new array containing the elements from the start index to the end index (exclusive)

console.log(myn1);
console.log("B", myn1); // original array is not modified

const myn2 = myArray.splice(1, 3); // splice(start, deleteCount) - it modifies the original array by removing the specified number of elements starting from the start index and returns the removed elements as a new array

console.log(myn2);
console.log("C", myArray); // original array is modified