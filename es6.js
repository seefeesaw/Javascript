// // variable declared using let
// let name = 'Sara';
// {
//     // can be accessed only inside
//     let name = 'Peter';

//     console.log(name); // Peter
// }
// console.log(name); // Sara 

// // name declared with const cannot be changed
// const name = 'Sara';

// function expression
// let x = function(x, y) {
//     return x * y;
//  }
//  // function expression using arrow function
// let x1 = (x, y) => x * y;

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const person1 = new Person('John');
  
//   console.log(person1.name); // John

// function sum(x, y = 5) {

//     // take sum
//     // the value of y is 5 if not passed
//     console.log(x + y);
// }

// sum(5); // 10
// sum(5, 15); // 20

// const first_name = "Jack";
// const last_name = "Sparrow";

// console.log(`Hello ${first_name} ${last_name}`);


// before you would do something like this
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let { name, age, gender } = person;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female


// export
// export default function contact(name, age) {
//     console.log(`The name is ${name}. And age is ${age}.`);
// }

// import contact from './contact.js';

// contact('Sara', 25);
// // The name is Sara. And age is 25

// function show(a, b, ...args) {
//     console.log(a); // one
//     console.log(b); // two
//     console.log(args); // ["three", "four", "five", "six"]
//   }
  
//   show('one', 'two', 'three', 'four', 'five', 'six')

// let arr1 = ['one', 'two'];
// let arr2 = [...arr1, 'three', 'four', 'five'];
// console.log(arr2); // ["one", "two", "three", "four", "five"]

// function expression
// let x = function(x, y) {
//     return x * y;
//  }

// // using arrow functions
// let x = (x, y) => x * y;

// let greet = () => console.log('Hello');
// greet(); // Hello

// let greet = x => console.log(x);
// greet('Hello'); // Hello 

// let age = 5;

// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');

// welcome(); // Baby

// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);
//         console.log(this);

//         function innerFunc() {

//             this.age = 20

//             // this refers to the global object
//             console.log(this.age);
//             console.log(this);
//         }

//         innerFunc();

//     }
// }

// let x = new Person();
// x.sayName();


// function Person() {
//     this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {

//         console.log(this.age);
//         console.log(this);
//         let innerFunc = () => {
//             console.log(this.age);
//             console.log(this);
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName();


// let x = function () {
//     console.log(arguments);
// }
// x(4,6,7); // Arguments [4, 6, 7]

// let x = () => {
//     console.log(arguments);
// }

// x(4,6,7); 

// let x = (...n) => {
//     console.log(n);
// }

// x(4,6,7); // [4, 6, 7]

// ES5
// asyncFunction().then(function() {
//     return asyncFunction1();
// }).then(function() {
//     return asyncFunction2();
// }).then(function() {
//     finish;
// });

// // ES6
// asyncFunction()
// .then(() => asyncFunction1())
// .then(() => asyncFunction2())
// .then(() => finish);



// let person = {
//     name: 'Jack',
//     age: 25,
//     sayName: () => {

//         // this refers to the global .....
//         //
//         console.log(this.age);
//         console.log(this);
//     }
// }

// person.sayName(); // undefined

// let Foo = () => {};
// let foo = new Foo();


// function sum(x = 3, y = 5) {

//     // return sum
//     return x + y;
// }

// console.log(sum(5, 15));  // 20 
// console.log(sum(7));        // 12
// console.log(sum());          // 8

// function sum(x = 1, y = x,  z = x + y) {
//     console.log( x + y + z );
// }

// sum(); // 4

// function sum( x = y, y = 1 ) {
//     console.log( x + y);
// }

// sum(); 

// using a function in default value expression

// const sum = () => 15;

// const calculate = function( x, y = x * sum() ) {
//     return x + y;
// }

// const result = calculate(10);
// console.log(result);            // 160

// function test(x = 1) {
//     console.log(x);
//   }
  
//   // passing undefined
//   // takes default value 1
//   test(undefined); // 1

// const name = 'Jack';
// console.log(`Hello ${name}!`);

// const str1 = 'This is a string';

// // cannot use the same quotes
// const str2 = 'A "quote" inside a string';  // valid code
// // const str3 = 'A 'quote' inside a string';  // Error

// const str4 = "Another 'quote' inside a string"; // valid code
// // const str5 = "Another "quote" inside a string"; // Error


// // escape characters using \
// const str3 = 'A \'quote\' inside a string';  // valid code
// const str5 = "Another \"quote\" inside a string"; // valid code


// const str1 = `This is a string`;
// const str2 = `This is a string with a 'quote' in it`;
// const str3 = `This is a string with a "double quote" in it`;

// using the + operator
// const message1 = 'This is a long message\n' + 
// 'that spans across multiple lines\n' + 
// 'in the code.'

// console.log(message1)


// const message1 = `This is a long message
// that spans across multiple lines
// in the code.`

// console.log(message1)

// const name = 'Jack';
// console.log('Hello ' + name); // Hello Jack


// const name = 'Jack';
// console.log(`Hello ${name}`); 

// // template literals used with expressions

// const result = `The sum of  4 + 5 is ${4 + 5}`;
// console.log(typeof result); 

// console.log(`${result < 10 ? 'Too low': 'Very high'}`)


// function tagExample(strings) {
//     return strings;
// }

// // passing argument
// const result = tagExample('Hello Jack');

// console.log(result);

// function tagExample(strings) {
//     return strings;
// }

// // creating tagged template
// const result = tagExample`Hello Jack`;

// console.log(result);

// const name = 'Jack';
// const greet = true;

// function tagExample(strings, nameValue) {
//     let str0 = strings[0]; // Hello
//     let str1 = strings[1]; // , How are you?

//     if(greet) {
//         return `${str0}${nameValue}${str1}`;
//     }
// }

// // creating tagged literal
// // passing argument name
// const result = tagExample`Hello ${name}, How are you?`;

// console.log(result);

// const arrValue = ['My', 'name', 'is', 'Jack'];

// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack
// console.log('My', 'name', 'is', 'Jack');

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2); 
// //  Output:
// //  ["one", "two", "three", "four", "five"]


// let arr1 = [ 1, 2, 3];
// let arr2 = arr1;

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3, 4]

// let arr1 = [ 1, 2, 3];

// // copy using spread syntax
// let arr2 = [...arr1];

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]

// // append an item to the array
// arr1.push(4);

// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]

// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : 3 };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: 3}


// let func = function(...args) {
//     console.log(args);
// }

// func(3); // [3]
// func(4, 5, 6); // [4, 5, 6]

// function sum(x, y ,z) {
//     console.log(x + y + z);
// }

// const num1 = [1, 3, 4, 5];

// sum(...num1); // 8



// // create a Map
// const map1 = new Map(); // an empty map
// console.log(map1); // Map {}


// create a set
// let map1 = new Map();

// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// // Map with object key
// let map2 = new Map();

// let obj = {};
// map2.set(obj, {name: 'Jack', age: "26"});

// console.log(map2.get(obj)); // Map {{} => {name: "Jack", age: "26"}}


// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // access the elements of a Map
// console.log(map1.get('info')); // {name: "Jack", age: "26"}


// const set1 = new Set([1, 2, 3]);

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // check if an element is in Set
// console.log(map1.has('info')); // true



// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // removing a particular element
// console.log(map1.delete('address')); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}} 

// console.log(map1.delete('info')); // true
// console.log(map1); // Map {}


// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// // removing all element
// console.log(map1.clear()); // false
// console.log(map1); // Map {}

// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});

// console.log(map1.size); // 1


// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// for (let key of map1) {
//     console.log(key);
// }

// using forEach method()
// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through Map
// map1.forEach(function( key) {
//   console.log(key)
// })

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let key of map1.keys()) {
//   console.log(key)
// }



// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let values of map1.values()) {
//     console.log(values);
// }


// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');

// // looping through the Map
// for (let elem of map1.entries()) {
//     console.log(`${elem[0]}: ${elem[1]}`);
// }

// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap); // WeakMap {{} => "hello"}

// const weakMap = new WeakMap();

// // adding string as a key to WeakMap
// weakMap.set('obj', 'hello');


// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap); // WeakMap {{} => "hello"}

// // get the element of a WeakMap
// console.log(weakMap.get(obj)); // hello

// // check if an element is present in WeakMap
// console.log(weakMap.has(obj)); // true

// // delete the element of WeakMap
// console.log(weakMap.delete(obj)); // true

// console.log(weakMap); // WeakMap {} 

// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');


// // looping through WeakMap
// for (let i of weakMap) {

//     console.log(i);  // TypeError
// }


// create Set
// const set1 = new Set(); // an empty set
// console.log(set1); // Set {}

// // Set with multiple types of value
// const set2 = new Set([1, 'hello', {count : true}]);
// console.log(set2); // Set {1, "hello", {count: true}}

// Set with duplicate values
// const set3 = new Set([1, 1, 2, 2]);
// console.log(set3); // Set {1, 2}

// const set1 = new Set([1, 2, 3]);

// // access the elements of a Set
// console.log(set1.values()); // Set Iterator [1, 2, 3]


// const set1 = new Set([1, 2, 3]);

// // check if an element is in Set
// console.log(set1.has(1));

// const set = new Set([1, 2]);
// console.log(set.values());

// // adding new elements
// set.add(3);
// console.log(set.values());

// // adding duplicate elements
// // does not add to Set
// set.add(1);
// console.log(set.values());


// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]

// // removing a particular element
// set.delete(2);
// console.log(set.values()); // Set Iterator [1, 3]

// const set = new Set([1, 2, 3]);
// console.log(set.values()); // Set Iterator [1, 2, 3]

// // remove all elements of Set
// set.clear();
// console.log(set.values()); // Set Iterator []


// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }

// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}

// let obj = {
//     message: 'Hi',
//     sendMessage: true
// }

// // adding object (element) to WeakSet
// weakSet.add(obj);

// console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

// // trying to add string to WeakSet
// weakSet.add('hello');

// // throws error
// // TypeError: Attempted to add a non-object key to a WeakSet
// console.log(weakSet);


// const weakSet = new WeakSet();
// console.log(weakSet); // WeakSet {}

// const obj = {a:1};

// // add to a weakSet
// weakSet.add(obj);
// console.log(weakSet); // WeakSet {{a: 1}}

// // check if an element is in Set
// console.log(weakSet.has(obj)); // true

// // delete elements
// weakSet.delete(obj);
// console.log(weakSet); // WeakSet {}


// const weakSet = new WeakSet({a:1});

// // looping through WeakSet
// for (let i of weakSet) {

//     // TypeError
//     console.log(i);
// }

// perform union operation
// contain elements of both sets
// function union(a, b) {
//     let unionSet = new Set(a);
//     for (let i of b) {
//         unionSet.add(i);
//     }
//     return unionSet
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = union(setA, setB);

// console.log(result);


// perform intersection operation
// elements of set a that are also in set b
// function intersection(setA, setB) {
//     let intersectionSet = new Set();

//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i);
//         }
//     }
//     return intersectionSet;
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = intersection(setA, setB);

// console.log(result);


// perform difference operation
// elements of set a that are not in set b
// function difference(setA, setB) {
//     let differenceSet = new Set(setA)
//     for (let i of setB) {
//         differenceSet.delete(i)
//     }
//     return differenceSet
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['grapes', 'apple', 'banana']);

// let result = difference(setA, setB);

// console.log(result);

// perform subset operation
// true if all elements of set b is in set a
// function subset(setA, setB) {
//     for (let i of setB) {
//         if (!setA.has(i)) {
//             return false
//         }
//     }
//     return true
// }

// // two sets of fruits
// let setA = new Set(['apple', 'mango', 'orange']);
// let setB = new Set(['apple', 'orange']);

// let result = subset(setA, setB);

// console.log(result);

// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// let name = person.name;
// let age = person.age;
// let gender = person.gender;

// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// assigning object attributes to variables
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // let { name, age, gender } = person;

// // console.log(name); // Sara
// // console.log(age); // 25
// // console.log(gender); // female

// // let { age, gender, name } = person;
// // console.log(name); // Sara


// let {name1, age, gender} = person;
// console.log(name1); // undefined


// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // using different variable names
// let { name: name1, age: age1, gender:gender1 } = person;

// console.log(name1); // Sara
// console.log(age1); // 25
// console.log(gender1); // female


// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, y, z] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three


// let arrValue = [];

// // assigning default value 5 and 7
// let [x = 5,  y = 7] = arrValue;

// console.log(x); // 10
// console.log(y); // 7


// const person = {
//     name: 'Jack',
// }

// // assign default value 26 to age if undefined
// const { name, age = 26} = person;

// console.log(name); // Jack
// console.log(age); // 26
// console.log(person)


// program to swap variables

// let x = 4;
// let y = 7;

// // swapping variables
// [x, y] = [y, x];

// console.log(x); // 7
// console.log(y); // 4

// const arrValue = ['one', 'two', 'three'];

// // destructuring assignment in arrays
// const [x, , z] = arrValue;

// console.log(x); // one
// console.log(z); // three

// const arrValue = ['one', 'two', 'three', 'four'];

// // destructuring assignment in arrays
// // assigning remaining elements to y
// const [x, ...y] = arrValue;

// console.log(x); // one
// console.log(y); // ["two", "three", "four"]

// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }

// // destructuring assignment
// // assigning remaining properties to rest
// let { name, ...rest } = person;

// console.log(name); // Sara
// console.log(rest); // {age: 25, gender: "female"}

// const arrValue = ['one', 'two', 'three', 'four'];

// // throws an error
// const [ ...x, y] = arrValue;

// console.log(x); // eror


// nested array elements
// const arrValue = ['one', ['two', 'three']];

// // nested destructuring assignment in arrays
// const [x, [y, z]] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three


// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//         read: true,
//         playGame: true
//     }
// }
// // nested destructuring 
// const {name, hobbies: {read, playGame}} = person;

// console.log(name); // Jack
// console.log(read); // true
// console.log(playGame); // true

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person1 = new Person();


// creating a class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }



// creating a class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // creating an object
//   const person1 = new Person('John');
//   const person2 = new Person('Jack');
  
//   console.log(person1.name); // John
//   console.log(person2.name); // Jack

// constructor function
// function Person (name) {

//     // assigning  parameter values to the calling object
//      this.name = name;
 
//      // defining method
//      this.greet = function () {
//          return ('Hello' + ' ' + this.name);
//      }
//  }
// const person1 = new Person("seefeesaw")
// let call = person1.greet()
// console.log(call)


// class Person {
//     constructor(name) {
//     this.name = name;
//   }

//     // defining method
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let person1 = new Person('John');

// // accessing property
// console.log(person1.name); // John

// // accessing method
// person1.greet(); // Hello John


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     // getter
//     get personName() {
//         return this.name;
//     }

//     // setter
//     set personName(x) {
//         this.name = x;
//     }
// }

// let person1 = new Person('Jack');
// console.log(person1.name); // Jack

// // changing the value of name property
// person1.personName = 'Sarah';
// console.log(person1.name); // Sarah
// console.log(person1.personName)

// accessing class
// const p = new Person(); // ReferenceError

// // defining class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Person {
//     constructor() {
//       a = 0;
//       this.name = a;
//     }
//   }
  
//   let p = new Person(); 


// class Person {}
// console.log(typeof Person); // function


// parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

// }

// let student1 = new Student('Jack');
// student1.greet();


// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
// class Student extends Person {

//     constructor(name) {
    
//         console.log("Creating student class");
        
//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Student('Jack');
// student1.greet();


// // parent class
// class Person { 
//     constructor(name) {
//         this.name = name;
//         this.occupation = "unemployed";
//     }
    
//     greet() {
//         console.log(`Hello ${this.name}.`);
//     }
 
// }

// inheriting parent class
// class Student extends Person {

//     constructor(name) {
        
//         // call the super class constructor and pass in the name parameter
//         super(name);
        
//         // Overriding an occupation property
//         this.occupation = 'Student';
//     }
    
//     // overriding Person's method
//     greet() {
//         console.log(`Hello student ${this.name}.`);
//         console.log('occupation: ' + this.occupation);
//     }
// }

// let p = new Student('Jack');
// p.greet();


// array
// const students = ['John', 'Sara', 'Jack'];

// // using for...of
// for ( let element of students ) {

//     // display the values
//     console.log(element);
// }


// string
// const string = 'code';

// // using for...of loop
// for (let i of string) {
//     console.log(i);
// }

// define Set
// const set = new Set([1, 2, 3]);

// // looping through Set
// for (let i of set) {
//     console.log(i);
// }


// define Map
// let map = new Map();

// // inserting elements
// map.set('name', 'Jack');
// map.set('age', '27');

// // looping through Map
// for (let [key, value] of map) {
//     console.log(key + '- ' + value);
// }


// creating iterable object
// const

// iterableObj = {

//     // iterator method
//     [Symbol.iterator]() {
//         let step = 0;
//         return {
//             next() {
//                 step++;
//                 if (step === 1) {
//                     return { value: '1', done: false};
//                  }
//                 else if (step === 2) {
//                     return { value: '2', done: false};
//                 }
//                 else if (step === 3) {
//                     return { value: '3', done: false};
//                 }
//                 return { value: '', done: true };
//             }
//         }
//     }
// }

// // iterating using for...of
// for (const i of iterableObj) {
//  console.log(i);
// }


// generator function
// function* generatorFunc() {
  
//     yield 10;
//     yield 20;
//     yield 30;
// }

// const obj = generatorFunc();

// // iteration through generator
// for (let value of obj) {
//     console.log(value);
// }


// let student1 = {
//     age: 24,
//     name: "Felix"
// }

// const handler = {
//     get: function(obj, prop) {
//         return obj[prop] ? obj[prop] : 'property does not exist';
//     }
// }

// const proxy = new Proxy(student1, handler);
// console.log(proxy)
// console.log(proxy.name); // Felix
// console.log(proxy.age); // 24
// console.log(proxy.class); // property does not exist



// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = { };

// // passing empty handler
// const proxy1 = new Proxy(student, {});

// console.log(proxy1); // Proxy {name: "Jack", age: 24}
// console.log(proxy1.name); // Jack


// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//         return obj[prop];
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack

// let


// student = {
//     name: 'John'
// }

// let setNewValue = {
//   set(obj, prop, value) {

//     obj[prop] = value;
//     return;
//   }
// };

// // setting new proxy
// let person = new Proxy(student, setNewValue);

// // setting new key/value
// person.age = 25;
// console.log(person); // Proxy {name: "John", age: 25}


// let student = {
//     name: 'Jack',
//     age: 24
// }

// const handler = {

//     // get the object key and value
//     get(obj, prop) {

//     // check condition
//     if (prop == 'name') {
//       return obj[prop];
//     } else {
//       return 'Not allowed';
//     }
//   }
// }

// const proxy = new Proxy(student, handler);
// console.log(proxy.name); // Jack
// console.log(proxy.age); // Not allowed


// let student = {
//     name: 'Jack',
//     age: 23
// }

// const handler = {
//     set: function (obj, prop, value) {
//         if (obj[prop]) {
            
//             // cannot change the student value
//             console.log('Read only')
//         }
//     }
// };

// const proxy = new Proxy(student, handler);

// proxy.name = 'John'; // Read only
// proxy.age14 = 33; // Read only

// proxy.age = 33; // Can only access name property

// const myFunction = () => {
//     console.log("execute this function")
// };

// const handler = {
//     set: function (target, prop, value) {
//         if (prop === 'name' && value === 'Jack') {
//             // calling another function
//             myFunction();
//         }
//         else {
//             console.log('Can only access name property');
//         }
//     }
// };

// const proxy = new Proxy({}, handler);

// proxy.name = 'Jack'; // execute this function
// proxy.age = 33; // Can only access name property


// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');

// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);   

// program to display time every 3 seconds
// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }

// // calling the function
// showTime();

// program to stop the setTimeout() method

// let count = 0;

// // function creation
// function increaseCount(){

//     // increasing the count by 1
//     count += 1;
//     console.log(count)
// }

// let id = setTimeout(increaseCount, 3000);

// // clearTimeout
// clearTimeout(id); 
// console.log('setTimeout is stopped.');


// program to display a name
function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setTimeout
setTimeout(greet, 1000, 'John', 'Doe');