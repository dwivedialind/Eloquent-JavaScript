function range(start, end){
    let arr = [];
    while(start!=end+1){
        arr.push(start);
        start++;
    }
    return arr;
}

let sum = (arr) =>{
    let total = 0;
    for(let i of arr){
        total += i;
    }
    return total;
}

console.log(sum(range(1,10)));