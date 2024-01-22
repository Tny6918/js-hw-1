console.log('Запит даних з серверу');

setTimeout(()=>{
    console.log('Підготовка даних для відповіді');

    const product = {
        name: 'Phone',
        price: 10000
    }

    setTimeout(()=>{
        product.status = 'inStock';
        console.log(product);
    }, 2000);

}, 5000)

console.log('Дані отримані');

// promise

const req = new Promise((resolve, reject) => {});


const req2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        setTimeout(()=>{
            product.status = 'inStock';
            console.log(product);
        }, 2000);

    }, 5000)
});

const req3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        resolve()

    }, 5000)
});

const req4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        resolve()

    }, 5000)
});

req4.then(()=>{
    console.log('Data received');
})

const req5 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        resolve(product)

    }, 5000)
});

req5.then( response => {
    setTimeout(()=>{
        response.status = 'inStock';
        console.log(response);
    }, 2000);
})

// final version

const req2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        resolve(product)

    }, 5000)
});

console.log('Запит даних з серверу');

req2.then( response => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            response.status = 'inStock';
            resolve(response);
        }, 2000);
    })
}).then( product => {
    console.log(product)
}).then(()=>{
    console.log('Дані отримані');
})



// catch and finally

let errorHappened = false;

const req2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('Підготовка даних для відповіді');

        const product = {
            name: 'Phone',
            price: 10000
        }

        let errorText = 'Some error text!!!';

        if(errorHappened){
            reject(errorText);
        }

        resolve(product)

    }, 5000)
});

console.log('Запит даних з серверу');

req2.then( response => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            response.status = 'inStock';
            resolve(response);
        }, 2000);
    })
}).then( product => {
    console.log(product)
}).then(()=>{
    console.log('Дані отримані');
}).catch( errorText => {
    console.log(errorText);
}).finally(()=>{
    console.log('Finally block')
})


fetch('https://jsonplaceholder.typicode.com/todos/1000')
    .then(response => response.status)
    .then(status => {
        if(status !== 200){
            console.log(`Error! Status is ${status}`)
        }
    })