let todoList = [];

let remember = task => todoList.push(task);
let getTAsk = () => {return todoList.shift()};
let rememberUrgently = task => todoList.unshift(task);

remember("groceries");
remember("study");
remember("revise");
remember("car wash");

console.log(getTAsk());

rememberUrgently("call parents");

console.log(getTAsk());

console.log([1,2,3,4].indexOf(2));
console.log([1,2,3,4,4,5].lastIndexOf(4,3));

function remove(array, index){
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}
console.log(remove(['a', 'b', 'c', 'd', 'e'],2));
