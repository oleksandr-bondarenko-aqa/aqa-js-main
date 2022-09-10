let number = 5;
const number1 = 1000;


// camelCase
// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase

console.log(number);

// const can be changed in object attribute
// const prevents type change
// JSON - JavaScript Object Notation

const obj = {
    age: 30
}

obj.age = 45;
console.log(obj.age);

var firstName = 'Oleg';
firstName = 'Dimon';

// var appears in memory before initialization

console.log(lastName);
var lastName = 'Tikhoperdov';

console.log(lastName1);
let lastName1 = 'Tikhoperdov';

// Area of visibility (let - inside function etc, var - global)
{
    let number2 = 4;
}
console.log(number2);

{
    var number3 = 4;
}
console.log(number3);


// non-self-explanatory
const a = 3000;
const b = 2000;

// 100 lines of code

console.log('Width: ' + a + ', Length: ' + b);

// self-explanatory
const width = 3000;
const length = 2000;

// 100 lines of code

console.log('Width: ' + width + ', Length: ' + length);