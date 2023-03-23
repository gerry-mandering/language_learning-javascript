const   promise1 = Promise.resolve('success1');
const   promise2 = Promise.resolve('success2');

// Promise.all([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

(async () => {
    for await(promise of [promise1, promise2]) {
        console.log(promise);
    }
})();