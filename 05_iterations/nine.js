//const sumWithInitial = array1.reduce((accumulator , currentValue) => accumulator +currentValue, initialValue);
//acumulator - empty variable 
// currentValue - array value
// first time loop run then accumulator value will 0 which is initial value. secind time accumulaator _ currentvalue that is like 0+ 1= 1, 1+ 2 (array value) = 3 that assign again in accumlator first.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);