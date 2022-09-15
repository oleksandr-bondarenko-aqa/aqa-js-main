let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c);

// ... another code

a = 8;
b = 12;

console.log(c);

function sum(a, b){
    let c = a + b;
    console.log(c);
}

let d = 1;
let f = 3;

sum(3, 10);
sum(d, f);

function sum2(a, b){
    let c = a + b;
    return c;
}

console.log(sum2(3, 10));

let num1 = 1;
let num2 = sum2(3, 10);

console.log(num1 + sum2(3, 10));
console.log(num1 + num2);

const anonymFunc = function (a, b){
    let c = a + b;
    return c;
}

console.log(anonymFunc(1, 2));

const arrowFunc = (a, b) => {
        let c = a + b;
        return c;
}

console.log(arrowFunc(2, 3));

const funcWithDefaultValue = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultValue(2, 8));
console.log(funcWithDefaultValue(2));

const playWithReturnFunc = () => {
    for (let i = 0; i < 10; i++){
        console.log(i);
        if (i === 6){
            return
        }
    }
}

playWithReturnFunc()

console.log(Date());

const myRequestWithDate = (field1, addedAt = Date()) => {
    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = addedAt;

    return requestBody;
}

console.log(myRequestWithDate('weerr'))
console.log(myRequestWithDate('weerr', 'sqedfwsd'));

// Async in JS
console.log(1);

function someFunc(){
    console.log(2)
}

setTimeout(someFunc, 5000);

console.log(3)

// Callback function (function inside function)
function first(){
    setTimeout(function (){
        console.log('first')
    }, 3000)
}

function second(){
    console.log("Second");
}

first();
second();

function someFuncWithCallback(param1, callbackFunc){
    console.log(`Here is my param1 ${param1}`);
    callbackFunc();
}

someFuncWithCallback("qwqeew", function (){
    console.log('Here is log from callback func')
})

function it(testDescription, testActions){
    console.log(`test description: ${testActions}`)
    testActions();
}

it('Google search', () => {

})

// Difference between function and =>
sum22(1, 2);
sum333(1, 2);

function sum22(a, b){
    let c = a + b;
    console.log(c)
}

const sum333 = (a, b) => {
    let c = a + b;
    console.log(c)
}