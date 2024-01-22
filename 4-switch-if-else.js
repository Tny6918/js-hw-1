
// if - else
if(4==4){
    console.log('Expression is true')
}

if(4==4){
    console.log('Expression is true')
}else{
    console.log('Expression is false')
}


let num = 2;

if(num === 1){
    console.log('Expression is 1')
} else if (num === 2){
    console.log('Expression is 2')
} else if (num === 3){
    console.log('Expression is 3')
} else if (num === 4){
    console.log('Expression is 4')
} else {
    console.log('Expression is not 1, 2, 3 or 4')
}

// тернарний оператор / if-else
(num === 50) ? console.log('Expression is true') : console.log('Expression is false')


const hamburger = 1;
const fries = 0;

if(hamburger){
    if(fries){
        console.log('Я ситий');
    }else{
        console.log('Я голодний');
    }
}else{
    console.log('Я голодний');
}

// switch-case

let number = 50;

switch(number){
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break;
    case 51:
        console.log('Value = 51');
        break;
    default:
        console.log('Value = 51');
        break;
}