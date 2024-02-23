const score = {visitors: 0, home: 0};
score.visitors = 1;
//Above is okay
score = {visitors: 1, home: 1};
//TypeError: Assignment to constant variable
