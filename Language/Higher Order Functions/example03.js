const SCRIPTS = require("./script.js");

function reduce(array, combine, start){
    let current = start;
    for(let element of array)
        current = combine(current, element);
    return current;
}

console.log(reduce([1,2,3,4], (a,b)=>{ return a+b}, 0));

console.log([1,2,3,4].reduce((a,b)=> a+b));

//use reduce(twice) to find the script with the most characters

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b:a;
}));


