function every(array, test){
    
    for(let i of array)
        if(!test(i)) return false;

    return true;

}

function every2(array, test){
    if(array.some(i => !test(i)))
        return false;
    return true;
}

console.log(every2([1,3,5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n <10));

