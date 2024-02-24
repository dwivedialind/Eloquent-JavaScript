let arrays = [[1,2,3],[4,5],[6]];

//flattening array 
let flatArr = [];
for(let i = 0 ; i < arrays.length; i++){
    flatArr = flatArr.concat(arrays[i]);
}



console.log(arrays.reduce((a,b) => a.concat(b)));