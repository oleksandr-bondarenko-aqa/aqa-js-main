/*
    Data types:

    Simple or Primitives:
    - numbers (int)
    - text (string)
    - logical type (boolean)
    - null
    - undefined
    - Symbol
    - BigInt

    Objects:
    - arrays
    - functions
    - object data
    - regular expressions
    - errors
    - object
 */

// int - numbers up to 2^53

// let number = 38;
// let floatNumber = 38.89;
//
// // string - text
// let text = 'text';
//
// // Infinity / -Infinity
// console.log(5/0);
// console.log(-5/0);
//
// // NaN = Not a Number
// console.log('a' * 5)
//
// // boolean = true or false
// let booleanType = true;
//
// // null, undefined
// const a = null;
// let b; // undefined
//
// // object
// let object = {};
// console.log(object);
//
// let person = {
//     age: 30,
//     name: 'Grisha',
//     isMarried: true
// };
// console.log(person);
// console.log(person.age);
// console.log('Name: ' + person.name + 'Married: ' + person.isMarried);
// console.log(`Name: ${person.name}, Married: ${person.isMarried}`);
//
// let endpoint = 'help';
// console.log(`https://someUrl/${endpoint}`);
//
// // array
//
// let arr = ['text', 8, {}, []];
// console.log(arr[0]);
// console.log(arr[2]);
//
// let numArr = [1, 2, 3];
// let numObj = {a:1, b:2, c:3};
//
// console.log(numArr[0]);
// console.log(numObj.a);
//
// let salary = {
//     'Anna': 1000,
//     'Valera': 2000
// };
//
// let salaryArr = ['Anna', 1000, 'Valera', 2000];
//
// let someArr = [1, 2, 3];
// let objArr = {
//     0: 1,
//     b: 2,
//     c: 3
// };
//
// console.log(someArr[0]);
// console.log(objArr["0"]);
//
// let objArr2 = {
//     a: 1,
//     b: 2,
//     c: 3
// };
//
// objArr2.b = 8;
// console.log(objArr2.b);
//
// let objArr3 = {
//     a: 1,
//     b: 2,
//     c: {
//         someKey: {
//             someKey: 12
//         }
//     },
//     d: {
//         someKey: [1, 2, 3]
//     }
// };
//
// console.log(objArr3.c.someKey.someKey);
// console.log(objArr3.d.someKey[1]);
//
// let someText = 'Hello World';
//
// console.log(someText.length);
// console.log(someText.substring(0, 4));
// console.log(someText.toLocaleLowerCase());
// console.log(someText.toUpperCase());
// console.log(someText.indexOf('W'));
// console.log(someText.indexOf('o')); // up to first true, then stops
// console.log(someText.slice(0, 4));
// console.log(someText.trim()); // cuts spaces in the beginning and in the end
// console.log(someText.charAt(1));
// console.log(someText[2]);

// Arrays

let myArr = [];

myArr.push('Good evening');
myArr.push('Good morning');

console.log(myArr);
console.log(myArr.length);
console.log(myArr.join());
console.log(myArr.join(" "));
console.log(myArr.pop()); // returns last array element