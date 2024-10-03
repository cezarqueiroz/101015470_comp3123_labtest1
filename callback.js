const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message' : 'delayesd success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: deleyed exceptiom!');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}
delayedSuccess()
delayedException()