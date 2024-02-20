//requirements:
//1. fizz for divisible by only 3
//2. buzz for divisible by only 5
//3. fizzbuzz for divisible by both 3 and 5

for(let i = 1; i < 101; i++){
	if(!(i%3) && (i%5))
		console.log(i+" Fizz");
	else if((i%3) && !(i%5))
		console.log(i+ " Buzz");
	else if(!(i%3) && !(i%5))
		console.log(i + " FizzBuzz");
	else
	 	continue;
}
