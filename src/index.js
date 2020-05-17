const helloTitle = document.createElement('h2');
helloTitle.innerText = 'Hello';
document.body.appendChild(helloTitle);

const promise = new Promise(function (resolve, reject) {
    let randNum = Math.floor(Math.random() * 11);
    setTimeout(() => resolve(randNum), 3000);
});

promise.then(
    result => console.log(result),
    error => console.log(error)
);

const makeAllCaps = function functionToChainPromises(arr) {
    return new Promise(function (resolve, reject) {
        let result=[];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "string"){
                reject('Not every item is a string');
            }
            else {
                result.push(arr[i].toUpperCase());
            }
        }
        resolve(result);
    });
};

const chainPromise=makeAllCaps(["rena", "Ariel", 'Aviva', 'nosson']);
let sortWords=function sortsWordsInAnArray(arr){
    return arr.sort();
}
chainPromise.then(
    result=>console.log(sortWords(result)),
    error=>console.error(error)
);