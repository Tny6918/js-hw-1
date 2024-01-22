let number = 5;
const userScore = 100;

//let 5number;
//let /number;

// camelCase - найбільш розповсюджений варіант іменування
// snake_case - альтернатива до camelCase, використовується для назв гілок в Git
// UPPER_SNAKE_CASE - константи
// kebab-case - папки проекту
// PascalCase - назви класів


// number nUmber numBer - різні змінні

number = 10;
console.log(userScore);

userScore = 10;

const obj = {
    age: 10
};
obj = 20; // переназначити константу не можна
obj.age = 20; // переназначити частину обʼєкту в константі можна
console.log(obj);

var firstName = 'Dmytro'; // старий варіант обʼявлення змінних

{
    let someNum = 5;
    console.log(someNum);
}

console.log(someNum);



    const a = 3000;
    const b = 2000;
    console.log('Ширина авто =' + a + ', довжина авто =' + b);


    const width = 3000;
    const length = 2000;
    console.log('Ширина авто =' + width + ', довжина авто =' + length);

    const vehicleBodyWidth = 3000;
    const vehicleBodyLength = 2000;
    console.log('Ширина авто =' + vehicleBodyWidth + ', довжина авто =' + vehicleBodyLength);

    const carBodyWidth = 3000;
    const vehicleBodyLength = 2000;
    console.log('Ширина авто =' + carBodyWidth + ', довжина авто =' + vehicleBodyLength);
