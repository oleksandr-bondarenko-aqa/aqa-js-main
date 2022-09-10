if(9 === 9){
    console.log('Result')
}

// we want to order either 3 hamburgers OR 1 cola OR 2 nuggets and 2 fries
const hamburger = 2;
const fries = 1;
const nuggets = 1;
const cola = 1;

if(hamburger >= 3 && cola || nuggets >= 2 && fries){
    console.log("I'm full")
} else {
    console.log("Still hungry")
}

let num = 50;

if(num < 49){
    console.log('Less than 49')
} else if(num > 100){
    console.log('More than 100')
} else {
    console.log('ok')
}

// Ternary operator

(num === 50) ? console.log('ok') : console.log('error');

// Switch case is used for non-boolean values

let number = 52;

switch (number){
    case 49:
        console.log('Our value 49')
        break;
    case 50:
        console.log('Our value 50')
        break;
    case 51:
        console.log('Our value 51')
        break;
    case 52:
        console.log('Our value 52')
        break;
}