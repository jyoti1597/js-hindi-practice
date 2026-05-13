const accountId = 12222;// value cannot chnage
let accountEmail ="jyoti@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// invesgtigation
// accountId = 2

accountEmail= "hc@hx.com";
accountCity= "Mumbai";
accountPassword = "67890";

console.log(accountEmail);

/* Prefer not use var, 
because of its function scope and hoisting behavior, which can lead to unexpected bugs. Use let for variables that may change and const for variables that should remain constant. */



// print console in table format;
console.table([accountId, accountEmail, accountPassword, accountCity]);
