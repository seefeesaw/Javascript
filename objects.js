// object
// const student = {
//     firstName: 'ram',
//     class: 10
// };

// // object creation
// const person = { 
//     name: 'John',
//     age: 20
// };
// console.log(typeof person); // object

// // accessing property
// console.log(person.name); // John
// // accessing property
// console.log(person.age); // John

// console.log(person["name"]); // John
// console.log(person["age"]); // John


// nested object
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// // accessing property of student object
// console.log(student["marks"]); // {science: 70, math: 75}

// // accessing property of marks object
// console.log(student["marks"]["science"]); // 70

// const person = {
//     name: 'Sam',
//     age: 30,
//     // using function as a value
//     greet: function() { console.log('hello') }
// }

// person.greet(); // hello


// accessing method and property
// const person = {
//     name: 'John',
//     greet: function() { console.log('hello'); }
// };

// // accessing property
// person.name; // John

// // accessing method
// person.greet; // hello


// creating an object
// let student = { };

// // adding a property
// student.name = 'John';

// // adding a method
// student.greet = function() {
//     console.log('hello');
// }

// // accessing a method
// student.greet(); // hello
// console.log(student)


// const person = {
//     name: 'John',
//     age: 30,

//     // accessing name property by using this.name
//     greet: function() { console.log('The age is' + ' ' + this.age); }
// };

// person.greet();

// x = function()
// {
//     console.log("This is" + ' '+ person.name)
// }
// x();

// const person = {
//     name: 'John',
//     age: 30,
//     greet: function() {
//         let surname = 'Doe';
//         console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };

// person.greet();

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23,

//      this.greet = function () {
//          let surname = "Mike"
//         console.log('hello'+' '+ this.name+" "+ surname);
//     }
// }

// // create objects
// const person1 = new Person();
// const person2 = new Person();
// person1.greet()
// // access properties
// console.log(person1.name);  // John
// console.log(person2.name);  // John

// // constructor function
// function Person () {
//     this.name = 'John';
// }

// // create object
// const person1 = new Person();

// // access properties
// console.log(person1.name);  // John

// constructor function
// function Person (person_name, person_age, person_gender) {

//     // assigning  parameter values to the calling object
//      this.name = person_name,
//      this.age = person_age,
//      this.gender = person_gender,
 
//      this.greet = function () {
//          return ('Hi' + ' ' + this.name);
//      }
//  }
 
 
//  // creating objects
//  const person1 = new Person('John', 23, 'male');
//  const person2 = new Person('Sam', 25, 'female');
 
//  // accessing properties
//  console.log(person1.greet()); // "John"
//  console.log(person2.greet()); // "Sam"

// using object literal
// let person = {
//     name: 'Sam'
// }
// // using constructor function
// function Person () {
//     this.name = 'Sam'
// }

// let person1 = new Person();
// let person2 = new Person();


// // using constructor function
// function Person () {
//     this.name = 'Sam'
// }

// let person1 = new Person();
// let person2 = new Person();

// // adding new property to person1
// person1.age = 20;



// using object lateral
// let person = {
//     name: 'Sam'
// }

// console.log(person.name); // Sam

// let student = person;

// // changes the property of an object
// student.name = 'John';

// // changes the origins object property
// console.log(person.name); // John


// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding property to person1 object
// person1.gender = 'male';

// // adding method to person1 object
// person1.greet = function () {
//     console.log('hello');
// }

// person1.greet();   // hello

// Error code
// person2 doesn't have greet() method
// person2.greet()

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male


// const name = new String ('John');
// console.log(name); // "John"
// const number = new Number (57);
// console.log(number); // 57
// const count = new Boolean(true);
// console.log(count); // true

// const student = {

//     // data property
//     firstName: 'Monica',
    
//     // accessor property(getter)
//     get getName() {
//         return this.firstName;
//     }
// };

// // accessing data property
// console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// // trying to access as a method
// console.log(student.getName()); // error


// const student = {
//     firstName: 'Monica',
    
//     //accessor property(setter)
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah


// const student = {
//     firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get : function () {
//         return this.firstName;
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set : function (value) {
//         this.firstName = value;
//     }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah


// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }


// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';
// Person.prototype.greet = function() {
//     console.log('hello' + ' ' +  this.name);
// }
// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1);
// console.log(person2.gender);
// person2.greet();


// // constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20

// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// const person = new Person();

// // checking the prototype value
// console.log(Person.prototype); // { ... }


// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);
// console.log(Person.prototype);

// constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding a method to the constructor function
// Person.prototype.greet = function() {
//     console.log('hello' + ' ' +  this.name);
// }

// person1.greet(); // hello John
// person2.greet(); // hello John

// console.log(Person.prototype);


// // constructor function
// function Person() {
//     this.name = 'John'
// }

// // add a property
// Person.prototype.age = 20;

// // creating an object
// const person1 = new Person();

// console.log(person1.age); // 20

// // changing the property value of prototype
// Person.prototype = { age: 50 }

// // creating new object
// const person3 = new Person();

// console.log(person3.age); // 50
// console.log(person1.age); // 20
// console.log(Person.prototype);

// function Person() {
//     this.name = 'John'
// }

// // adding property 
// Person.prototype.name = 'Peter';
// Person.prototype.age = 23

// const person1 = new Person();

// console.log(person1.name); // John
// console.log(person1.age); // 23
// console.log(Person.prototype);


function Person () {
    this.name = 'John'
}

// adding a prototype
Person.prototype.age = 24;

// creating object
const person = new Person();

// accessing prototype property
console.log(person.__proto__); 