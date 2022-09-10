console.log('arr ' + '- object');

console.log(2 + 2);

console.log('2' + 2);

console.log(2 + + '2');

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr, decr);
console.log(incr++, decr--);
console.log(++incr, --decr);

console.log(5 < 2);
console.log(5 > 2); // <= >= ==

console.log('2' == 2); // first it converts to same type causing to be true
console.log('2' === 2); // exact equality, so different types will always be false

console.log(2 !== 2);
console.log('2' !== 2);

// && ||

let isChecked = true,
    isClosed = true,
    isUnchecked = false;

console.log(isChecked && isClosed);
console.log(isChecked && isUnchecked); // && 1 false = false
console.log(isChecked || isUnchecked); // || 1 true = true
console.log(!isChecked || isUnchecked);

const hamburger = false;
const fries = true;

console.log(hamburger && fries);

const hamburger1 = 5;
const fries1 = 1;

if(hamburger1 && fries1){
    console.log("I'm full")
}
// null, undefined, '', 0, NaN = always false

// we want to order either 3 hamburgers OR 1 cola OR 2 nuggets and 2 fries
const hamburger2 = 5;
const fries2 = 1;
const nuggets2 = 1;
const cola2 = 1;

if(hamburger2 >= 3 && cola2 || nuggets2 >= 2 && fries2){
    console.log("I'm full")
}
