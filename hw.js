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
let meterNum = 8000;
let kilometerNum = meterNum / 1000;
let stringKilometer = kilometerNum.toString();
let lastNumString = stringKilometer[stringKilometer.length - 1];
let lastNum = parseInt(lastNumString);


if(kilometerNum % 1 === 0 ){
    if(lastNum === 1){
        console.log(kilometerNum + ' кілометр')
    } else if(lastNum > 1 && lastNum < 5){
        console.log(kilometerNum + ' кілометри')
    } else {
        console.log(kilometerNum + ' кілометрів')
    }
} else {
    console.log(kilometerNum + ' кілометра')
}