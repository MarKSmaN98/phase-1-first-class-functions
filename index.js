function receivesAFunction(callBack) {
    callBack();
    return 0;
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("hey");
    };
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("ho");
    };
}

let a = returnsANamedFunction();
let b = returnsAnAnonymousFunction();
console.log(a);
console.log(b);