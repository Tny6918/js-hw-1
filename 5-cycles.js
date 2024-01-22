let num = 10;

// while

// while(num < 20){ // infinity loop
//     console.log(num)
// }

while(num < 20){
    console.log(num);
    num++;
}

// do-while

// do{
//     console.log(num)
// }while(num < 20) // infinity loop

do{
    console.log(num);
    num++
}while(num < 20)

// for

for(let i = 1; i < 10; i++){
    console.log(i);
}

// let num = 10;
//
// for(let i = 1; i < num; i++){
//     console.log(num);
//     num++;
// }

let arr = [2, 4, 6, 8, 10, 11, 12, 13, 14];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//let arr = [2, 4, 6, 8, 10, 11, 12, 13, 14];

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 11){
        break;
    }
    console.log(arr[i]);
}

let arr = [2, 4, 6, 8, 10, 11, 12, 13, 14];

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 11){
        continue;
    }
    console.log(arr[i]);
}

let a = [1, 2, 3, 4, 5]
let b = [];

for(let i = 0; i < a.length; i++){

    if(!(a[i]%2)){
        b.push(a[i]);
    }

    for(let j = 0; j < b.length; j++){
        console.log(b[j]);
    }

}
