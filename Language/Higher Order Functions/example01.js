const SCRIPTS = require("./script");

//functions that create new functions
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//function that change other functions
function noisy(f){
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3,2,1);

//function that provide new types of control flow
function unless(test, then) {
    if (!test) then();
  }
  
  function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  repeat(3, n => {
    unless(n % 2 == 1, () => {
      console.log(n, "is even");
    });
  });


  ["A", "B"].forEach(l => console.log(l));

  //Filter is a standard array method

  console.log(SCRIPTS.filter(s=>s.direction=="ttb"));

  //filter for year below 1500

  console.log(SCRIPTS.filter(s => s.year <= 1500).length);