async function asyncFunc(){
    return 'text from async function'
}

console.log(asyncFunc());

// function asyncFunc2(){
//     await <someAction>
// }

const asyncFunc3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Text from async function')
            resolve()
        },  3000)
    })
}

const asyncFunction = async () => {
    console.log('Start');
    await asyncFunc3();
    console.log('End')
}

asyncFunction();