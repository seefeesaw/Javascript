// let y = 6, z = 7;
// let x; // x is the name of the variable

// console.log(x); // undefined

// 5 is assigned to variable x
// let x = 5; 
// console.log(x); // 5

// // vaue of variable x is changed
// x = 3; 
// console.log(x); // 3

// let y = "hi";
// let Y = 5;

// console.log(y); // hi
// console.log(Y); // 5

// const x = 5;
// x = 10;  // Error! constant cannot be changed.
// console.log(x)

// const x;  // Error! Missing initializer in const declaration.
// x = 5;
// console.log(x)

// let sum = 44;
// console.log(sum);

// program to print a sentence

// passing string
// console.log("I love JS");

// program to print variables values

// storing values
// const greet = 'Hello';
// const name = 'Jack';

// console.log(greet + ' ' + name);

//strings example
// const name = 'ram';
// const name1 = "hari";
// const result = `The names are ${name} and ${name1}`;
// console.log(result)

// const number1 = 3/0;
// console.log(number1); // returns Infinity

// const number2 = -3/0;
// console.log(number2); // returns -Infinity

// // strings can't be divided by numbers
// const number3 = "abc"/3; 
// console.log(number3);

// BigInt value
// const value1 = 900719925124740998n;

// // Adding two big integers
// const result1 = value1 + 1n;
// console.log(result1); // returns "900719925124740999n"

// const value2 = 900719925124740998n;

// // Error! BitInt and number cannot be added
// const result2 = value2 + 1; 
// console.log(result2)


// const dataChecked = true;
// const valueCounted = false;

// let name;
// console.log(name);

// let name = undefined;
// console.log(name); // returns undefined

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');
// console.log(value1)
// console.log(value1)

// const student = {
//     firstName: 'ram',
//     lastName: null,
//     class: 10
// };
// console.log(student)

// data is of undefined type
// let data;

// // data is of integer type
// data = 5;

// // data is of string type
// data = "JavaScript Programming";

// const name = 'ram';
// console.log(typeof(name)); // returns "string"

// const number = 4;
// console.log(typeof(number)); //returns "number"

// const valueChecked = true;
// typeof(valueChecked); //returns "boolean"

// const a = null;
// typeof(a); // returns "object"

// let x = 5;
// let y = 3;

// // addition
// console.log('x + y = ', x + y);

// // subtraction
// console.log('x - y = ', x - y);

// // multiplication
// console.log('x * y = ', x * y);

// // division
// console.log('x / y = ', x / y);

// // remainder
// console.log('x % y = ', x % y);

// // increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // x returns 6 and then increases by 1
// console.log('x = ', x);

// // decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // x returns 6 and then increases by 1
// console.log('x = ', x);



// const a = 3, b = 2;
// console.log(a > b);

// equal operator
// console.log(2 == 2); // true
// console.log(2 == '2'); // true

// // not equal operator
// console.log(3 != 2); // true
// console.log('hello' != 'Hello'); // true

// // strict equal operator
// console.log(2 === 2); // true
// console.log(2 === '2'); // false

// // strict not equal operator
// console.log(2 !== '2'); // true
// console.log(2 !== '2'); // false// logical AND
// console.log(true && true); // true
// console.log(true && false); // false

// // logical OR
// console.log(true || false); // true

// // logical NOT
// console.log(!true); 

// concatenation operator
// console.log('hello' + 'world');

// let a = 'JavaScript';

// a += ' tutorial';  // a = a + ' tutorial';
// console.log(a);

// name = "Jack";

// // // printing name on the console
// // console.log("Hello " + name);name = "Jack";
// name = "Jack";
// console.log("Hello " + name);  // printing name on the console 

/* The following program contains the source code for a game called Baghchal. 

Baghchal is a popular board game in Nepal where two players choose either sheep or tiger. It is played on a 5x5 grid.

For the player controlling the tiger to win, they must capture all the sheep. There are altogether 4 tigers on the board.

For the sheep to win, all tigers must be surrounded and cornered so that they cannot move. The player controlling the sheep has 20 sheep at his disposal.
*/


// numeric string used with + gives string type
// let result;

// result = '3' + 2; 
// console.log(result) // "32"

// result = '3' + true; 
// console.log(result); // "3true"

// result = '3' + undefined; 
// console.log(result); // "3undefined"

// result = '3' + null; 
// console.log(result); // "3null"


// numeric string used with - , / , * results number type

// let result;

// result = '4' - '2'; 
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2

// non-numeric string used with +, - , / , * results to NaN

// let result;

// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN

// if boolean is used, true is 1, false is 0

// let result;

// result = '4' - true;
// console.log(result); // 3

// result = 4 + true;
// console.log(result); // 5

// result = 4 + false;
// console.log(result); // 4

// null is 0 when used with number
// let result;

// result = 4 + null;
// console.log(result);  // 4

// result = 4 - null;
// console.log(result);  // 4

// Arithmetic operation of undefined with number, boolean or null gives NaN

// let result;

// result = 4 + undefined;
// console.log(result);  // NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN


// let result;

// // string to number
// result = Number('324');
// console.log(result); // 324

// result = Number('324e-1')  
// console.log(result); // 32.4

// // boolean to number
// result = Number(true);
// console.log(result); // 1

// result = Number(false);
// console.log(result); // 0

// let result;
// result = Number(null);
// console.log(result);  // 0

// let result = Number(' ')
// console.log(result);  // 0


// let result;
// result = Number('hello');
// console.log(result); // NaN

// result = Number(undefined);
// console.log(result); // NaN

// result = Number(NaN);
// console.log(result); // NaN

// let result;
// result = parseInt('20.01');
// console.log(result); // 20

// result = parseFloat('20.01');
// console.log(result); // 20.01

// result = +'20.01';
// console.log(result); // 20.01

// result = Math.floor('20.01');
// console.log(result); // 20


//number to string
// let result;
// result = String(324);
// console.log(result);  // "324"

// result = String(2 + 4);
// console.log(result); // "6"

// //other data types to string
// result = String(null);
// console.log(result); // "null"

// result = String(undefined);
// console.log(result); // "undefined"

// result = String(NaN);
// console.log(result); // "NaN"

// result = String(true);
// console.log(result); // "true"

// result = String(false);
// console.log(result); // "false"

// // using toString()
// result = (324).toString();
// console.log(result); // "324"

// result = true.toString();
// console.log(result); // "true"



// let result;
// result = Boolean('');
// console.log(result); // false

// result = Boolean(0);
// console.log(result); // false

// result = Boolean(undefined);
// console.log(result); // false

// result = Boolean(null);
// console.log(result); // false

// result = Boolean(NaN);
// console.log(result); // false


result = Boolean(324);
console.log(result); // true

result = Boolean('hello');
console.log(result); // true

result = Boolean(' ');
console.log(result); // true