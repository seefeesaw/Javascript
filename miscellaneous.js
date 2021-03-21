// JSON syntax
// {
//     "name": "John",
//     "age": 22,
//     "gender": "male",

// }

// // JSON object
// { "name": "John", "age": 22 }

// // JSON array
// [ "apple", "mango", "banana"]

// // JSON array containing objects
// [
//     { "name": "John", "age": 22 },
//     { "name": "Peter", "age": 20 }.
//     { "name": "Mark", "age": 23 }
// ]

// JSON object
// const data = {
//     "name": "John",
//     "age": 22,
//     "hobby": {
// 	"reading" : true,
// 	"gaming" : false,
// 	"sport" : "football"
//     },
//     "class" : ["JavaScript", "HTML", "CSS"]
// }

// // accessing JSON object
// console.log(data.name); // John
// console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

// console.log(data.hobby.sport); // football
// console.log(data.class[1]); // HTML

// JSON object
// const data = {
//     "name": "John",
//     "age": 22
// }

// // accessing JSON object
// console.log(data["name"]); // John

// json object
// const jsonData = '{ "name": "John", "age": 22 }';

// // converting to JavaScript object
// const obj = JSON.parse(jsonData);

// // accessing the data
// console.log(obj); // John


// JavaScript object
// const jsonData = { "name": "John", "age": 22 };

// // converting to JSON
// const obj = JSON.stringify(jsonData);

// // accessing the data
// console.log(obj); // "{"name":"John","age":22}"

// const timeNow = new Date();
// console.log(timeNow); 

// const time1 = new Date(0);

// // epoch time
// console.log(time1); // Thu Jan 01 1970 05:30:00

// // 100000000000 milliseconds after the epoch time
// const time2 = new Date(100000000000)
// console.log(time2); // Sat Mar 03 1973 15:16:40

// ISO Date(International Standard)
// const date = new Date("2020-07-01");

// // the result date will be according to UTC
// console.log(date); 

// short date format "MM/DD/YYYY"
// const date = new Date("03/25/2015");
// console.log(date); // Wed Mar 25 2015 00:00:00 GMT+0545

// // long date format "MMM DD YYYY"
// const date1 = new Date("Jul 1 2020");
// console.log(date1); // Wed Jul 01 2020 00:00:00 GMT+0545

// // month and day can be in any order
// const date2 = new Date("1 Jul 2020");
// console.log(date2); // Wed Jul 01 2020 00:00:00 GMT+0545

// // month can be full or abbreviated. Also month names are insensitive.
// // comma are ignored
// const date3 = new Date("July 1 2020");
// console.log(date3); // Wed Jul 01 2020 00:00:00 GMT+0545

// const date4 = new Date("JULY, 1, 2020");
// console.log(date4); 

// const timeInMilliseconds = Date.now();
// console.log(timeInMilliseconds); // 1593765214488

// const time = new Date;

// // get day of the month
// const date = time.getDate();
// console.log(date); // 30

// // get day of the week
// const year = time.getFullYear();
// console.log(year); // 2020

// const utcDate = time.getUTCDate();
// console.log(utcDate); // 30

// const event = new Date('Feb 19, 2020 23:15:30');
// // set the date
// event.setDate(15);
// console.log(event.getDate()); // 15

// // Only 28 days in February!
// event.setDate(35);

// console.log(event.getDate()); // 7


// const currentDate = new Date();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

// // show in specific format
// let monthDateYear = (month+1) + '/' + date + '/' + year;

// console.log(monthDateYear);

// const date = new Date(2008, 0, 33);
// // Jan does not have 33 days

// console.log(date);

// nested function example

// outer function
// function greet(name) {

//     // inner function
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // calling inner function
//     displayName();
// }

// // calling outer function
// greet('John'); // Hi John


// function greet(name) {
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // returning a function
//     return displayName;
// }

// const g1 = greet('John');
// console.log(g1); // returns the function definition
// g1();

// outer function
// function greet() {

//     // variable defined outside the inner function
//     let name = 'John';

//     // inner function
//     function displayName() {

//         // accessing name variable
//         return 'Hi' + ' ' + name;
      
//     }

//     return displayName;
// }

// const g1 = greet();
// console.log(g1); // returns the function definition
// console.log(g1());

// closure example

// function calculate(x) {
//     function multiply(y) {
//         return x * y;
//     }
//     return multiply;
// }

// const multiply3 = calculate(3)(6);
// const multiply4 = calculate(4)(2);

// console.log(multiply3); // returns calculate function definition
// console.log(multiply4); // NaN

// console.log(multiply3(6)); // 18
// console.log(multiply4(2)); // 8

// let a = 0;
// function sum() {
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// const x = sum();
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(x()); // 3
// a = a + 1;
// console.log(a); // 4

// function sum() {
//     let a = 0;
//     function increaseSum() {

//         // the value of a is increased by 1
//         return a = a + 1;
//     }
//     return increaseSum;
// }

// let x = sum();
// let a = 5;
// console.log(x()); // 1
// console.log(window); // 2
// console.log(a); // 5

function Person() {

    this.name = 'Jack';
    console.log(this);

}

let person1 = new Person();
console.log(person1.name);