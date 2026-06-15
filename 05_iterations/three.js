// for of

// ["", "", ""]
// [{}, {}, {}]
// iterator is object, array and string
// it which things we want to use loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//this object itself. the map object hold key value pairs and remembers the original insertion order of the keys



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}// this is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


// for of take direct value