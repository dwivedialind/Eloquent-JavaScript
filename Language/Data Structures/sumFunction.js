
function range(start, end, step=1){
    let arr = [];
    while(start!=end){
        arr.push(start);
        start +=step;
    }
    arr.push(start);
    
    return arr;

   
}

let sum = (arr) =>{
    let total = 0;
    for(let i of arr){
        total += i;
    }
    return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55