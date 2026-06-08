function sayMyName(){
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
}

//sayMyName()

//basics
// function addTwoNumbers(number1, number2){// (numb1, numb2)parameter
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // 1 method
    // let result = number1 +number2
    // return result
    // after return another function or line will not work

    //second method
    return number1 +number2
}

const result = addTwoNumbers(2,"q")//(1,"a")arguments

//console.log("Result:",result);

function loginUserMessage(username = "sam"){
    //if(username ===  undefined){
    if(!username){// ! this will do true value false and false will be true
        console.log("please enter a username")
        return
    }   
    return `${username} just logged in`; // this give undefined and not gove result
    
}

//console.log(loginUserMessage("jyoti"))
//console.log(loginUserMessage())// result will undefined

//... this called rest or speared depend on use
function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username:"sam",
    price: 399
})


//arrays

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));