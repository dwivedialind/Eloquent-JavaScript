function max(...array){
    console.log(typeof array);
    let number = -Infinity;
    for(let i of array){
        if(i>number)
            number = i;
    }
    return number;
}

console.log(max(4,1,-9,2));

let numbers = [5,1,7];
//spreads out the array into the function call, passing its elements as separate arguments.
console.log(max(...numbers));

console.log(9, ...numbers, 2);

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]