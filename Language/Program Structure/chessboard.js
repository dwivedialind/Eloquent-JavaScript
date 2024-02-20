
let grid = 9;

//creating 1st row of grid
let row1 = "";
for(let i = 0 ; i < grid; i++){
    if(i%2==0)
        row1+=" ";
    else
        row1 +="#";
}

//creating 2nd row of grid
let row2 = "";
for(let i = 0 ; i < grid; i++){
    if(i%2==0)
        row2+="#";
    else
        row2 +=" ";
}

for(let i = 0 ; i < grid; i++){
    if(i%2==0)
        console.log(row1);
    else
        console.log(row2);
}
