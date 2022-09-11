
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

let hamburger = 5 - 4,
    fries = 3 - 1;

if (hamburger >= 0 && fries >= 0){
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

let price = 888;
if (price >= 1000 && price <= 1900){
    console.log(`Ціна ${price} в діапазоні 1000-1900`)
} else {
    console.log(`Ціна ${price} поза діапазоном 1000-1900`)
}

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

let price2 = 2222;
if (price2 < 1000 || price2 > 1900){
    console.log(`Ціна ${price2} поза діапазоном 1000-1900`)
} else {
    console.log(`Ціна ${price2} в діапазоні 1000-1900`)
}

let price3 = 1111;
if (!(price3 < 1000 || price3 > 1900)){
    console.log(`Ціна ${price3} в діапазоні 1000-1900`)
} else {
    console.log(`Ціна ${price3} поза діапазоном 1000-1900`)
}

/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

let season = 3;

if (season === 1){
    console.log('Весна')
} else if (season === 2){
    console.log('Літо')
} else if (season === 3){
    console.log('Осінь')
} else if (season === 4){
    console.log('Зима')
}

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

let a = 2,
    b = 13,
    c = 9

if (a > b && a < c ){
    console.log(`Середнє значення має число ${a}`)
} else if (b > a && b < c){
    console.log(`Середнє значення має число ${b}`)
} else if (c > a && c < b){
    console.log(`Середнє значення має число ${c}`)
}

/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

let dayOfWeek = 5;

switch (dayOfWeek){
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четвер');
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;
}

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let num1 = 7,
    num2 = 5;

let operator = "*";

switch (operator){
    case "+":
        operator = num1 + num2
        console.log(`Результат додавання: ${operator}`)
        break;
    case "-":
        operator = num1 - num2
        console.log(`Результат віднімання: ${operator}`)
        break;
    case "*":
        operator = num1 * num2
        console.log(`Результат множення: ${operator}`)
        break;
    case "/":
        operator = num1 / num2
        console.log(`Результат ділення: ${operator}`)
        break;
}

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let str = "транклюкація";
let vowels = /[аеиіоуїюя]/g;
console.log(str.replace(vowels, ''))

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

let meters = 6781;
let kilometers = meters / 1000;
let checkNumber = meters.toString().slice(-1);
let checkTens = meters.toString().slice(-2);

let ending1 = "и",
    ending2 = "ів";

if (checkTens === "11" || checkTens === "12" || checkTens === "13" || checkTens === "14" || checkTens === "15" || checkTens === "16" || checkTens === "17" || checkTens === "18" || checkTens === "19"){
    console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
} else if (checkNumber === "1"){
    console.log(`${meters} метр це ${kilometers} кілометр`)
} else if (checkNumber === "2" || checkNumber === "3" || checkNumber === "4"){
    console.log(`${meters} метр${ending1} це ${kilometers} кілометр${ending1}`)
} else {
    console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
}