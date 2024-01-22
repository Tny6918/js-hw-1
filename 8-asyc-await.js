async function asyncFunc(){

}

const anonimAsyncFunc = async () => {}

const asyncFn = async () => {
    return 'text from async function'
}

console.log(asyncFn())


const asyncFn = async () => {
    return 'text from async function'
}

// console.log(asyncFn())

asyncFn().then( text => {
    console.log(text)
})

const  timeoutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('2 sec wait');
            resolve();
        }, 2000)
    })
}

const asyncFn = async () => {
    console.log('Send request');
    await timeoutPromise();
    await timeoutPromise();
    console.log('Data received');
}

asyncFn();