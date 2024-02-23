function reverseArray(arr){
    let reverseArr = [];
    for(let i of arr)
        reverseArr.unshift(i);
    return reverseArr;
}

function reverseArrayInPlace(arr){
    let arrLength = arr.length;
    for(let i = 0; i < Math.floor(arrLength/2); i++){
        let temp = arr[i];
        arr[i] = arr[arrLength-i-1];
        arr[arrLength-i-1] = temp; 
    }
}

console.log(reverseArray(["A", "B", "C"]));

let arrayVAlue = [1,2,3,4,5];

reverseArrayInPlace(arrayVAlue);
console.log(arrayVAlue);
