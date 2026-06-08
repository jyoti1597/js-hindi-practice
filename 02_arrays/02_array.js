const marvel_heros = [
    "thoer",
    "ironman",
    "spiderman",
    "hulk",
    "captain america"
];
const dc_heros = [
    "superman",
    "batman",
    "wonder woman",
    "flash",
    "aquaman"
]

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);// does not merge like that, it adds the whole array as a single element

//console.log(marvel_heros[3],[1]);// hulk and flash


const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);// does not change the original array, it returns a new array with the merged elements


const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);// does not change the original array, it returns a new array with the merged elements. each element will be spreaded out in the new array. it is a more modern way to merge arrays.


const another_array = [1,2,3,[4,5, 6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);// it flattens the array to a single level. it takes an argument which is the depth of flattening. if we pass Infinity, it will flatten the array to any level. if we pass 1, it will flatten only one level. if we pass 2, it will flatten two levels and so on.


console.log(Array.isArray("hello"));// true
console.log(Array.from("hello"));// true
console.log(Array.from({name: "John"}));// true interesting, it converts the string into an array of characters and the object into an array of its values. it is a static method that creates a new array from an array-like or iterable object.


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// it creates a new array from the arguments passed to it. it is a static method that creates a new array from a variable number of arguments, regardless of number or type of the arguments. it is different from Array.from() which creates an array from an array-like or iterable object.