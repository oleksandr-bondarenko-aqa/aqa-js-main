
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
*/

function didWeHaveEnoughFood (hamburger, fries, friendsEatHamburgers, friendsEatFries){
    let hamburgersLeft = hamburger - friendsEatHamburgers;
    let friesLeft = fries - friendsEatFries;
    if (hamburgersLeft > -1 && friesLeft > -1){
        console.log("Ми поїли")
    } else {
        console.log("Ми йдемо в інше кафе")
    }
}

didWeHaveEnoughFood(5, 1, 4, 1);

/*
2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.
*/

function checkPrice(price){
    if (price >= 1000 && price <= 1900){
    console.log(`Ціна ${price} в діапазоні 1000-1900`)
    } else {
    console.log(`Ціна ${price} поза діапазоном 1000-1900`)
    }
}

checkPrice(700);

/*
3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.
*/

function checkPrice2(price){
    if (price < 1000 || price > 1900){
        console.log(`Ціна ${price} поза діапазоном 1000-1900`)
    } else {
        console.log(`Ціна ${price} в діапазоні 1000-1900`)
    }
}

function checkPrice3(price){
    if (!(price >= 1000 && price <= 1900)){
        console.log(`Ціна ${price} поза діапазоном 1000-1900`)
    } else {
        console.log(`Ціна ${price} в діапазоні 1000-1900`)
    }
}

checkPrice2(1901);
checkPrice3(1000);


/*
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
*/

function whichSeasonIsIt(seasonNumber){
    if (seasonNumber === 1){
        console.log('Зима')
    } else if (seasonNumber === 2){
        console.log('Весна')
    } else if (seasonNumber === 3){
        console.log('Літо')
    } else if (seasonNumber === 4){
        console.log('Осінь')
    }
}

whichSeasonIsIt(4);

/*
5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
*/

function middleNumberValue(a, b, c){
    if (a > b && a > c){
        if (b > c){
            console.log(`Середнє значення має число ${b}`)
        } else {
            console.log(`Середнє значення має число ${c}`)
        }
    } else if (b > a && b > c){
        if (a > c){
            console.log(`Середнє значення має число ${a}`)
        } else {
            console.log(`Середнє значення має число ${c}`)
        }
    } else if (c > a && c > b){
        if (a > b){
            console.log(`Середнє значення має число ${a}`)
        } else {
            console.log(`Середнє значення має число ${b}`)
        }
    }
}

middleNumberValue(3, 2, 13)
/*
6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.
*/

function whichDayOfWeekIsIt(dayOfWeek){
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
}

whichDayOfWeekIsIt(5);

/*
7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.
*/

let calculateNumbers = (num1, num2, operator) => {
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
}

calculateNumbers(2, 5, '*');

/*
8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

function removeVowels(word){
    let vowels = /[аеиіоуїюяАЕИІОУЇЮЯ]/g;
    console.log(word.replace(vowels, ''))
}

removeVowels("Перетворення");

/*
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/

// Full solution covering all cases

function convertMetersToKilometers(meters){
    let kilometers = meters / 1000;
    const checkMetersSingleNumbers = meters.toString().slice(-1); // перевірка цифр 2-4
    const checkMetersTens = meters.toString().slice(-2); // перевірка цифр 11-19
    const checkKilometersSingleNumbers = kilometers.toString().slice(-1); // перевірка цифр 2-4
    const checkKilometersTens = kilometers.toString().slice(-2); // перевірка цифр 11-19

    const ending1 = "и",
        ending2 = "ів";

    if (checkMetersTens === "11" || checkMetersTens === "12" || checkMetersTens === "13" || checkMetersTens === "14" || checkMetersTens === "15" || checkMetersTens === "16" || checkMetersTens === "17" || checkMetersTens === "18" || checkMetersTens === "19"){
        console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
    } else if (checkMetersSingleNumbers === "1"){
        console.log(`${meters} метр це ${kilometers} кілометр`)
    } else if (checkMetersSingleNumbers === "2" || checkMetersSingleNumbers === "3" || checkMetersSingleNumbers === "4"){
        console.log(`${meters} метр${ending1} це ${kilometers} кілометр${ending1}`)
    } else if (checkMetersSingleNumbers === "0"){
        if (checkKilometersTens === "11" || checkKilometersTens === "12" || checkKilometersTens === "13" || checkKilometersTens === "14" || checkKilometersTens === "15" || checkKilometersTens === "16" || checkKilometersTens === "17" || checkKilometersTens === "18" || checkKilometersTens === "19"){
            console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
        } else if (checkKilometersSingleNumbers === "1"){
            console.log(`${meters} метр${ending2} це ${kilometers} кілометр`)
        } else if (checkKilometersSingleNumbers === "2" || checkKilometersSingleNumbers === "3" || checkKilometersSingleNumbers === "4"){
            console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending1}`)
        } else {
            console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
        }
    } else {
        console.log(`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`)
    }
}

convertMetersToKilometers(1013);

// Partial solution not covering all possible cases

// function convertMetersToKilometers(meters){
//     let kilometers = meters / 1000;
//     const checkLastNumber = meters.toString().slice(-1);
//
//     const ending1 = "и",
//         ending2 = "ів";
//
//     if(checkLastNumber === '1'){
//         console.log(`${meters} метр це ${kilometers} кілометр`)
//     } else if(checkLastNumber === '2' || checkLastNumber === '3' || checkLastNumber === '4'){
//         console.log(`${meters} метр${ending1} це ${kilometers} кілометр${ending1}`)
//     } else if (checkLastNumber > '5' || checkLastNumber === '0'){
//         console.log((`${meters} метр${ending2} це ${kilometers} кілометр${ending2}`))
//     }
// }
//
// convertMetersToKilometers(1013); // WRONG ENDING