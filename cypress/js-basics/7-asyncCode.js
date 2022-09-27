// console.log('Server data request...');
//
// const req = new Promise((resolve, reject) => {})
//
// const req2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Server answer getting ready...')
//
//         const product = {
//             name: 'laptop',
//             price: 38000
//         }
//
//         setTimeout(() => {
//             product.status = 'inStock'
//             console.log(product);
//             }, 2000)
//         }, 3000)
//     })
//
// console.log('Server data request...');
//
// const req3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Server answer getting ready...')
//
//         const product = {
//             name: 'laptop',
//             price: 38000
//         }
//
//         resolve(product);
//     }, 3000)
// })
//
// req3.then((laptop) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             laptop.status = 'inStock'
//             resolve(laptop)
//         }, 2000)
//     }).then((data) => {
//         data.isModified = true;
//         return data;
//     }).then((data) => {
//         console.log(data)
//     })
// })
//
// const req5 = new Promise((resolve, reject) => {
//     //.....
//     //.....
//
//     if (errorHappened){
//         reject();
//     }
// })
//
// req5.catch(() => {
//     console.log('Some error happened')
// })