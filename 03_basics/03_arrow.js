const user = {
    username: "jyoti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// current context is refer by this keyword.

// in arrow we can not use this keyword

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);// its show empty parenthesis


// when we are node eviroment then this keyword print empty parenthesis

// runing object inside browser that is global object

// function chai(){
//     let username = "jyoti"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//        let username = "jyoti"
//     console.log(this.username);
// }

const chai = () =>{
        let username = "jyoti"
    console.log(this.username);
}// empty parentess

//chai()


// const addTwo = (num1 , num2)=>{
//     return num1 + num2
// }


// parenthesis not required return keyword

//const addTwo = (num1 , num2)=> num1 + num2
//const addTwo = (num1 , num2)=> (num1 + num2)

const addTwo = (num1, num2) => ({username : "jyoti"})

console.log(addTwo(3,4));


//const myArray = [2, 5,3, 7, 8]
