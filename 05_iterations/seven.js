const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//consr newNumns = myNumers.mao( (num) => num +10)
// const newNums = myNumers.map( (num) => { return num + 10})

//this called chaining. whatever value whe have in first map that pass in second.
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);