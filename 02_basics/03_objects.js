//singleton object- through constructor it is possible to create

//object literals

const mySym= Symbol("key1");

const JsUser = {
    name: "John",
    age:18,
    location: "India",
    email:"jyoti@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday"],
    [mySym]:"myValue"
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);// right way to access the property of an object

//console.log(JsUser[mySym]);// to access the symbol property of an object

JsUser.email = "k@mail.com";
//console.log(JsUser.email);
//Object.freeze(JsUser);// to make the object immutable or fresseze the object
JsUser.email = "h@mail.com";
//console.log(JsUser.email);// it will not change the email property of the object because the object is frozen


//add function in an object

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);// this keyword is used to access the property of the object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// we mostly use . instead of [] to access the property of an object but when we have to access the property of an object which is a symbol then we have to use [] to access the property of an object.