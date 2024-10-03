function resolvedPromise(){
    let success = {'message' : 'delayesd success!'}
    var p1 = new Promise((resolve) => { 
        setTimeout(() => {
            resolve(success);
        }, 500);
    });
    return p1;
}

function rejectedPromise(){
    var p1 = new Promise((resolve, reject) => { 
        setTimeout(() => {
            reject(new Error('error: deleyed exceptiom!'))
        }, 500);
    });
    return p1;
}

resolvedPromise()
    .then((result) => {
        console.log(result);
    });

rejectedPromise()
.then((resolve) => console.log(resolve),
        (e) => console.log(e));