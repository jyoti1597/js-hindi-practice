// how we make object in singleton  or constructor 

//const tinderUser - new Object() // this is the way to create object in js

const tinderUser = {}// non singleton way to create object in js

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object inside object

//nested object for accessing the data
const regularUser = {
    email: "regular@example.com",
    fullname: {
        userfullname: {
            firstname: "john",
            lastname: "doe"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//? protection of data in object that use when the data is not able in the object and we want to avoid the error of undefined

// merge two object in js
const object1 = {1:"a", 2:"b"}
const object2 = {3:"c", 4:"d"}

//const object3 = {object1, object2} // this give array type problem in object3

//const object3= Object.assign(object1, object2) // this is the way to merge two object in js
const object3= Object.assign({}, object1, object2) // this is the way to merge two object in js. {} is used to create a new object but it not needed if we want to merge two object in js but it is good practice to create a new object to avoid the mutation of original object


//console.log(object3); // this is not the way to merge two object in js

const object4 = {...object1, ...object2} // this is the way to merge two object in js using spread operator

//console.log(object4); // this is the way to merge two object in js using spread operator


// basic data come from database

const users = [
    {id: 1, email: "user1@example.com"},
    {id: 2, email: "user2@example.com"}
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

// loop through during values get that may be not exit some times in object and we want to avoid the error of undefined

console.log(tinderUser.hasOwnProperty("name")); // this is the way to check the property is exist in object or not. result come in boolean value true or false