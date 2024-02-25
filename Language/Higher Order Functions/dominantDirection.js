const SCRIPTS = require("./script.js");

function dominantDirection(text){
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script? script.direction : "none"; 
    }).filter(c => c.name!="none");

    let total = scripts.reduce((n, {count})=> n+count, 0);
    if(total == 0) "No Scripts found";

    if(scripts.length==1)
        return scripts[0].name
    else{
        return scripts[0].count > scripts[1].count ? scripts[0].name : scripts[1].name;
    }


   
}
function characterScript(code){
    for(let script of SCRIPTS){
        if(script.ranges.some(([from, to]) => 
           code >= from && code < to
        ))
            return script;
       
    } 
    return null;
}

function countBy(text, groupName){
    let counts = [];
    for(let char of text){
        let name = groupName(char);
        let known = counts.findIndex(c => c.name == name);
        if(known == -1){
            counts.push({name, count:1});
        }else{
            counts[known].count++;
        }
    }

    return counts;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

