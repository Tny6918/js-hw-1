//1
let humburger = 3;
let fries = 1;

if(humburger >= 3 && fries >= 1){
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

//2
let priceWare = 1500;

if(priceWare >= 1000 && priceWare <= 1900){
    console.log('Ціна підходить')
} else {
    console.log('Ціна не підходить')
}

//3
let priceGoods = 1001;

if(!(priceGoods >= 1000 && priceGoods <= 1900)){
    console.log('Ціна не в діапазоні')
}else{
    console.log('Ціна в діапазоні')
}

if(priceGoods < 1000 || priceGoods > 1900){
    console.log('Ціна не в діапазоні')
}else{
    console.log('Ціна в діапазоні')
}

//4
let monthName = 'March';

if(monthName === 'December' || monthName === 'January' || monthName === 'February'){
    console.log('It is winter')
} else if(monthName === 'March' || monthName === 'April' || monthName === 'May'){
    console.log('It is spring')
} else if(monthName === 'June' || monthName === 'July' || monthName === 'August'){
    console.log('It is summer')
} else if(monthName === 'September' || monthName === 'November' || monthName === 'October'){
    console.log('It is autumn')
}

//5
let a = 6;
let b = 1;
let c = 4;
let maxNum;

if(a>=b && a>=c){
    maxNum = a;
}else if(b>=a && b>=c){
    maxNum = b;
} else {
    maxNum = c;
}

if(a === maxNum && b>c){
    console.log(b + ' це середне число')
} else if(a  === maxNum && c>b){
    console.log(c + ' це середне число')
} else if(b === maxNum && a>c){
    console.log(a + ' це середне число')
} else if(b === maxNum && c>a){
    console.log(c + ' це середне число')
} else if(c === maxNum && a>b){
    console.log(a + ' це середне число')
} else if (c === maxNum && b>a){
    console.log(b + ' це середне число')
} else {
    console.log('не існує третього середнього числа')
}

//6
let dayNumber = 3;

switch(dayNumber){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

//7
let numberOne = 50;
let numberTwo = 5;
let operation = '-';
let result;

switch(operation){
    case '+':
        result = numberOne + numberTwo;
        console.log(result);
        break;
    case '-':
        result = numberOne - numberTwo;
        console.log(result);
        break;
    case '*':
        result = numberOne * numberTwo;
        console.log(result);
        break;
    case '/':
        result = numberOne / numberTwo;
        console.log(result);
        break;
    default:
        console.log('Я не знаю таку операцію');
        break;
}

//13
let expression = 'Перевірка';
let expressionLowerCase = expression.toLowerCase();
let removedVowels = expressionLowerCase.replace(/['аеєиіїоуюя']/g, '');
console.log(removedVowels);

//14
let meterNum = 1041;
let meterToString = meterNum.toString();
let lastNumMeter = meterToString[meterToString.length - 1];
let lastNumMeterAsNumber = parseInt(lastNumMeter, 10);
let consoleMeterRes;

let kmNum = meterNum / 1000;
let kmToString = kmNum.toString();
let lasNumKm = kmToString[kmToString.length -1];
let lastNumKmAsNumber = parseInt(lasNumKm, 10);

if (meterNum >= 10 && lastNumMeterAsNumber === 0) {
    consoleMeterRes = meterNum + ' метрів - це ';

} else if (meterNum > 1 && meterNum < 5) {
    consoleMeterRes = meterNum + ' метри - це ';

} else if (meterNum > 10 && (lastNumMeterAsNumber === 2 || lastNumMeterAsNumber === 3 || lastNumMeterAsNumber === 4)) {
    consoleMeterRes = meterNum + ' метри - це ';

} else if ((meterNum >= 100 || meterNum === 1) && lastNumMeterAsNumber === 1) {
    consoleMeterRes = meterNum + ' метр - це ';
}

if (consoleMeterRes) {
    if (kmNum % 1 === 0) {
        if (lastNumKmAsNumber === 1) {
            console.log(consoleMeterRes + kmNum + ' кілометр');
        } else if (lastNumKmAsNumber > 1 && lastNumKmAsNumber < 5) {
            console.log(consoleMeterRes + kmNum + ' кілометри');
        } else {
            console.log(consoleMeterRes + kmNum + ' кілометрів');
        }
    } else {
        console.log(consoleMeterRes + kmNum + ' кілометра');
    }
}


//1 as a function
function checkCookedFood (humburger, fries) {
    if(humburger >= 3 && fries >= 1){
        return 'Ми поїли';
    } else {
        return 'Ми йдемо в інше кафе'
    }
}
let dinner = checkCookedFood(3,1);
console.log(dinner);

//2 as a function
function priceChecker (priceGoods) {
    if(priceGoods >= 1000 && priceGoods <= 1900){
        return 'Ціна підходить';
    } else {
        return 'Ціна не підходить';
    }
}

let shopping = priceChecker(1000);
console.log(shopping);

//3 as a function
function priceCheckNegative (priceForGoods){
    if(!(priceForGoods >= 1000 && priceForGoods <= 1900)){
        return 'Ціна не в діапазоні';
    }else{
        return 'Ціна в діапазоні';
    }
}
console.log(priceCheckNegative(1000));

function priceCkeckPositive (priceForGoods) {
    if(priceForGoods < 1000 || priceForGoods > 1900){
        return 'Ціна не в діапазоні';
    }else{
        return 'Ціна в діапазоні';
    }
}
console.log(priceCkeckPositive(1000));

//4 as a function
function seasonCheck (monthName) {
    if(monthName === 'December' || monthName === 'January' || monthName === 'February'){
        return 'It is winter';
    } else if(monthName === 'March' || monthName === 'April' || monthName === 'May'){
        return 'It is spring';
    } else if(monthName === 'June' || monthName === 'July' || monthName === 'August'){
        return 'It is summer';
    } else if(monthName === 'September' || monthName === 'November' || monthName === 'October'){
        return 'It is autumn';
    }
}
console.log(seasonCheck('March'));

//5 as a function

function numSelector (a,b,c) {
    let maxNum;

    if (a >= b && a >= c) {
        maxNum = a;

        if (a === maxNum && b > c) {
            return b + ' це середнє число';
        } else if (a === maxNum && c > b) {
            return c + ' це середнє число';
        }
    } else if (b >= a && b >= c) {
        maxNum = b;

        if (b === maxNum && a > c) {
            return a + ' це середнє число';
        } else if (b === maxNum && c > a) {
            return c + ' це середнє число';
        }
    } else {
        maxNum = c;

        if (c === maxNum && a > b) {
            return a + ' це середнє число';
        } else if (c === maxNum && b > a) {
            return b + ' це середнє число';
        }
    }
}
console.log(numSelector(10,15,7));

//6 as a function
function dayCheck (dayNumber) {
    switch(dayNumber){
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Sunday';
            break;
    }
}
console.log(dayCheck(7));

//7 as a function
function simpleOperations (numberOne, numberTwo, operation) {

    switch(operation){
        case '+':
            return result = numberOne + numberTwo;
            break;
        case '-':
            return result = numberOne - numberTwo;
            break;
        case '*':
            return result = numberOne * numberTwo;
            break;
        case '/':
            return result = numberOne / numberTwo;
            break;
        default:
            return 'Я не знаю таку операцію';
            break;
    }
}
console.log(simpleOperations(10, 5, '+'));

//8
let arrayFromTask = [];
let arrayLength = 5;

for( let i = 1; i <= arrayLength; i++) {
    arrayFromTask.push(i);
}
console.log(arrayFromTask);

//9
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = [];
let oddNumbers = [];
let lengthArray = 9;

for (let i = 0; i < lengthArray; i++) {
    if (numbersArray[i] % 2 === 0) {
        evenNumbers.push(numbersArray[i]);
    } else {
        oddNumbers.push(numbersArray[i]);
    }
}
console.log("Even numbers are: " + evenNumbers);
console.log("Odd numbers are: " + oddNumbers);

//10
let total = 0;
let myArr = [2, 3, 4, 5, 6];

for (let i = 0; i < myArr.length; i++) {
    total = total + myArr[i];
}
console.log(total);

//11
const arr = [[1, 2], [3, 4], [5, 6]];

for ( let i = 0; i < arr.length; i++){
    for (let a = 0; a <arr[i].length; a++){
        console.log(arr[i][a]);
    }
}

//12
let arrProduct1 = [[1], [2], [3]];
let arrProduct2 = [[1, 2], [3, 4], [5, 6, 7]];
let arrProduct3 = [[5, 1], [0.2, 4, 0.5], [3, 9]]

let product = 1;

for ( let i = 0; i < arrProduct2.length; i++) {
    for (let b = 0; b < arrProduct2[i].length; b++) {
        product = product * arrProduct2[i][b];
    }
}
console.log(product);

//13 as a function
function vowelsDeleter (wordExample) {
    let expressionLowerCase = wordExample.toLowerCase();
    let removedVowels = expressionLowerCase.replace(/['аеєиіїоуюя']/g, '');
    return removedVowels;
}

console.log(vowelsDeleter('Перевірка'));

//14
function meterConvertor (meterNum) {

    let meterToString = meterNum.toString();
    let lastNumMeter = meterToString[meterToString.length - 1];
    let lastNumMeterAsNumber = parseInt(lastNumMeter, 10);
    let consoleMeterRes;

    let kmNum = meterNum / 1000;
    let kmToString = kmNum.toString();
    let lasNumKm = kmToString[kmToString.length -1];
    let lastNumKmAsNumber = parseInt(lasNumKm, 10);

    if (meterNum >= 10 && lastNumMeterAsNumber === 0) {
        consoleMeterRes = meterNum + ' метрів - це ';

    } else if (meterNum > 1 && meterNum < 5) {
        consoleMeterRes = meterNum + ' метри - це ';

    } else if (meterNum > 10 && (lastNumMeterAsNumber === 2 || lastNumMeterAsNumber === 3 || lastNumMeterAsNumber === 4)) {
        consoleMeterRes = meterNum + ' метри - це ';

    } else if ((meterNum >= 100 || meterNum === 1) && lastNumMeterAsNumber === 1) {
        consoleMeterRes = meterNum + ' метр - це ';
    }

    if (consoleMeterRes) {
        if (kmNum % 1 === 0) {
            if (lastNumKmAsNumber === 1) {
                return consoleMeterRes + kmNum + ' кілометр';
            } else if (lastNumKmAsNumber > 1 && lastNumKmAsNumber < 5) {
                return consoleMeterRes + kmNum + ' кілометри';
            } else {
                return consoleMeterRes + kmNum + ' кілометрів';
            }
        } else {
            return consoleMeterRes + kmNum + ' кілометра';
        }
    }

}
console.log(meterConvertor(1141));
