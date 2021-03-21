// const myArray = ['hello', 'world', 'welcome'];

// const array1 = ["eat", "sleep"];

// const array2 = new Array("eat", "sleep");

// // empty array
// const myList = [ ];
// // array containing number values
// const numberArray = [ 2, 4, 6, 8];

// // array containing string values
// const stringArray = [ 'eat', 'work', 'sleep'];

// // multiple data types array
// const newData = ['work', 'exercise', 1, true];


// const newData = [
//     {'task1': 'exercise'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];


// const myArray = ['h',  'e', 'l', 'l', 'o'];

// // first element
// console.log(myArray[0]);  // "h"

// // second element
// console.log(myArray[1]); // "e"

// let dailyActivities = ['eat', 'sleep'];

// // add an element at the end of the array
// a = dailyActivities.push('exercise');

// console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

// console.log(a)

// b = dailyActivities.unshift('work'); 

// console.log(dailyActivities); // ['work', 'eat', 'sleep', 'exercise'']

// console.log(b)

// let dailyActivities = [ 'eat', 'sleep'];

// // this will add the new element 'exercise' at the 2 index
// dailyActivities[2] = 'exercise';

// console.log(dailyActivities); // ['eat', 'sleep', 'exercise']


// let dailyActivities = [ 'eat', 'sleep'];

// // this will add the new element 'exercise' at the 3 index
// dailyActivities[3] = 'exercise';

// console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
// console.log(dailyActivities[2])

// let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// // remove the last element
// dailyActivities.pop();
// console.log(dailyActivities); // ['work', 'eat', 'sleep']

// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement = dailyActivities.pop();

// //get removed element
// console.log(removedElement); // 'sleep'
// console.log(dailyActivities);  // ['work', 'eat']

// let dailyActivities = ['work', 'eat', 'sleep'];

// // remove the first element
// a = dailyActivities.shift();

// console.log(dailyActivities); // ['eat', 'sleep']
// console.log(a)

// const dailyActivities = [ 'eat', 'sleep'];

// // this gives the total number of elements in an array
// console.log(dailyActivities.length); 


// let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];

// // sorting elements in the alphabetical order
// dailyActivities.sort();
// console.log(dailyActivities); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// const position = dailyActivities.indexOf('workkk');
// console.log(position); // 2

// // slicing the array elements
// const newDailyActivities = dailyActivities.slice(1);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]


// let arr = ['h', 'e'];
// let arr1 = arr;
// arr1.push('l');

// console.log(arr); // ["h", "e", "l"]
// console.log(arr1); // ["h", "e", "l"]


// let arr = ['h', 'e'];
// arr.name = 'John';

// console.log(arr); // ["h", "e"]
// console.log(arr.name); // "John"
// console.log(arr['name']); // "John"
// console.log(arr.length)

// multidimensional array
// const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
// let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
// console.log(data);
// console.log(studentsData);

// let student1 = ['Jack', 24];
// let student2 = ['Sara', 23];
// let student3 = ['Peter', 24];

// // multidimensional array
// let studentsData = [student1, student2, student3];
// console.log(studentsData)

// let x = [
//     ['Jack', 24],
//     ['Sara', 23], 
//     ['Peter', 24]
//     ];
    
//     // access the first item 
//     console.log(x[0]); // ["Jack", 24]
    
//     // access the first item of the first inner array
//     console.log(x[0][0]); // Jack
    
//     // access the second item of the third inner array
//     console.log(x[2][1]); // 24

// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.push(['Peter', 24]);

// console.log(studentsData); 

// using index notation
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1][2] = 'hello';

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// using push()
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1].push('hello');

// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]


// let studentsData = [['Jack', 24], ['Sara', 23],];

// // adding element at 1 index
// studentsData.splice(1, 0, ['Peter', 24]);

// console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]

// remove the array element from outer array
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.pop();

// console.log(studentsData); // [["Jack", 24]]

// remove the element from the inner array
// let studentsData = [['Jack', 24], ['Sara', 23]];
// studentsData[1].pop();

// console.log(studentsData); // [["Jack", 24], ["Sara"]]

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // removing 1 index array item
// studentsData.splice(1,1);
// console.log(studentsData); // [["Jack", 24]]

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // iterating over the studentsData
// studentsData.forEach((student) => {
//     student.forEach((data) => {
//         console.log(data);
//     });
// });

// let studentsData = [['Jack', 24], ['Sara', 23],];

// for (let i of studentsData) {
//   for (let j of i) {
//     console.log(j);
//   }
// }


// let studentsData = [['Jack', 24], ['Sara', 23],];

// // looping outer array elements
// for(let i = 0; i < studentsData.length; i++){

//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;
    
//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }


//strings example
// const name = 'Peter';
// const name1 = "Jack";
// const result = `The names are ${name} and ${name1}`;

// const name = 'My name is "Peter".';

// // const name = 'My name is 'Peter'.'; // error


// const a = 'hello';
// console.log(a[1]); // "e"

// const a = 'hello';
// console.log(a.charAt(1)); // "e"

// let a = 'hello';
// a[0] = 'H';
// console.log(a); // "hello"

// let a = 'hello';
// a = 'Hello';
// console.log(a); // "Hello"

// const a = 'a';
// const b = 'A'
// console.log(a === b); // false

// using the + operator
// const message1 = 'This is a long message ' +
//     'that spans across multiple lines' + 
//     'in the code.'

// // using the \ operator
// const message2 = 'This is a long message \
// that spans across multiple lines \
// in the code.'

// console.log(message1);
// console.log(message2);

// const a = 'hello';
// console.log(a.length); // 5

// const a = 'hello';
// const b = new String('hello');

// console.log(a); // "hello"
// console.log(b); // "hello"

// console.log(typeof a); // "string"
// console.log(typeof b); // "object"

// const text1 = 'hello';
// const text2 = 'world';
// const text3 = '     JavaScript    ';

// // concatenating two strings
// const result1 = text1.concat(' ', text2);
// console.log(result1); // "hello world"

// // converting the text to uppercase
// const result2 = text1.toUpperCase();
// console.log(result2); // HELLO

// // removing whitespace from the string
// const result3 = text3.trim();
// console.log(result3); // JavaScript

// // converting the string to an array
// const result4 = text1.split();
// console.log(result4); // ["hello"]

// // slicing the string
// const result5= text1.slice(1, 3);
// console.log(result5); // "el"

// const a = 225; // number
// const b = true; // boolean

// //converting to string
// const result1 = String(a);
// const result2 = String(b);

// console.log(result1); // "225"
// console.log(result2); // "true"

// const name = 'My name is \'Peter\'.';
// console.log(name);

// const student = {
//     name: 'Monica',
//     class: 7,
//     age: 12
// }

// // using for...in
// for ( let key in student ) {

//     // display the properties
//     console.log(`${key} => ${student[key]}`);
// }


// const salaries= {
//     Jack : 24000,
//     Paul : 34000,
//     Monica : 55000
// }

// // using for...in
// for ( let i in salaries) {

//     // add a currency symbol
//     let salary = "$" + salaries[i];

//     // display the values
//     console.log(`${i} : ${salary}`);
// }

// const string = 'code';

// // using for...in loop
// for (let i in string) {
//     console.log(i);
// }

// // define array
// const arr = [ 'hello', 1, 'JavaScript' ];

// // using for...in loop
// for (let x in arr) {
//     console.log(x);
// }

// const a1 = 5e9;
// console.log(a1); //5000000000

// const a2 = 5e-5;
// console.log(a2); // 0.00005
// const a = 0xff;
// console.log(a); // 255

// const b = 0x00 ;
// console.log(b); // 0

// const a = 4 + 9;
// console.log(a); // 13

// const a = '4' + 9;
// console.log(a); // 49
// const a = '4' - 2;
// console.log(a); // 2

// const a1 = '4' / 2;
// console.log(a1); // 2

// const a2 = '4' * 2;
// console.log(a2); // 8

// const a = 4 - 'hello';
// console.log(a); // NaN

// const a = isNaN(9);
// console.log(a); // false

// const a1 = isNaN(4 - 'hello');
// console.log(a1); // true

// const a = 4 - 'hello';
// console.log(a); // NaN
// console.log(typeof a); // "number"

// const a = 2 / 0;
// console.log(a); // Infinity

// const a1 = -2 / 0;
// console.log(a1); // -Infinity

// BigInt value
// const value = 900719925124740998n;

// // Adding two big integers
// const value1 = value + 1n;
// console.log(value1); // returns "900719925124740999n"

// const a = 0.1 + 0.2;
// console.log(a); // 0.30000000000000004

// const a = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(a); // 0.3

// const a = 0.1 + 0.2;
// console.log(a.toFixed(2)); // 0.30

// const a = 9999999999999999
// console.log(a); // 10000000000000000

// const a = 45;

// // creating a number object
// const b = new Number(45);

// console.log(a); // 45
// console.log(b); // 45

// console.log(typeof a); // "number"
// console.log(typeof b); // "object"


// check if a is integer
// const a = 12;
// console.log(Number.isInteger(a)); // true

// // check if b is NaN
// const b = NaN;
// console.log(Number.isNaN(b)); // true

// // display upto two decimal point
// const d = 5.1234;
// console.log(d.toFixed(2)); // 5.12

// // largest possible value
// const a = Number.MAX_VALUE;
// console.log(a); // 1.7976931348623157e+308

// // maximum safe integer
// const a1 = Number.MAX_SAFE_INTEGER;
// console.log(a1); // 9007199254740991

// const a = '23'; // string
// const b = true; // boolean

// //converting to number
// const result1 = Number(a);
// const result2 = Number(b);

// console.log(result1); // 23
// console.log(result2); // 1

// two symbols with the same description

// const value1 = Symbol('hello');
// const value2 = Symbol('hello');

// console.log(value1 === value2); // false

// const x = Symbol()

// console.log(typeof x); // symbol

// const x = Symbol('hey');
// console.log(x); // Symbol(hey)

// const x = Symbol('hey');
// console.log(x.description);

// let id = Symbol("idd");

// let person = {
//     name: "Jack",

//     // adding symbol as a key
//     [id]: 123 // not "id": 123
// };

// console.log(person); // {name: "Jack", Symbol(id): 123}

// let id = Symbol("id");

// let person = {
//     name: "Jack",
//     age: 25,
//     [id]: 12
// };

// // using for...in
// for (let key in person) {
//     console.log(key);
// }

// let person = {
//     name: "Jack"
// };

// // creating Symbol
// let id = Symbol("id");

// // adding symbol as a key
// person[id] = 12;

// let person = {
//     name: "Jack"
// };

// let id = Symbol("id");

// person[id] = "Another value";

// let person = {
//     name: "Jack"
// };

// // using string as key
// person.id = 12;
// console.log(person.id); // 12

// // Another program overwrites value
// person.id = 'Another value';
// console.log(person.id); // Another value

// get symbol by name
// let sym = Symbol.for('hello');
// let sym1 = Symbol.for('id');

// // get name by symbol
// console.log( Symbol.keyFor(sym) ); // hello
// console.log( Symbol.keyFor(sym1) ); // id

// const x = Symbol('hey');

// // description property
// console.log(x.description); // hey

// const stringArray = ['a', 'b', 'c'];
// const numberArray = [1, 2, 3];

// // isConcatSpreadable property
// numberArray[Symbol.isConcatSpreadable] = false;

// let result = stringArray.concat(numberArray);
// console.log(result); // ["a", "b", "c", [1, 2, 3]]


// consol.log('your result');

// program to show try...catch in a program

// const numerator= 100, denominator = 'a';

// try {
//      console.log(numerator/denominator);

//     // forgot to define variable a      
//     console.log(a);
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }

// const numerator= 100, denominator = 'a';


// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  
// }
// finally {
//      console.log('Finally will execute every time');
// }

// try {
//     setTimeout(function() {
//         // error in the code
//     }, 3000);
// } catch (e) {
//   console.log( "won't work" );
// }

// setTimeout(function() {
//     try {
//         // error in the code
//     } catch {
//         console.log( "error is caught" );
//     }
// }, 3000);

// const number = 40;
// try {
//     if(number > 50) {
//         console.log('Success');
//     }
//     else {

//         // user-defined throw statement
//         throw new Error('The number is low');
//     }

//     // if throw executes, the below code does not execute
//     console.log('hello');
// }
// catch(error) {
//     console.log('An error caught'); 
//     console.log('Error message: ' + error);  }

// const number = 0;
// try {
//      // user-defined throw statement
//      throw new Error('This is the throw');

// }
// catch(error) {
//     console.log('An error caught');
//     if( number + 8 > 10) {

//         // statements to handle exceptions
//          console.log('Error message: ' + error); 
//         console.log('Error resolved');
//     }
//     else {
//         // cannot handle the exception
//         // rethrow the exception
//         throw new Error('The value is low');
//     }
// }


// importing greetPerson from greet.js file
import { greetPerson } from './greet.js';

// using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName); // Hello Jack