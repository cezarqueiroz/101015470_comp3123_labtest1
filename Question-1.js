const mixedArray = ['PIZZA', 10, true, 25,false, 'Wings'];

function lowerCaseWords(mixedArray){
    var p1 = new Promise((resolve, reject) => {
        const filterArr = mixedArray.filter(x => typeof x == 'string');
        const lowerCaseWords= filterArr;
        for(i = 0; i< filterArr.length; i++){
            lowerCaseWords[i] = filterArr[i].toLowerCase();
        }
        if (lowerCaseWords.length > 0)
            resolve(lowerCaseWords);
        else
            reject("no words in the array!");
    });
    return p1;
}

lowerCaseWords(mixedArray)
    .then((resolve) => console.log(resolve),
          (e) => console.log(e));
