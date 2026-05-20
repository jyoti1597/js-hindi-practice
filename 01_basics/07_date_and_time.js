//the instant at the midnight at the beginning of January 1, 1970, UTC is called the epoch.

// dates

let myDate = new Date();
console.log(myDate.toString()); // Wed Jun 19 2024 12:00:00 GMT+0000 (Indian Standard Time)
console.log(myDate.toISOString());// 2024-06-19T13:30:08.748Z
console.log(myDate.toLocaleString());// 6/19/2024, 12:00:00 PM
console.log(typeof myDate); // object

//let myCreate = new Date(2026, 0, 1,5,3); // January 1, 2026 // month is 0-indexed
//let myCreate = new Date("2026-01-15"); // month is 1-indexed if we follow yyyy-mm-dd format
let myCreate= new Date("01-14-2026"); // month is 0-indexed if we follow mm-dd-yyyy format

console.log(myCreate.toDateString());// Thu Jan 01 2026

console.log(myCreate.toLocaleString());// 1/1/2026, 5:03:00 AM



let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1718785808748

console.log(myCreate.getTime()); // 1735681380000

console.log(Math.floor(Date.now()/ 1000)); // 1718785808

let newDate = new Date();
console.log(newDate.getMonth() + 1); // 6 (June, since month is 0-indexed)

//console.log(`${newDate.getDay()} and the time `);// 3 and the time 12:00:00 PM (getDay() returns the day of the week, where 0 is Sunday, 1 is Monday, ..., 6 is Saturday)

newDate.toLocaleTimeString('default', {
    weekday: 'long',
}); // 12:00:00 PM
