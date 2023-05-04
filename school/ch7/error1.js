setInterval(() => {
    console.log('start');
    try {
        throw new Error('I will kill the Server!!');
    } catch (err) {
        console.error(err);
        // console.log('test');
    }
}, 1000);

// 에러가 발생했지만 계속해서 반복되는게 포인트이다