let value = {
    name: "alind dwivedi",
    age: 23,
    flying: "no"
};
let string = JSON.stringify(value);
console.log(string);
console.log(JSON.parse(string).flying);