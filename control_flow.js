// const a = 5, b = 2, c = 'hello';

// // equal to operator
// console.log(a == 5);     // true
// console.log(b == '2');   // true
// console.log(c == 'Hello');  // false

// const a = 3, b = 'hello';

// // not equal operator
// console.log(a != 2); // true
// console.log(b != 'Hello'); 

// const a = 2;

// // strict equal operator
// console.log(a === 2); // true
// console.log(a === '2'); // false

// const a = 2, b = 'hello';

// // strict not equal operator
// console.log(a !== 2); // false
// console.log(a !== '2'); // true
// console.log(b !== 'Hello'); // true


// const a = 3;

// // greater than operator
// console.log(a > 2); // true


// const a = 3;

// // greater than or equal operator
// console.log(a >= 3); //true

// const a = 3, b = 2;

// // less than operator
// console.log(a < 2); // false
// console.log(b < 3); // true


// const a = 2;

// // less than or equal operator
// console.log(a <= 3) // true
// console.log(a <= 2); // true


// const a = true, b = false;
// const c = 4;

// // logical AND
// console.log(a && a); // true
// console.log(a && b);  // false

// console.log((c > 2) && (c < 2)); // false


// const a = true, b = false, c = 4;


// // logical OR
// console.log(a || b); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true


// const a = true, b = false;

// // logical NOT
// console.log(!a); // false
// console.log(!b); // true

// check if the number is positive

// const number = prompt("Enter a number: ");

// // check if number is greater than 0
// if (number > 0) {
//  // the body of the if statement
//   console.log("The number is positive");
// }

// console.log("The if statement is easy");


// program to display text 10 times
// const n = 5;

// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//     console.log(`I love JavaScript.`);
// }


// program to display numbers from 1 to 5
// const n = 5;

// // looping from i = 1 to 5
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     console.log(i);     // printing the value of i
// }


// program to display the sum of natural numbers
// let sum = 0;
// const n = 100

// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);

// program to display the sum of n natural numbers
// let sum = 0;
// const n = 100;

// // looping from i = n to 1
// // in each iteration, i is decreased by 1
// for(let i = n; i >= 1; i-- ) {
//     // adding i to sum in each iteration
//     sum += i; // sum = sum + i
// }

// console.log('sum:',sum);


// program to display numbers from 1 to 5
// initialize the variable
// let i = 1, n = 5;

// // while loop from i = 1 to 5
// while (i <= n) {
//     console.log(i);
//     i += 1;
// }

// program to display numbers
// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// } while(i <= n);

// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum

// let sum = 0;
// let number = 0;

// do {
//     sum += number;
//     number = parseInt(prompt('Enter a number: '));
// } while(number >= 0)

// console.log(`The sum is ${sum}.`);


// program to print the value of i
// for (let i = 1; i <= 5; i++) {
//     // break condition     
//     if (i == 3) {
//         break;
//     }
//     console.log(i);
// }

// nested for loops

// first loop
// for (let i = 1; i <= 3; i++) {

//     // second loop
//     for (let j = 1; j <= 3; j++) {
//         if (i == 2) {
//           break;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// program to print the value of i
// for (let i = 1; i <= 5; i++) {

//     // condition to continue    
//     if (i == 3) {
//         continue;
//     }

//     console.log(i);
// }

// nested for loops

// first loop
// for (let i = 1; i <= 3; i++) {

//     // second loop
//     for (let j = 1; j <= 3; j++) {
//         if (j == 2) {
//           continue;
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// program using switch statement
// let a = 0;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);

// let a = 1;

// switch (a) {
//     case "1":
//         a = 1;
//         break;
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;

//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);


// multiple case switch program
// let fruit = 'apple';
// switch(fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }

// declaring a function named greet()
// function greet() {
//     console.log("Hello there");
// }

// greet()

// program to add two numbers using a function
// declaring a function
// function add(a, b) {
//     console.log(a + b);
// }

// // calling functions
// add(3,4);
// add(2,9);

// program to find the square of a number
// function is declared inside the variable
// let x = function (num) { return num * num };
// console.log(x(4));

// // can be used as variable value for other variables
// let y = x(3);
// console.log(y);

// program to print a text 
// let a = "hello";

// function greet () {
//     console.log(a);
// }

// greet(); // hello

// program to show the change in global variable
// let a = "hello";

// function greet() {
//     a = 3;
// }

// // before the function call
// console.log(a);

// //after the function call
// greet();
// console.log(a); // 3

// function greet() {
//     if (true)
//         let a = "hello"
//     console.log(a); 
// }

// greet();

// // console.log(a); // hello

// program showing local scope of a variable
// let a = "hello";

// function greet() {
//     b = "World"
//     console.log(a + b);
// }

// greet();
// console.log(a + b); // error

// program showing block-scoped concept
// global variable
// let a = 'Hello';

// function greet() {

    // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         var c = 'hello';

//         console.log(a + ' ' + b + ' ' + c);
//     }

//     // variable x cannot be accessed here
//     console.log(a + ' ' + b + ' ' + c);
// }

// greet();

// using test before declaring
// console.log(test);   // undefined
// var test;

// // using test before declaring
// var test;
// console.log(test); // undefined

// a = 5;
// console.log(a);
// var a; // 5

// program to display value
// console.log(a);
// var a = 5;

// var a;
// console.log(a);
// a = 5;

// program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     //var b;
// }

// greet(); // hello
// console.log(b);

// program to display value
// a = 5;
// console.log(a);
// var a; // error

// program to print the text
// greet();

// function greet() {
//     console.log('Hi, there.');
// }

// program to print the text
// greet();

// let greet = function() {
//     console.log('Hi, there.');
// }

// program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countDown(newNumber);
//     }
// }

// countDown(4);


// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        console.log(x)
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}